package org.fleximart.fleximart.v1.DTO.shipping.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingMethodRequest {
    private String methodName;
    private String description;
    private Long providerId;
}
