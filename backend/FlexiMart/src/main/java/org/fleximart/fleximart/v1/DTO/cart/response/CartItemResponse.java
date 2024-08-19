package org.fleximart.fleximart.v1.DTO.cart.response;


import lombok.*;
import org.fleximart.fleximart.v1.DTO.product.response.ProductVariantResponse;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemResponse {
    private Long id;
    private ProductVariantResponse productVariant;
    private Integer quantity;
    private BigDecimal totalPrice;
}
