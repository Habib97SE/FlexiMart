package org.fleximart.fleximart.v1.DTO.user.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddressTypeResponse {
    private Long id;
    private String name;
    private String description;
    private String icon;
}
