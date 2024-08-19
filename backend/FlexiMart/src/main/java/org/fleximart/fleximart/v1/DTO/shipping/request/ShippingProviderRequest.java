package org.fleximart.fleximart.v1.DTO.shipping.request;

import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingProviderRequest {
    private String name;
    private String description;
    private String website;
    private String logo;
    private String emailAddress;
    private String trackingUrl;
    private String phoneNumber;
    private Set<ShippingMethodRequest> shippingMethods = new HashSet<>();
}
