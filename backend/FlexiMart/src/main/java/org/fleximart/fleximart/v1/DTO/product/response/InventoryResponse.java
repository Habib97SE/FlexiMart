package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InventoryResponse {
    private Long id;
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
    private Long productId;

}

