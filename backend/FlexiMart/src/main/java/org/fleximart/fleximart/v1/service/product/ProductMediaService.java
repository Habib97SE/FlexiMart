package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.response.ProductMediaResponse;
import org.fleximart.fleximart.v1.DTO.product.request.ProductMediaRequest;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.product.ProductMedia;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.fleximart.fleximart.v1.repository.product.ProductMediaRepository;
import org.fleximart.fleximart.v1.service.MediaManagement;
import org.fleximart.fleximart.v1.service.google.storage.CloudStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
public class ProductMediaService {

    private final String bucketName = "fleximart_product_media";

    private ProductMediaRepository productMediaRepository;

    private CloudStorageService cloudStorageService;

    @Autowired
    public ProductMediaService(ProductMediaRepository productMediaRepository,
                               CloudStorageService cloudStorageService) {
        this.productMediaRepository = productMediaRepository;
        this.cloudStorageService = cloudStorageService;
    }

    private ProductMediaResponse createProductMediaResponse(ProductMedia productMedia) {
        return ProductMediaResponse.builder()
                .id(productMedia.getId())
                .mediaUrl(productMedia.getMediaUrl())
                .mediaType(productMedia.getMediaType())
                .mediaAlt(productMedia.getAltText())
                .build();
    }

    private String saveToCloudStorage(String imageUrl) throws Exception {
       try {
           // Download the image from the url
           byte[] imageFile = MediaManagement.downloadImageFromUrl(imageUrl);
           // Upload the image to google cloud storage
           return cloudStorageService.uploadFile(bucketName, imageUrl, imageFile);
       } catch (Exception e) {
           System.err.println(e.getMessage());
           return null;
       }
    }

    public Boolean deleteProductMedia(Long id) {
        try {
            ProductMedia productMedia = productMediaRepository.findById(id).orElse(null);
            if (productMedia == null) {
                return true;
            }
            boolean result = MediaManagement.deleteFromGoogleCloudStorage(productMedia.getMediaUrl());
            if (result) {
                productMediaRepository.delete(productMedia);
                return true;
            }
            return false;
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

    public ProductMedia save(Long productVariantId, ProductMedia productMedia) {
        productMedia.setProductVariant(ProductVariant.builder().id(productVariantId).build());
        return productMediaRepository.save(productMedia);
    }


    public List<ProductMedia> saveProductMediaList(List<ProductMedia> productMediaList) {
        return productMediaRepository.saveAll(productMediaList);
    }


}
