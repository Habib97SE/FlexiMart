package org.fleximart.fleximart.v1.DTO.wishlist.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WishlistItemRequest {
    private Long wishlistId;
    private Long productId;
}
