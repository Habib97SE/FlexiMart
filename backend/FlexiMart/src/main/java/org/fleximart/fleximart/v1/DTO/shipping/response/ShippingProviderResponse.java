package org.fleximart.fleximart.v1.DTO.shipping.response;

import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingProviderResponse {
    private Long id;
    private String name;
    private String description;
    private String website;
    private String logo;
    private String emailAddress;
    private String trackingUrl;
    private String phoneNumber;
    private Set<ShippingMethodResponse> shippingMethods;
}
