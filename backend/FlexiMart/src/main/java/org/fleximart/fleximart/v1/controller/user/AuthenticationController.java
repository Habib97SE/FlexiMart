package org.fleximart.fleximart.v1.controller.user;

import org.fleximart.fleximart.v1.DTO.user.request.SigninRequest;
import org.fleximart.fleximart.v1.service.user.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Authentication Controller
 * Handles all authentication requests for the application (Admin and User)
 */
@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }



    /**
     * Authenticate User
     *
     * @param signinRequest
     * @return ResponseEntity : contains the response message and status, if the authentication is successful
     * the response will also contain the user details, otherwise it will contain an error message, and the error field is false.
     */
    @PostMapping("/user")
    public ResponseEntity<Object> authenticateUser(@RequestBody SigninRequest signinRequest) {

        return authenticationService.authenticateUser(signinRequest);
    }

}
