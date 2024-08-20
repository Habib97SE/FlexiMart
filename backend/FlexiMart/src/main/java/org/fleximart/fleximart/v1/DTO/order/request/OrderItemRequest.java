package org.fleximart.fleximart.v1.DTO.order.request;

import lombok.*;
import org.fleximart.fleximart.v1.DTO.product.request.ProductVariantRequest;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItemRequest {
    private String productName;
    private Long productVariant;
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal totalPrice;
    private String status;
}
