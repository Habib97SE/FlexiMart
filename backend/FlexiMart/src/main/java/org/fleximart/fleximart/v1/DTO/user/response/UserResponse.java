package org.fleximart.fleximart.v1.DTO.user.response;

import lombok.*;
import org.fleximart.fleximart.v1.entity.user.Address;

import java.util.List;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
public class UserResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String suffix;
    private String middleName;
    private String email;
    private String phoneNumber;
    private String profilePicture;
    private String dateOfBirth;

}
