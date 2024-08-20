package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.InventoryRequest;
import org.fleximart.fleximart.v1.DTO.product.request.ProductMediaRequest;
import org.fleximart.fleximart.v1.DTO.product.request.ProductVariantRequest;
import org.fleximart.fleximart.v1.DTO.product.request.VariantOptionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.*;
import org.fleximart.fleximart.v1.entity.product.*;
import org.fleximart.fleximart.v1.repository.product.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service class for ProductVariant entity.
 * Contains methods to fetch, save, update, and delete ProductVariant entities.
 * Also contains helper methods to create response DTOs.
 */
@Service
public class ProductVariantService {

    @Autowired
    private ProductVariantRepository productVariantRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private VariantOptionRepository variantOptionRepository;

    @Autowired
    private VariantGroupRepository variantGroupRepository;

    @Autowired
    private InventoryService inventoryService;
    @Autowired
    private InventoryRepository inventoryRepository;
    @Autowired
    private VariantOptionService variantOptionService;

    public ProductVariantService(ProductVariantRepository productVariantRepository,
                                 ProductRepository productRepository,
                                 VariantOptionRepository variantOptionRepository,
                                 VariantGroupRepository variantGroupRepository,
                                 InventoryService inventoryService) {
        this.productVariantRepository = productVariantRepository;
        this.productRepository = productRepository;
        this.variantOptionRepository = variantOptionRepository;
        this.variantGroupRepository = variantGroupRepository;
        this.inventoryService = inventoryService;
    }

    /**
     * Helper method to create a VariantGroupResponse DTO from a VariantGroup entity.
     *
     * @param variantGroup the VariantGroup entity.
     * @return the VariantGroupResponse DTO.
     */
    private VariantGroupResponse createVariantGroupResponse(VariantGroup variantGroup) {

        return VariantGroupResponse.builder()
                .id(variantGroup.getId())
                .name(variantGroup.getName())
                .build();
    }

    private InventoryResponse createInventoryResponse(Long inventoryId) {
        Inventory inventory = inventoryService.findByInventoryId(inventoryId);
        return InventoryResponse.builder()
                .id(inventory.getId())
                .price(inventory.getPrice())
                .inventoryTracking(inventory.getInventoryTracking())
                .costPrice(inventory.getCostPrice())
                .currency(inventory.getCurrency())
                .discountPrice(inventory.getDiscountPrice())
                .maxOrderQuantity(inventory.getMaxOrderQuantity())
                .minOrderQuantity(inventory.getMinOrderQuantity())
                .build();

    }

    private VariantOptionResponse toVariantOptionResponse(VariantOption variantOption) {
        System.err.printf("%s : %s\n", variantOption.getId(), variantOption.getValue());
        return VariantOptionResponse.builder()
                .id(variantOption.getId())
                .value(variantOption.getValue())
                .description(variantOption.getDescription())
                .variantGroup(createVariantGroupResponse(variantOption.getVariantGroup()))
                .build();
    }

    /**
     * Helper method to create a list of ProductMediaResponse DTOs from a list of ProductMedia entities.
     *
     * @param productMedia the list of ProductMedia entities.
     * @return the list of ProductMediaResponse DTOs.
     */
    private List<ProductMediaResponse> createProductMediaList(List<ProductMedia> productMedia) {
        return productMedia.stream()
                .map(pm -> ProductMediaResponse.builder()
                        .id(pm.getId())
                        .mediaUrl(pm.getMediaUrl())
                        .mediaType(pm.getMediaType())
                        .mediaAlt(pm.getAltText())
                        .build())
                .collect(Collectors.toList());
    }

    /**
     * Helper method to create a ProductVariantResponse DTO from a ProductVariant entity.
     *
     * @param productVariant the ProductVariant entity.
     * @return the ProductVariantResponse DTO.
     */
    public ProductVariantResponse createProductVariantResponse(ProductVariant productVariant) {
        // Find VariantGroups based on the VariantOptions of this ProductVariant
        List<VariantOption> variantOptions = productVariant.getVariantOptions();

        return ProductVariantResponse.builder()
                .id(productVariant.getId())
                .sku(productVariant.getSku())
                .barCode(productVariant.getBarCode())
                .variantOptions(
                        variantOptions.stream()
                                .map(this::toVariantOptionResponse)
                                .collect(Collectors.toList())
                )
                .productMedia(createProductMediaList(productVariant.getProductMediaList()))
                .inventory(createInventoryResponse(productVariant.getInventory()))
                .build();
    }

