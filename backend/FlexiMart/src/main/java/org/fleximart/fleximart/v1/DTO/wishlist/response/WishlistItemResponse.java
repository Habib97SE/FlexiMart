package org.fleximart.fleximart.v1.DTO.wishlist.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WishlistItemResponse {
    private String productName;
    private Long productId;
}
