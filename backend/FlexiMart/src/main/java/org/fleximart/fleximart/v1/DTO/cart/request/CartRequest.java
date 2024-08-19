package org.fleximart.fleximart.v1.DTO.cart.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartRequest {
    private Long userId;
    private List<CartItemRequest> cartItems;
}
