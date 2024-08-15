package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InventoryRequest {
    private BigDecimal price;
    private BigDecimal discountPrice;
    private BigDecimal costPrice;
    private String currency;
    private Integer stockQuantity;
    private Integer minOrderQuantity;
    private Integer maxOrderQuantity;
    private String stockStatus;
    private Boolean inventoryTracking;
    private Integer reOrderLevel;
    private Long productVariantId;
}
