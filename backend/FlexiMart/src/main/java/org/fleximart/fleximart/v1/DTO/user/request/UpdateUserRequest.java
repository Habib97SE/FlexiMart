package org.fleximart.fleximart.v1.DTO.user.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateUserRequest {
    private String firstName;
    private String lastName;
    private String suffix;
    private String middleName;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfBirth;
}
