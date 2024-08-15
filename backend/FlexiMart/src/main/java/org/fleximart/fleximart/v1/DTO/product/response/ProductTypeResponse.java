package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductTypeResponse {
    private Long id;
    private String name;
    private String description;
}
