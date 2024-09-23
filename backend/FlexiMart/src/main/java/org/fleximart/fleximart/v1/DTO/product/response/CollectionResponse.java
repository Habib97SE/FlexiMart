package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CollectionResponse {
    private Long id;
    private String name;
    private String description;
    private String slug;
    private String collectionImage;
    private String createdAt;
    private String updatedAt;
}
