package org.fleximart.fleximart.v1.service.product;

import org.apache.coyote.Response;
import org.fleximart.fleximart.v1.DTO.product.request.NewProductRequest;
import org.fleximart.fleximart.v1.DTO.product.request.ProductMediaRequest;
import org.fleximart.fleximart.v1.DTO.product.request.UpdateProductRequest;
import org.fleximart.fleximart.v1.DTO.product.response.*;
import org.fleximart.fleximart.v1.entity.product.*;
import org.fleximart.fleximart.v1.repository.product.*;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private ProductVariantRepository productVariantRepository;


    @Autowired
    private CollectionRepository collectionRepository;

    @Autowired
    private VariantGroupRepository variantGroupRepository;

    public ProductService(ProductRepository productRepository,
                          BrandRepository brandRepository,
                          CollectionRepository collectionRepository,
                          ProductVariantRepository productVariantRepository,
                          VariantGroupRepository variantGroupRepository) {
        this.productRepository = productRepository;
        this.brandRepository = brandRepository;
        this.collectionRepository = collectionRepository;
        this.productVariantRepository = productVariantRepository;
        this.variantGroupRepository = variantGroupRepository;
    }



    private VariantOptionResponse createVariantOptionResponse(VariantOption variantOption) {
        return VariantOptionResponse.builder()
                .id(variantOption.getId())
                .value(variantOption.getValue())
                .description(variantOption.getDescription())
                .build();
    }

    private VariantGroupResponse createVariantGroupResponse(VariantGroup variantGroup) {
        List<VariantOptionResponse> variantOptionResponses = variantGroup.getVariantOptions().stream()
                .map(vo -> VariantOptionResponse.builder()
                        .id(vo.getId())
                        .value(vo.getValue())
                        .build())
                .collect(Collectors.toList());

        return VariantGroupResponse.builder()
                .id(variantGroup.getId())
                .name(variantGroup.getName())
                .variantOptions(variantOptionResponses)
                .build();
    }

    private ProductVariantResponse createProductVariantResponse(ProductVariant productVariant) {
        // Find VariantGroups based on the VariantOptions of this ProductVariant
        List<VariantOption> variantOptions = productVariant.getVariantOptions();
        List<VariantGroup> variantGroups = variantGroupRepository.findByVariantOptions(variantOptions);

        List<VariantGroupResponse> variantGroupResponses = variantGroups.stream()
                .map(this::createVariantGroupResponse)
                .collect(Collectors.toList());

        return ProductVariantResponse.builder()
                .id(productVariant.getId())
                .sku(productVariant.getSku())
                .barCode(productVariant.getBarCode())
                .variantGroups(variantGroupResponses)
                .productMedia(productVariant.getProductMediaList()
                        .stream()
                        .map(productMedia -> ProductMediaResponse.builder()
                                .id(productMedia.getId())
                                .mediaUrl(productMedia.getMediaUrl())
                                .mediaType(productMedia.getMediaType())
                                .mediaAlt(productMedia.getAltText())
                                .build())
                        .collect(Collectors.toList()))
                .build();
    }

    public ProductResponse createProductResponse(Product product) {
        // Retrieve all variants for this product
        List<ProductVariant> productVariants = productVariantRepository.findByProduct(product);

        // Convert the product variants to DTOs
        List<ProductVariantResponse> productVariantResponses = productVariants.stream()
                .map(this::createProductVariantResponse)
                .collect(Collectors.toList());

        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .brand(BrandResponse.builder()
                        .id(product.getBrand().getId())
                        .name(product.getBrand().getName())
                        .build())
                .collection(CollectionResponse.builder()
                        .id(product.getCollection().getId())
                        .name(product.getCollection().getName())
                        .description(product.getCollection().getDescription())
                        .build())
                .modelNumber(product.getModelNumber())
                .productType(ProductTypeResponse.builder()
                        .id(product.getProductType().getId())
                        .name(product.getProductType().getName())
                        .description(product.getProductType().getDescription())
                        .build())
                .productVariants(productVariantResponses) // Add the list of product variants here
                .build();
    }
    private List<ProductResponse> createProductResponseList(List<Product> products) {
        List<ProductResponse> productResponses = new ArrayList<>();
        for (Product product : products) {
            productResponses.add(createProductResponse(product));
        }
        return productResponses;
    }

    private Brand findBrandOrThrow(Long brandId) {
        return brandRepository.findById(brandId)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found"));
    }

    private Collection findCollectionOrThrow(Long collectionId) {
        return collectionRepository.findById(collectionId)
                .orElseThrow(() -> new ResourceNotFoundException("Collection not found"));
    }


    private List<ProductVariant> createProductVariantList(List<Long> productVariantIds) {
        List<ProductVariant> variants = new ArrayList<>();
        for (Long productVariantId : productVariantIds) {
            ProductVariant productVariant = ProductVariant.builder()
                    .id(productVariantId)
                    .build();
            variants.add(productVariant);
        }
        return variants;
    }

    public ResponseEntity<Object> findAll() {
        List<ProductResponse> products = productRepository.findAll().stream()
                .map(this::createProductResponse).toList();
        return ResponseHandler.generateResponse(
                "Products retrieved successfully",
                200,
                products,
                false
        );
    }

    public ProductResponse findById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        return createProductResponse(product);
    }

    public ResponseEntity<Object> save(NewProductRequest newProductRequest) {

        Brand brand = findBrandOrThrow(newProductRequest.getBrandId());
        Collection collection = findCollectionOrThrow(newProductRequest.getCollectionId());

        Product product = Product.builder()
                .name(newProductRequest.getName())
                .description(newProductRequest.getDescription())
                .collection(collection)
                .brand(brand)
                .modelNumber(newProductRequest.getModelNumber())
                .productType(ProductType.builder().id(newProductRequest.getProductTypeId()).build())
                .build();

        try {
            product = productRepository.save(product);
            return ResponseHandler.generateResponse(
                    "Product saved successfully", 201, createProductResponse(product), false);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(
                    "Error saving product", 500, null, true);
        }
    }


    public ResponseEntity<Object> update(Long id, UpdateProductRequest updateProductRequest) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));


        Brand brand = findBrandOrThrow(updateProductRequest.getBrandId());
        Collection collection = findCollectionOrThrow(updateProductRequest.getCollectionId());


        product.setName(updateProductRequest.getName());
        product.setDescription(updateProductRequest.getDescription());
        product.setBrand(brand);
        product.setModelNumber(updateProductRequest.getModelNumber());
        product.setProductType(ProductType.builder().id(updateProductRequest.getProductTypeId()).build());
        product.setCollection(collection);

        try {
            product = productRepository.save(product);
            return ResponseHandler.generateResponse(
                    "Product updated successfully", 200, createProductResponse(product), false);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(
                    "Error updating product", 500, null, true);
        }
    }


    public ResponseEntity<Object> delete(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        try {
            productRepository.delete(product);
            return ResponseHandler.generateResponse(
                    "Product deleted successfully", 200, null, false);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(
                    "Error deleting product", 500, null, true);
        }
    }


}
