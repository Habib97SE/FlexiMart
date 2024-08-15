package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BrandRequest {
    private String name;
    private String description;
}
