package org.fleximart.fleximart.v1.controller.user;

import org.fleximart.fleximart.v1.DTO.user.request.UserRequest;
import org.fleximart.fleximart.v1.DTO.user.request.UpdateUserRequest;
import org.fleximart.fleximart.v1.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping({"/", ""})
    public ResponseEntity<Object> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        System.err.println("Fetching user by id: " + id);
        return userService.findById(id);
    }

    @PostMapping({"/", ""})
    public ResponseEntity<Object> createUser(@RequestBody UserRequest userRequest) {
        System.err.println("Creating new user: " + userRequest.getEmail());
        return userService.create(userRequest);
    }

    @PutMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Object> updateUser(@PathVariable Long id, @RequestBody UpdateUserRequest peopleRequest) {
        System.err.println("Updating user: " + id);
        return userService.update(id, peopleRequest);
    }

    @DeleteMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        System.err.println("Deleting user: " + id);
        return userService.delete(id);
    }


}
