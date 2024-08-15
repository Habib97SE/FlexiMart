package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NewProductRequest {
    private String name;
    private Long brandId;
    private Long collectionId;
    private String description;
    private String modelNumber;
    private Long productTypeId;
}
