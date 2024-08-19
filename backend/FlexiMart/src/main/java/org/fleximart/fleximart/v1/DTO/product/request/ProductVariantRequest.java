package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;
import org.fleximart.fleximart.v1.entity.product.ProductMedia;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductVariantRequest {
    private Long productId;
    private List<VariantOptionRequest> variantOptions; // List of VariantOption IDs
    private String sku;
    private String barCode;
    private List<ProductMediaRequest> productMedia;
    private String thumbnailImageUrl;
    private InventoryRequest inventory;
}
