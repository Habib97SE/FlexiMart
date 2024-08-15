package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductMediaResponse {
    private Long id;
    private String mediaUrl;
    private String mediaType;
    private String mediaAlt;
}
