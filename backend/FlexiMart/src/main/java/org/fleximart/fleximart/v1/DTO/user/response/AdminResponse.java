package org.fleximart.fleximart.v1.DTO.user.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String suffix;
    private String middleName;
    private String email;
    private String phoneNumber;
    private String profilePicture;
    private String role;
    private Integer accessLevel;
    private Boolean isSuperAdmin;

}
