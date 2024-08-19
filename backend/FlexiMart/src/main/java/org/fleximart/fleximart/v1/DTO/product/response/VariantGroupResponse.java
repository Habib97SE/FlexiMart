package org.fleximart.fleximart.v1.DTO.product.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VariantGroupResponse {
    private Long id;
    private String name;
    private String description;
}
