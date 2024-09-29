package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;
import org.fleximart.fleximart.v1.entity.product.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductResponse {
    private Long id;
    private String name;
    private String description;
    private String slug;
    private BrandResponse brand;
    private CollectionResponse collection;
    private String modelNumber;
    private ProductTypeResponse productType;
    private InventoryResponse inventory;
    private List<ProductMediaResponse> productMedia;


}