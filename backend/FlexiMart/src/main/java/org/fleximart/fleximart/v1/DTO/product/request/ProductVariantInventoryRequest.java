package org.fleximart.fleximart.v1.DTO.product.request;

import java.math.BigDecimal;

public class ProductVariantInventoryRequest {
    private BigDecimal costPrice;
    private BigDecimal discountPrice;
    private BigDecimal price;
    private String currency;
    private Integer stockQuantity;
    private Integer minOrderQuantity;
    private Integer maxOrderQuantity;
    private String stockStatus;
    private Boolean inventoryTracking;
    private Integer reOrderLevel;

}
