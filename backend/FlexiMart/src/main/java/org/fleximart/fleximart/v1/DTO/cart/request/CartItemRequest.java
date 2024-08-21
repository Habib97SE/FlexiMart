package org.fleximart.fleximart.v1.DTO.cart.request;

import lombok.*;
import org.fleximart.fleximart.v1.DTO.product.request.ProductVariantRequest;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemRequest {
    private String productName;
    private Long productVariant;
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal totalPrice;
}
