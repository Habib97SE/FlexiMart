package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;
import org.fleximart.fleximart.v1.entity.product.ProductMedia;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductVariantResponse {
    private Long id;
    private List<VariantGroupResponse> variantGroups;
    private List<ProductMediaResponse> productMedia;
    private String sku;
    private String barCode;
}
