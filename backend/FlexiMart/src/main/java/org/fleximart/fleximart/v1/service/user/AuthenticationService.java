package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.DTO.user.request.SigninRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserService userService;


    public AuthenticationService(UserService userService) {
        this.userService = userService;
    }


    public ResponseEntity<Object> authenticateUser(SigninRequest signinRequest) {
        return userService.authenticate(signinRequest);
    }
}
