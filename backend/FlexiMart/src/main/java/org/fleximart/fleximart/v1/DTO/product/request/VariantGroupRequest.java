package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VariantGroupRequest {
    private String name;
    private String description;
}
