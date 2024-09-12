package org.fleximart.fleximart.v1.DTO.wishlist.response;

import lombok.*;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WishlistResponse {
    private Long id;
    private Long userId;
    private List<WishlistItemResponse> items;
}
