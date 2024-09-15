package org.fleximart.fleximart.v1.service.product;


import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;
import org.fleximart.fleximart.v1.DTO.product.response.*;
import org.fleximart.fleximart.v1.entity.product.*;
import org.fleximart.fleximart.v1.repository.product.*;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private CollectionRepository collectionRepository;

    @Autowired
    private ProductVariantService productVariantService;

    @Autowired
    private VariantGroupRepository variantGroupRepository;

    @Autowired
    private InventoryService inventoryService;

    public ProductService(ProductRepository productRepository,
                          BrandRepository brandRepository,
                          CollectionRepository collectionRepository,
                          ProductVariantService productVariantService,
                          VariantGroupRepository variantGroupRepository,
                          InventoryService inventoryService) {
        this.productRepository = productRepository;
        this.brandRepository = brandRepository;
        this.productVariantService = productVariantService;
        this.collectionRepository = collectionRepository;
        this.variantGroupRepository = variantGroupRepository;
        this.inventoryService = inventoryService;
    }

    private VariantGroupResponse createVariantGroupResponse(VariantGroup variantGroup) {
        return VariantGroupResponse.builder()
                .id(variantGroup.getId())
                .name(variantGroup.getName())
                .description(variantGroup.getDescription())
                .build();
    }




    public ProductResponse createProductResponse(Product product) {


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
                .productVariants(productVariantService.retrieveAndCreateProductVariantResponse(product.getId())) // Add the list of product variants here
                .build();
    }

    private List<ProductResponse> createProductResponseList(List<Product> products) {
        return products.stream()
                .map(this::createProductResponse)
                .collect(Collectors.toList());
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
        return productVariantIds.stream()
                .map(id -> ProductVariant.builder().id(id).build())
                .collect(Collectors.toList());
    }

    public ResponseEntity<Object> findAll() {
        List<ProductResponse> products = createProductResponseList(productRepository.findAll());
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

    public ProductResponse save(ProductRequest productRequest) {
        Brand brand = findBrandOrThrow(productRequest.getBrandId());
        Collection collection = findCollectionOrThrow(productRequest.getCollectionId());

        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .collection(collection)
                .brand(brand)
                .modelNumber(productRequest.getModelNumber())
                .productType(ProductType.builder().id(productRequest.getProductTypeId()).build())
                .build();

        try {
            product = productRepository.save(product);
            return createProductResponse(product);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
    }

    public ProductResponse update(Long id, ProductRequest productRequest) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        Brand brand = findBrandOrThrow(productRequest.getBrandId());
        Collection collection = findCollectionOrThrow(productRequest.getCollectionId());

        product.setName(productRequest.getName());
        product.setDescription(productRequest.getDescription());
        product.setBrand(brand);
        product.setModelNumber(productRequest.getModelNumber());
        product.setProductType(ProductType.builder().id(productRequest.getProductTypeId()).build());
        product.setCollection(collection);

        try {
            product = productRepository.save(product);
            return createProductResponse(product);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
    }

    public Boolean delete(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        try {
            productRepository.delete(product);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

    public List<ProductResponse> findByCollectionId(Long collectionId) {
        Collection collection = collectionRepository.findById(collectionId)
                .orElseThrow(() -> new ResourceNotFoundException("Collection not found"));
        return createProductResponseList(productRepository.findByCollection_Id(collectionId));
    }

    public List<ProductResponse> findByBrandId(Long brandId) {
        Brand brand = brandRepository.findById(brandId)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found"));
        return createProductResponseList(productRepository.findByBrand_Id(brandId));
    }

    public List<ProductResponse> findByProductTypeId(Long productTypeId) {
        return createProductResponseList(productRepository.findByProductType_Id(productTypeId));
    }
}

