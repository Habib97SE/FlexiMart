package org.fleximart.fleximart.v1.DTO.cart.response;


import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemResponse {
    private Long id;
    private Long product;
    private Integer quantity;
    private BigDecimal totalPrice;
}
