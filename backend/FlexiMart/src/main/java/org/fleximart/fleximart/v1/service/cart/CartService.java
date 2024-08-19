package org.fleximart.fleximart.v1.service.cart;

import org.fleximart.fleximart.v1.DTO.cart.response.CartItemResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductVariantResponse;
import org.fleximart.fleximart.v1.entity.cart.CartItem;
import org.fleximart.fleximart.v1.repository.cart.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }


}
