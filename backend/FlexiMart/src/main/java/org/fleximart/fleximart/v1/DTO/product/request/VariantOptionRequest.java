package org.fleximart.fleximart.v1.DTO.product.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.fleximart.fleximart.v1.entity.product.VariantGroup;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VariantOptionRequest {
    private Long id; // Optional: used if updating or referencing an existing option
    private String value; // e.g., "Red", "Large"
    private String description; // Optional: e.g., "A bright red color", "A large size"
    private Long variantGroupId; // The group this option belongs to (e.g., "Color", "Size")
}
