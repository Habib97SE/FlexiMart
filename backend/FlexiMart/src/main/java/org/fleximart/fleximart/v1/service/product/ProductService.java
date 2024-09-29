package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.ProductMediaRequest;
import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;
import org.fleximart.fleximart.v1.DTO.product.response.*;
import org.fleximart.fleximart.v1.entity.product.*;
import org.fleximart.fleximart.v1.repository.product.ProductRepository;
import org.fleximart.fleximart.v1.service.MediaManagement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    private Product mapToProduct(ProductRequest productRequest) {
        return Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .collection(Collection.builder().id(productRequest.getCollectionId()).build())
                .brand(Brand.builder().id(productRequest.getBrandId()).build())
                .modelNumber(productRequest.getModelNumber())
                .productType(ProductType.builder().id(productRequest.getProductTypeId()).build())
                .slug(productRequest.getSlug())
                .build();
    }

    private ProductResponse mapToProductResponse (Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .slug(product.getSlug())
                .brand(BrandResponse.builder().id(product.getBrand().getId()).name(product.getBrand().getName()).build())
                .collection(CollectionResponse.builder().id(product.getCollection().getId()).name(product.getCollection().getName()).build())
                .modelNumber(product.getModelNumber())
                .productType(ProductTypeResponse.builder().id(product.getProductType().getId()).name(product.getProductType().getName()).build())
                .inventory(InventoryResponse.builder().id(product.getInventory().getId()).price(product.getInventory().getPrice()).discountPrice(product.getInventory().getDiscountPrice()).costPrice(product.getInventory().getCostPrice()).currency(product.getInventory().getCurrency()).stockQuantity(product.getInventory().getStockQuantity()).minOrderQuantity(product.getInventory().getMinOrderQuantity()).maxOrderQuantity(product.getInventory().getMaxOrderQuantity()).stockStatus(product.getInventory().getStockStatus()).inventoryTracking(product.getInventory().getInventoryTracking()).reOrderLevel(product.getInventory().getReOrderLevel()).productId(product.getId()).build())
                .productMedia(product.getProductMedia().stream().map(productMedia -> ProductMediaResponse.builder().id(productMedia.getId()).mediaAlt(productMedia.getAltText()).mediaType(productMedia.getMediaType()).mediaUrl(productMedia.getMediaUrl()).build()).collect(Collectors.toList()))
                .build();
    }

    public List<ProductResponse> findAll() {
        return productRepository.findAll().stream()
                .map(this::mapToProductResponse)
                .collect(Collectors.toList());
    }

    public ProductResponse findBySlug (String slug) {
        Product product = productRepository.findBySlug(slug);
        if (product == null) {
            return null;
        }
        return mapToProductResponse(product);
    }

    public ProductResponse findById (Long id) {
        Product product = productRepository.findById(id).orElse(null);
        if (product == null) {
            return null;
        }
        return mapToProductResponse(product);
    }

    public ProductResponse save (ProductRequest productRequest) throws Exception {
        Product product = mapToProduct(productRequest);

        for (ProductMediaRequest productMedia : productRequest.getProductMediaRequestList()) {
            byte[] imageFile = MediaManagement.downloadImageFromUrl(productMedia.getMediaUrl());
            String url = MediaManagement.uploadToGoogleCloudStorage("fleximart_product_media", product.getName() + "_media", imageFile);
            productMedia.setMediaUrl(url);
        }
        product = productRepository.save(product);

        List<ProductMedia> mediaList = new LinkedList<>();

        // Save Product MEdia
        for (ProductMediaRequest productMedia : productRequest.getProductMediaRequestList()) {
            ProductMedia productMediaEntity = ProductMedia.builder()
                    .altText(productMedia.getMediaAlt())
                    .mediaType(productMedia.getMediaType())
                    .mediaUrl(productMedia.getMediaUrl())
                    .product(product)
                    .build();
            mediaList.add(productMediaEntity);
        }

        // check if slug is already taken
        if (productRepository.findBySlug(product.getSlug()) != null) {
            // make slug unique
            product.setSlug(product.getSlug() + "-" + product.getId());
        }

        product.setProductMedia(mediaList);

        Inventory inventory = Inventory.builder()
                .price(productRequest.getInventory().getPrice())
                .discountPrice(productRequest.getInventory().getDiscountPrice())
                .costPrice(productRequest.getInventory().getCostPrice())
                .currency(productRequest.getInventory().getCurrency())
                .stockQuantity(productRequest.getInventory().getStockQuantity())
                .minOrderQuantity(productRequest.getInventory().getMinOrderQuantity())
                .maxOrderQuantity(productRequest.getInventory().getMaxOrderQuantity())
                .stockStatus(productRequest.getInventory().getStockStatus())
                .inventoryTracking(productRequest.getInventory().getInventoryTracking())
                .reOrderLevel(productRequest.getInventory().getReOrderLevel())
                .product(product)
                .build();
        product.setInventory(inventory);
        product = productRepository.save(product);
        return mapToProductResponse(product);
    }

    public ProductResponse update (Long productId, ProductRequest productRequest) {
        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            return null;
        }
        product.setName(productRequest.getName());
        product.setDescription(productRequest.getDescription());
        product.setCollection(Collection.builder().id(productRequest.getCollectionId()).build());
        product.setBrand(Brand.builder().id(productRequest.getBrandId()).build());
        product.setModelNumber(productRequest.getModelNumber());
        product.setProductType(ProductType.builder().id(productRequest.getProductTypeId()).build());
        product.setSlug(productRequest.getSlug());
        product = productRepository.save(product);
        return mapToProductResponse(product);
    }

    public Boolean delete (Long id) {
        Product product = productRepository.findById(id).orElse(null);
        if (product == null) {
            return false;
        }
        productRepository.delete(product);
        return true;
    }

    public List<ProductResponse> findByBrand (Long brandId) {
        return productRepository.findByBrand_Id(brandId).stream()
                .map(this::mapToProductResponse)
                .collect(Collectors.toList());
    }

    public List<ProductResponse> findByCollection (Long collectionId) {
        return productRepository.findByCollection_Id(collectionId).stream()
                .map(this::mapToProductResponse)
                .collect(Collectors.toList());
    }

    public List<ProductResponse> findByProductType (Long productTypeId) {
        return productRepository.findByProductType_Id(productTypeId).stream()
                .map(this::mapToProductResponse)
                .collect(Collectors.toList());
    }




}