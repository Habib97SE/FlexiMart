package org.fleximart.fleximart.v1.DTO.shipping.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingMethodResponse {
    private Long id;
    private String methodName;
    private String description;
    private String providerName;
}
