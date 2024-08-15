package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.InventoryRequest;
import org.fleximart.fleximart.v1.DTO.product.response.InventoryResponse;
import org.fleximart.fleximart.v1.entity.product.Inventory;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.fleximart.fleximart.v1.repository.product.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class InventoryService {


    private final InventoryRepository inventoryRepository;

    @Autowired
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    private InventoryResponse createInventoryResponse(Inventory inventory) {
        return InventoryResponse.builder()
                .id(inventory.getId())
                .price(inventory.getPrice())
                .discountPrice(inventory.getDiscountPrice())
                .costPrice(inventory.getCostPrice())
                .currency(inventory.getCurrency())
                .stockQuantity(inventory.getStockQuantity())
                .minOrderQuantity(inventory.getMinOrderQuantity())
                .maxOrderQuantity(inventory.getMaxOrderQuantity())
                .stockStatus(inventory.getStockStatus())
                .inventoryTracking(inventory.getInventoryTracking())
                .reOrderLevel(inventory.getReOrderLevel())
                .productVariantId(inventory.getVariant().getId())

                .build();
    }

    private List<InventoryResponse> createInventoryResponseList(List<Inventory> inventories) {
        return inventories.stream().map(this::createInventoryResponse).collect(Collectors.toList());
    }

    public List<InventoryResponse> findAll() {
        return createInventoryResponseList(inventoryRepository.findAll());
    }

    public InventoryResponse findById(Long id) {
        return createInventoryResponse(Objects.requireNonNull(inventoryRepository.findById(id).orElse(null)));
    }

    public InventoryResponse findByProductId(Long productVariantId) {
        return createInventoryResponse(inventoryRepository.findByVariant_Id(productVariantId));
    }

    public InventoryResponse save(InventoryRequest inventoryRequest) {



        Inventory inventory = Inventory.builder()
                .price(inventoryRequest.getPrice())
                .discountPrice(inventoryRequest.getDiscountPrice())
                .costPrice(inventoryRequest.getCostPrice())
                .currency(inventoryRequest.getCurrency())
                .stockQuantity(inventoryRequest.getStockQuantity())
                .minOrderQuantity(inventoryRequest.getMinOrderQuantity())
                .maxOrderQuantity(inventoryRequest.getMaxOrderQuantity())
                .stockStatus(inventoryRequest.getStockStatus())
                .inventoryTracking(inventoryRequest.getInventoryTracking())
                .reOrderLevel(inventoryRequest.getReOrderLevel())
                .variant(ProductVariant.builder().id(inventoryRequest.getProductVariantId()).build())
                .build();
        return createInventoryResponse(inventoryRepository.save(inventory));
    }

    public InventoryResponse update(Long id, InventoryRequest inventoryRequest) {
        Inventory inventory = inventoryRepository.findById(id).orElse(null);
        if (inventory == null) {
            return null;
        }

        inventory.setPrice(inventoryRequest.getPrice());
        inventory.setDiscountPrice(inventoryRequest.getDiscountPrice());
        inventory.setCostPrice(inventoryRequest.getCostPrice());
        inventory.setStockQuantity(inventoryRequest.getStockQuantity());
        inventory.setMinOrderQuantity(inventoryRequest.getMinOrderQuantity());
        inventory.setMaxOrderQuantity(inventoryRequest.getMaxOrderQuantity());
        inventory.setStockStatus(inventoryRequest.getStockStatus());
        inventory.setInventoryTracking(inventoryRequest.getInventoryTracking());
        inventory.setReOrderLevel(inventoryRequest.getReOrderLevel());
        return createInventoryResponse(inventoryRepository.save(inventory));
    }

    public InventoryResponse delete(Long id) {
        Inventory inventory = inventoryRepository.findById(id).orElse(null);
        if (inventory == null) {
            return null;
        }
        inventoryRepository.delete(inventory);
        return createInventoryResponse(inventory);
    }


}

