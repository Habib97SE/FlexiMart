package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductVariantRequest {
    private Long productId;
    private List<VariantOptionRequest> variantOptionRequests; // List of VariantOption IDs
    private String sku;
    private String barCode;
    private String imageUrl;
    private String thumbnailImageUrl;
}
