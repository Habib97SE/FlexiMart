package org.fleximart.fleximart.v1.service.cart;

import org.fleximart.fleximart.v1.DTO.cart.response.CartItemResponse;
import org.fleximart.fleximart.v1.entity.product.Inventory;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.fleximart.fleximart.v1.repository.product.InventoryRepository;
import org.fleximart.fleximart.v1.repository.product.ProductVariantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.fleximart.fleximart.v1.DTO.cart.request.CartItemRequest;
import org.fleximart.fleximart.v1.entity.cart.CartItem;
import org.fleximart.fleximart.v1.repository.cart.CartItemRepository;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * CartItemService class
 */
@Service
public class CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductVariantRepository productVariantRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    public CartItemService(CartItemRepository cartItemRepository,
                           ProductVariantRepository productVariantRepository,
                           InventoryRepository inventoryRepository) {
        this.cartItemRepository = cartItemRepository;
        this.productVariantRepository = productVariantRepository;
        this.inventoryRepository = inventoryRepository;
    }

    /**
     * Convert CartItemRequest to CartItem
     * @param cartItemRequest
     * @return CartItem
     */
    private CartItem toCartItem (CartItemRequest cartItemRequest) {
        return CartItem.builder()
                .productVariant(ProductVariant.builder().id(cartItemRequest.getProductVariant()).build())
                .quantity(cartItemRequest.getQuantity())
                .unitPrice(cartItemRequest.getUnitPrice())
                .totalPrice(cartItemRequest.getTotalPrice())
                .build();
    }

    /**
     * Convert CartItem to CartItemResponse
     * @param cartItem
     * @return CartItemResponse
     */
    private CartItemResponse toCartItemResponse(CartItem cartItem) {
        return CartItemResponse.builder()
                .id(cartItem.getId())
                .productVariant(cartItem.getProductVariant().getId())
                .quantity(cartItem.getQuantity())
                .totalPrice(cartItem.getTotalPrice())
                .build();
    }

    /**
     * Find all cart items by cart id
     * @param cartId
     * @return List of CartItemResponse
     */
    public List<CartItemResponse> findByCartId(Long cartId) {
        return cartItemRepository.findByCart_Id(cartId).stream()
                .map(this::toCartItemResponse)
                .collect(Collectors.toList());
    }

    /**
     * Find cart item by id
     * @param id CartItem id to find
     * @return CartItemResponse
     */
    public CartItemResponse findById(Long id) {
        return toCartItemResponse(Objects.requireNonNull(cartItemRepository.findById(id).orElse(null)));
    }



    /**
     * Save cart item
     * @param cartItemRequest
     * @return CartItemResponse
     */
    public CartItemResponse save(CartItemRequest cartItemRequest) {
        ProductVariant productVariant = productVariantRepository.findById(cartItemRequest.getProductVariant()).orElse(null);
        if (productVariant == null) {
            return null;
        }
        Inventory inventory = inventoryRepository.findById(productVariant.getInventory()).orElse(null);
        if (inventory == null) {
            return null;
        }
        if (cartItemRequest.getQuantity() > inventory.getStockQuantity()) {
            return null;
        }
        if (cartItemRequest.getQuantity() > inventory.getMaxOrderQuantity() || cartItemRequest.getQuantity() < inventory.getMinOrderQuantity()) {
            return null;
        }
        return toCartItemResponse(cartItemRepository.save(toCartItem(cartItemRequest)));
    }

    /**
     * Update cart item
     * @param id
     * @param cartItemRequest
     * @return CartItemResponse
     */
    public CartItemResponse update (Long id, CartItemRequest cartItemRequest) {
        CartItem cartItem = cartItemRepository.findById(id).orElse(null);
        if (cartItem == null) {
            return null;
        }
        ProductVariant productVariant = productVariantRepository.findById(cartItemRequest.getProductVariant()).orElse(null);
        if (productVariant == null) {
            return null;
        }
        Inventory inventory = inventoryRepository.findById(productVariant.getInventory()).orElse(null);
        if (inventory == null) {
            return null;
        }
        if (cartItemRequest.getQuantity() > inventory.getStockQuantity()) {
            return null;
        }
        if (cartItemRequest.getQuantity() > inventory.getMaxOrderQuantity() || cartItemRequest.getQuantity() < inventory.getMinOrderQuantity()) {
            return null;
        }
        cartItem.setProductVariant(ProductVariant.builder().id(cartItemRequest.getProductVariant()).build());
        cartItem.setQuantity(cartItemRequest.getQuantity());
        cartItem.setUnitPrice(cartItemRequest.getUnitPrice());
        cartItem.setTotalPrice(cartItemRequest.getTotalPrice());
        return toCartItemResponse(cartItemRepository.save(cartItem));
    }

    /**
     * Delete cart item
     * @param id
     * @return Boolean
     */
    public Boolean delete (Long id) {
        // Check if cart item exists
        CartItem cartItem = cartItemRepository.findById(id).orElse(null);
        if (cartItem == null) {
            return false;
        }

        // add item back to inventory
        ProductVariant productVariant = productVariantRepository.findById(cartItem.getProductVariant().getId()).orElse(null);
        if (productVariant == null) {
            return false;
        }
        Inventory inventory = inventoryRepository.findById(productVariant.getInventory()).orElse(null);
        if (inventory == null) {
            return false;
        }
        try {
            inventory.setStockQuantity(inventory.getStockQuantity() + cartItem.getQuantity());
            inventoryRepository.save(inventory);
            cartItemRepository.delete(cartItem);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }


}
