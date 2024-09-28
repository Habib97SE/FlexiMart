package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductRequest {
    private String name;
    private String slug;
    private Long brandId;
    private Long collectionId;
    private String description;
    private String modelNumber;
    private Long productTypeId;
}
