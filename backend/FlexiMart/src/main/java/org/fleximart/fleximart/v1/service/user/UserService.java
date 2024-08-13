package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.DTO.user.request.UserRequest;
import org.fleximart.fleximart.v1.DTO.user.request.SigninRequest;
import org.fleximart.fleximart.v1.DTO.user.request.UpdateUserRequest;
import org.fleximart.fleximart.v1.DTO.user.response.UserResponse;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.repository.user.UserRepository;
import org.fleximart.fleximart.v1.utils.Encryption;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.fleximart.fleximart.v1.utils.UserValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    /**
     * Fetch all User
     *
     * @return ResponseEntity
     */
    public ResponseEntity<Object> findAll() {
        Specification<User> specification = (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("isDeleted"), false);


        return ResponseHandler.generateResponse("All User fetched successfully.", 200, createUserResponseObjectList(userRepository.findAll(specification)), false);
    }

    /**
     * Create User Response Object from User entity
     *
     * @param user User entity
     * @return UserResponse object
     */
    private UserResponse createUserResponseObject(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .suffix(user.getSuffix())
                .middleName(user.getMiddleName())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .dateOfBirth(String.valueOf(user.getDateOfBirth()))
                .build();
    }

    /**
     * Create User Response Object List from User entity List
     *
     * @param users List of User entity
     * @return List of UserResponse object
     */
    private List<UserResponse> createUserResponseObjectList(List<User> users) {
        List<UserResponse> userResponseList = new ArrayList<>();
        for (User user : users) {
            userResponseList.add(createUserResponseObject(user));
        }
        return userResponseList;
    }

    /**
     * Fetch User by Id
     *
     * @param id
     * @return ResponseEntity
     */
    public ResponseEntity<Object> findById(Long id) {
        try {
            User user = userRepository.findById(id).orElse(null);
            if (user == null || user.getIsDeleted()) {
                return ResponseHandler.generateResponse("User not found.", 404, null, true);
            }
            // Convert to DTO early to avoid full serialization
            UserResponse userResponse = createUserResponseObject(user);
            return ResponseHandler.generateResponse("User fetched successfully.", 200, userResponse, false);
        } catch (Exception e) {
            System.err.println("Failed to fetch user: " + e.getMessage());
            return ResponseHandler.generateResponse("Failed to fetch user.", 400, null, true);
        }
    }

    /**
     * Create User
     *
     * @param userRequest UserRequest
     * @return ResponseEntity
     */
    public ResponseEntity<Object> create(UserRequest userRequest) {
        if (userRepository.findByEmail(userRequest.getEmail()) != null) {
            return ResponseHandler.generateResponse("Email already exists.", 400, null, true);
        }

        if (!UserValidation.validateUserRequest(userRequest))
        {
            return ResponseHandler.generateResponse("Invalid user request.", 400, null, true);
        }

        try {
            User user = new User();
            user.setFirstName(userRequest.getFirstName());
            user.setLastName(userRequest.getLastName());
            user.setSuffix(userRequest.getSuffix());
            user.setMiddleName(userRequest.getMiddleName());
            user.setEmail(userRequest.getEmail());
            user.setPhoneNumber(userRequest.getPhoneNumber());
            user.setHashedPassword(Encryption.encrypt(userRequest.getPassword()));
            user.setRole("USER");
            user.setIsDeleted(false);
            user = userRepository.save(user);
            return ResponseHandler.generateResponse("User created successfully.", 200, createUserResponseObject(user), false);
        } catch (Exception e) {
            System.err.println("Failed to create user: " + e.getMessage());
            return ResponseHandler.generateResponse("Failed to create user.", 400, null, true);
        }
    }

    /**
     * Update User
     *
     * @param id
     * @param updateUserRequest
     * @return ResponseEntity
     */
    public ResponseEntity<Object> update(Long id, UpdateUserRequest updateUserRequest) {
        if (userRepository.findById(id).isEmpty()) {
            return ResponseHandler.generateResponse("User not found.", 404, null, true);
        }

        try {
            User user = userRepository.findById(id).orElse(null);
            assert user != null;
            user.setFirstName(updateUserRequest.getFirstName());
            user.setLastName(updateUserRequest.getLastName());
            user.setSuffix(updateUserRequest.getSuffix());
            user.setMiddleName(updateUserRequest.getMiddleName());
            user.setEmail(updateUserRequest.getEmail());
            user.setPhoneNumber(updateUserRequest.getPhoneNumber());
            user.setDateOfBirth(updateUserRequest.getDateOfBirth());
            user.setIsDeleted(false);

            user = userRepository.save(user);
            return ResponseHandler.generateResponse("User updated successfully.", 200, createUserResponseObject(user), false);
        } catch (Exception e) {
            System.err.println("Failed to update user: " + e.getMessage());
            return ResponseHandler.generateResponse("Failed to update user.", 400, null, true);
        }

    }

    /**
     * Delete User
     *
     * @param id
     * @return ResponseEntity
     */
    public ResponseEntity<Object> delete(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return ResponseHandler.generateResponse("User not found.", 404, null, true);
        }
        try {
            user.setIsDeleted(true);
            userRepository.save(user);
            return ResponseHandler.generateResponse("User deleted successfully.", 200, null, false);
        } catch (Exception e) {
            System.err.println("Failed to delete user: " + e.getMessage());
            return ResponseHandler.generateResponse("Failed to delete user.", 400, null, true);
        }
    }

    public ResponseEntity<Object> authenticate(SigninRequest signinRequest) {
        User user = userRepository.findByEmail(signinRequest.getEmail());
        if (user == null) {
            return ResponseHandler.generateResponse("Invalid email or password.", 404, null, true);
        }

        if (!Encryption.match(signinRequest.getPassword(), user.getHashedPassword())) {
            return ResponseHandler.generateResponse("Invalid email or password.", 404, null, true);
        }

        return ResponseHandler.generateResponse("User authenticated successfully.", 200, createUserResponseObject(user), false);

    }
}
