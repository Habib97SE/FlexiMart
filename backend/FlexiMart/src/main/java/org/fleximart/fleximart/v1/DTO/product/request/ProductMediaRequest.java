package org.fleximart.fleximart.v1.DTO.product.request;

import lombok.*;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;

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
