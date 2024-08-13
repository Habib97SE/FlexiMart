package org.fleximart.fleximart.v1.DTO.user.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddressRequest {
    private String name;
    private String houseNumber;
    private String street;
    private String streetNumber;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String phoneNumber;
    private Long addressTypeId;
    private Long userId;
}
