package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.DTO.blog.response.MediaResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.DTO.review.response.ReviewMediaResponse;
import org.fleximart.fleximart.v1.DTO.review.response.ReviewResponse;
import org.fleximart.fleximart.v1.DTO.user.request.UserRequest;
import org.fleximart.fleximart.v1.DTO.user.request.SigninRequest;
import org.fleximart.fleximart.v1.DTO.user.request.UpdateUserRequest;
import org.fleximart.fleximart.v1.DTO.user.response.AddressResponse;
import org.fleximart.fleximart.v1.DTO.user.response.AddressTypeResponse;
import org.fleximart.fleximart.v1.DTO.user.response.UserResponse;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistItemResponse;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistResponse;
import org.fleximart.fleximart.v1.entity.review.Review;
import org.fleximart.fleximart.v1.entity.review.ReviewMedia;
import org.fleximart.fleximart.v1.entity.user.Address;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.entity.wishlist.Wishlist;
import org.fleximart.fleximart.v1.entity.wishlist.WishlistItem;
import org.fleximart.fleximart.v1.repository.review.ReviewRepository;
import org.fleximart.fleximart.v1.repository.user.AddressRepository;
import org.fleximart.fleximart.v1.repository.user.UserRepository;
import org.fleximart.fleximart.v1.repository.wishlist.WishlistRepository;
import org.fleximart.fleximart.v1.utils.Encryption;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.fleximart.fleximart.v1.utils.UserValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired ReviewRepository reviewRepository;

    public UserService(UserRepository userRepository,
                       AddressRepository addressRepository,
                       WishlistRepository wishlistRepository,
                       ReviewRepository reviewRepository) {
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
        this.wishlistRepository = wishlistRepository;
        this.reviewRepository = reviewRepository;
    }

    private ReviewMediaResponse mapToMediaResponse(ReviewMedia reviewMedia) {
        return ReviewMediaResponse.builder()
                .id(reviewMedia.getId())
                .mediaUrl(reviewMedia.getMediaUrl())
                .mediaType(reviewMedia.getMediaType())
                .build();
    }

    private ReviewResponse mapToReviewResponse(Review review) {
        return ReviewResponse.builder()
                .id(review.getId())
                .rating(review.getRating())
                .comment(review.getComment())
                .userId(review.getUser().getId())
                .productId(review.getProduct().getId())
                .reviewMedia(
                        review.getReviewMedia().stream()
                                .map(this::mapToMediaResponse)
                                .collect(Collectors.toSet())
                )
                .isApproved(review.getIsApproved())
                .isDeleted(review.getIsDeleted())
                .isPublished(review.getIsPublished())
                .build();
    }

    private List<ReviewResponse> createReviewResponseList () {
        List<ReviewResponse> reviewResponseList = new ArrayList<>();
        for (Review review : reviewRepository.findAll()) {
            reviewResponseList.add(mapToReviewResponse(review));
        }
        return reviewResponseList;
    }

    private Set<WishlistItemResponse> mapToWishlistItemResponseList(Set<WishlistItem> wishlistItems) {
        return wishlistItems.stream().map(wishlistItem -> WishlistItemResponse.builder()
                .productId(wishlistItem.getProduct().getId())
                .productName(wishlistItem.getProduct().getName())
                .build())
                .collect(Collectors.toSet());
    }

    private WishlistResponse mapToWishlistResponse(Wishlist wishlist) {
        return WishlistResponse.builder()
                .id(wishlist.getId())
                .items(mapToWishlistItemResponseList(wishlist.getItems()))
                .build();
    }

    private AddressResponse mapToAddressResponse(Address address) {
        return AddressResponse.builder()
                .id(address.getId())
                .street(address.getStreet())
                .streetNumber(address.getStreetNumber())
                .city(address.getCity())
                .state(address.getState())
                .postalCode(address.getPostalCode())
                .name(address.getName())
                .country(address.getCountry())
                .addressType(
                        AddressTypeResponse.builder()
                                .id(address.getAddressType().getId())
                                .icon(address.getAddressType().getIcon())
                                .name(address.getAddressType().getName())
                                .description(address.getAddressType().getDescription())
                                .build()
                )
                .houseNumber(address.getHouseNumber())
                .build();
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
        List<Address> addresses = addressRepository.findByUserId(user.getId());
        List<AddressResponse> addressResponseList = addresses.stream().map(this::mapToAddressResponse).toList();
        return UserResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .suffix(user.getSuffix())
                .middleName(user.getMiddleName())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .dateOfBirth(String.valueOf(user.getDateOfBirth()))
                .addresses(addressResponseList)
                .wishlist(mapToWishlistResponse(Objects.requireNonNull(user.getWishlists().stream().findFirst().orElse(null))))
                .reviews(createReviewResponseList())
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

        if (!UserValidation.validateUserRequest(userRequest)) {
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
