package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class BrandRequest {
    private String name;
    private String description;
    private String website;
    private String logo;
}
