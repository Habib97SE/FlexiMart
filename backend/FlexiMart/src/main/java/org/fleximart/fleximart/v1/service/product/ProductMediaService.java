package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.response.ProductMediaResponse;
import org.fleximart.fleximart.v1.DTO.product.request.ProductMediaRequest;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.product.ProductMedia;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.fleximart.fleximart.v1.repository.product.ProductMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductMediaService {

    @Autowired
    private ProductMediaRepository productMediaRepository;

    public ProductMediaService(ProductMediaRepository productMediaRepository) {
        this.productMediaRepository = productMediaRepository;
    }

    private ProductMediaResponse createProductMediaResponse(ProductMedia productMedia) {
        return ProductMediaResponse.builder()
                .id(productMedia.getId())
                .mediaUrl(productMedia.getMediaUrl())
                .mediaType(productMedia.getMediaType())
                .mediaAlt(productMedia.getAltText())
                .build();
    }

    public Boolean deleteProductMedia(Long id) {
        try {
            productMediaRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

    public Boolean deleteProductMediaByProductId(Long productVariantId) {
        try {
            List<ProductMedia> productMedia = productMediaRepository.findByProductVariant_Id(productVariantId);
            if (productMedia.isEmpty()) {
                return true;
            }
            productMediaRepository.deleteAll(productMedia);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

    public List<ProductMediaResponse> getProductMediaByProductVariantId(Long productVariantId) {
        return productMediaRepository.findByProductVariant_Id(productVariantId)
                .stream().map(this::createProductMediaResponse).toList();
    }

    public ProductMediaResponse getProductMediaById(Long id) {
        return createProductMediaResponse(Objects.requireNonNull(productMediaRepository.findById(id).orElse(null)));
    }

    public ProductMedia save(ProductMedia productMedia) {
        return productMediaRepository.save(productMedia);
    }


    public List<ProductMedia> saveProductMediaList(List<ProductMedia> productMediaList) {
        return productMediaRepository.saveAll(productMediaList);
    }


    public Object addProductMediaForProduct(Long productVariantId, ProductMediaRequest productMediaRequest) {

        if (productMediaRequest.getMediaUrl() == null || productMediaRequest.getMediaType() == null) {
            throw new IllegalArgumentException("Media URL and Media Type are required fields.");
        }

        // Build and save the ProductMedia entity
        ProductMedia productMedia = ProductMedia.builder()
                .productVariant(ProductVariant.builder().id(productVariantId).build())
                .mediaUrl(productMediaRequest.getMediaUrl())
                .mediaType(productMediaRequest.getMediaType())
                .altText(productMediaRequest.getMediaAlt())
                .build();

        return createProductMediaResponse(save(productMedia));
    }
}
