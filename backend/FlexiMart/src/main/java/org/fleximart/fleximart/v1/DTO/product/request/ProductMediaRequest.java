package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductMediaRequest {
    private String mediaUrl;
    private String mediaType;
    private String mediaAlt;
}