    public List<ProductVariant> findByProductId(Long productId) {
        return productVariantRepository.findByProduct_Id(productId);
    }

    public List<ProductVariantResponse> retrieveAndCreateProductVariantResponse(Long productId) {
        return findByProductId(productId)
                .stream()
                .map(this::createProductVariantResponse)
                .collect(Collectors.toList());
    }

    /**
     * Fetch all ProductVariant entities and create a list of ProductVariantResponse DTOs.
     *
     * @return the list of ProductVariantResponse DTOs.
     */
    public List<ProductVariantResponse> findAll() {
        return productVariantRepository.findAll()
                .stream()
                .map(this::createProductVariantResponse)
                .collect(Collectors.toList());
    }

    public ProductVariantResponse findById(Long id) {
        ProductVariant productVariant = productVariantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ProductVariant not found with id " + id));
        return createProductVariantResponse(productVariant);
    }

    /**
     * Save a new ProductVariant with associated VariantOptions.
     *
     * @param productVariantRequest the DTO containing the product variant and variant options details.
     * @return the saved ProductVariant response DTO.
     */
    public ProductVariantResponse save(ProductVariantRequest productVariantRequest) {
        // save variant options into the database
        List<VariantOption> variantOptions = new ArrayList<>();
        for (VariantOptionRequest variantOptionRequest : productVariantRequest.getVariantOptions()) {
            VariantOption variantOption = VariantOption.builder()
                    .id(variantOptionRequest.getId())
                    .build();
            variantOptions.add(variantOption);
        }

        // save the inventory into the database
        InventoryResponse inventoryResponse = inventoryService.save(productVariantRequest.getInventory());

        // save the product variant into the database
        ProductVariant productVariant = ProductVariant.builder()
                .product(productRepository.findById(productVariantRequest.getProductId())
                        .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productVariantRequest.getProductId())))
                .sku(productVariantRequest.getSku())
                .barCode(productVariantRequest.getBarCode())
                .variantOptions(variantOptions)
                .inventory(inventoryResponse.getId())
                .build();
        productVariant = productVariantRepository.save(productVariant);



        return ProductVariantResponse.builder()
                .id(productVariant.getId())
                .sku(productVariant.getSku())
                .barCode(productVariant.getBarCode())
                .variantOptions(
                        variantOptions.stream()
                                .map(this::toVariantOptionResponse)
                                .collect(Collectors.toList())
                )
                .build();
    }

    /**
     * Update an existing ProductVariant with new details.
     *
     * @param id                    the ID of the ProductVariant to update.
     * @param productVariantRequest the DTO containing the updated product variant and variant options details.
     * @return the updated ProductVariant response DTO.
     */
    public ProductVariantResponse update(Long id, ProductVariantRequest productVariantRequest) {
        ProductVariant productVariant = productVariantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ProductVariant not found with id " + id));

        List<VariantOption> variantOptions = new ArrayList<>();
        for (VariantOptionRequest variantOptionRequest : productVariantRequest.getVariantOptions()) {
            VariantOption variantOption = variantOptionRepository.findById(variantOptionRequest.getId())
                    .orElseThrow(() -> new ResourceNotFoundException("VariantOption not found with id " + variantOptionRequest.getId()));
            variantOptions.add(variantOption);
        }

        productVariant.setVariantOptions(variantOptions);
        productVariant.setSku(productVariantRequest.getSku());
        productVariant.setBarCode(productVariantRequest.getBarCode());
        productVariant = productVariantRepository.save(productVariant);


        return ProductVariantResponse.builder()
                .id(productVariant.getId())
                .sku(productVariant.getSku())
                .barCode(productVariant.getBarCode())
                .variantOptions(
                        variantOptions.stream()
                                .map(this::toVariantOptionResponse)
                                .collect(Collectors.toList())
                )
                .productMedia(createProductMediaList(productVariant.getProductMediaList()))
                .build();
    }


    /**
     * Delete a ProductVariant entity by ID.
     *
     * @param id the ID of the ProductVariant to delete.
     * @return true if the ProductVariant was deleted, false otherwise.
     */
    public Boolean delete(Long id) {
        if (id < 1) {
            return false;
        }

        ProductVariant productVariant = productVariantRepository.findById(id).orElse(null);
        if (productVariant == null) {
            return false;
        }

        productVariantRepository.delete(productVariant);
        return true;
    }

    public Long getInventoryId (Long productVariantId) {
        ProductVariant productVariant = productVariantRepository.findById(productVariantId).orElse(null);
        if (productVariant == null) {
            return null;
        }
        return productVariant.getInventory();
    }
}