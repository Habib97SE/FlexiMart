package org.fleximart.fleximart.v1.DTO.user.response;

import lombok.*;
import org.fleximart.fleximart.v1.DTO.review.response.ReviewResponse;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistResponse;
import org.fleximart.fleximart.v1.entity.user.Address;

import java.util.List;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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
    private List<AddressResponse> addresses;
    private WishlistResponse wishlist;
    private List<ReviewResponse> reviews;
}
