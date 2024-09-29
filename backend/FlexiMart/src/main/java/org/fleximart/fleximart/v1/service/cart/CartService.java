package org.fleximart.fleximart.v1.service.cart;

import org.fleximart.fleximart.v1.DTO.cart.request.CartItemRequest;
import org.fleximart.fleximart.v1.DTO.cart.request.CartRequest;
import org.fleximart.fleximart.v1.DTO.cart.response.CartItemResponse;
import org.fleximart.fleximart.v1.DTO.cart.response.CartResponse;
import org.fleximart.fleximart.v1.entity.cart.Cart;
import org.fleximart.fleximart.v1.entity.cart.CartItem;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.repository.cart.CartRepository;
import org.fleximart.fleximart.v1.repository.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CartService {

    private CartRepository cartRepository;

    private CartItemService cartItemService;

    private ProductRepository productRepository;

    @Autowired
    public CartService(CartRepository cartRepository, CartItemService cartItemService, ProductRepository productRepository) {
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productRepository = productRepository;
    }

    private CartItemResponse toCartItemResponse(CartItem cartItem) {

        Product product = productRepository.findById(cartItem.getProduct().getId()).orElse(null);

        return CartItemResponse.builder()
                .id(cartItem.getId())
                .product(product.getId())
                .quantity(cartItem.getQuantity())
                .totalPrice(cartItem.getTotalPrice())
                .build();
    }

    private CartItem toCartItem (CartItemRequest cartItemRequest) {
        Product product = productRepository.findById(cartItemRequest.getProductId()).orElse(null);
        return CartItem.builder()
                .product(product)
                .quantity(cartItemRequest.getQuantity())
                .unitPrice(cartItemRequest.getUnitPrice())
                .totalPrice(cartItemRequest.getUnitPrice().multiply(BigDecimal.valueOf(cartItemRequest.getQuantity())))
                .build();
    }

    private CartResponse toCartResponse(Cart cart) {
        return CartResponse.builder()
                .id(cart.getId())
                .cartItems(cart.getCartItems().stream().map(this::toCartItemResponse).collect(Collectors.toList()))
                .userId(cart.getUser().getId())
                .build();
    }

    private Cart toCart (CartRequest cartRequest) {
        return Cart.builder()
                .user(User.builder().id(cartRequest.getUserId()).build())
                .cartItems(cartRequest.getCartItems().stream().map(this::toCartItem).collect(Collectors.toList()))
                .build();
    }

    public List<CartResponse> findAll () {
        return cartRepository.findAll().stream().map(this::toCartResponse).collect(Collectors.toList());
    }

    public CartResponse findById (Long id) {
        return toCartResponse(Objects.requireNonNull(cartRepository.findById(id).orElse(null)));
    }

    public CartResponse findByUserID (Long userId) {
        return toCartResponse(Objects.requireNonNull(cartRepository.findByUser_Id(userId)));
    }

    public CartResponse save (CartRequest cartRequest) {
        return toCartResponse(cartRepository.save(toCart(cartRequest)));
    }

    public CartResponse update (CartRequest cartRequest) {
        return toCartResponse(cartRepository.save(toCart(cartRequest)));
    }

    public Boolean delete (Long id) {
        Cart cart = cartRepository.findById(id).orElse(null);
        if (cart == null) {
            return false;
        }
        cartRepository.delete(cart);
        return true;
    }



}
