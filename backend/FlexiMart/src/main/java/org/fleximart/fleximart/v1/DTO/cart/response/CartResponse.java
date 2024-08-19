package org.fleximart.fleximart.v1.DTO.cart.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartResponse {
    private Long id;
    private Long userId;
    private List<CartItemResponse> cartItems;
}
