package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VariantOptionResponse {
    private Long id;
    private String value; // e.g., "Red", "Large"
    private String description; // Optional: e.g., "A bright red color", "A large size"
    private VariantGroupResponse variantGroup;
}
