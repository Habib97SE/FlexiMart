package org.fleximart.fleximart.v1.DTO.user.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SigninRequest {
    private String email;
    private String password;
}
