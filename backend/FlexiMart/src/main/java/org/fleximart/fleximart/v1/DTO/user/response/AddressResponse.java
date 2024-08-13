package org.fleximart.fleximart.v1.DTO.user.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fleximart.fleximart.v1.entity.user.AddressType;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddressResponse {
    private Long id;
    private String name;
    private String houseNumber;
    private String street;
    private String streetNumber;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String phoneNumber;
    private AddressTypeResponse addressType;
    private UserResponse user;
}
