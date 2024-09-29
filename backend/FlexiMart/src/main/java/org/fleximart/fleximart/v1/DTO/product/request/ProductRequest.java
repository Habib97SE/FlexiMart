package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductRequest {
    private String name;
    private String description;
    private InventoryRequest inventory;
    private Long collectionId;
    private Long brandId;
    private String modelNumber;
    private Long productTypeId;
    private String slug;
    private List<ProductMediaRequest> productMediaRequestList;
}
