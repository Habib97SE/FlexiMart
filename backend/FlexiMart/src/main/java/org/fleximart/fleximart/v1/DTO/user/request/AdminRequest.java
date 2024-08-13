package org.fleximart.fleximart.v1.DTO.user.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminRequest {
    private String firstName;
    private String lastName;
    private String suffix;
    private String middleName;
    private String email;
    private String phoneNumber;
    private String hashedPassword;
    private String profilePicture;
    private String role;
    private Integer accessLevel;
    private Boolean isSuperAdmin;



}
