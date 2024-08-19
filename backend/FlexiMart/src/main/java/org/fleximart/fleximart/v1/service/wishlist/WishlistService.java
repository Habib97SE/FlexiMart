package org.fleximart.fleximart.v1.service.wishlist;

import org.fleximart.fleximart.v1.DTO.wishlist.request.WishlistRequest;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistItemResponse;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistResponse;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.entity.wishlist.Wishlist;
import org.fleximart.fleximart.v1.entity.wishlist.WishlistItem;
import org.fleximart.fleximart.v1.repository.wishlist.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;


    public WishlistService(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    private Wishlist mapToEntity(WishlistRequest wishlistRequest) {
        return Wishlist.builder()
                .user(User.builder().id(wishlistRequest.getUserId()).build())
                .build();
    }

    private WishlistItemResponse mapToItemResponse(WishlistItem item) {
        return WishlistItemResponse.builder()
                .productId(item.getProduct().getId())
                .productName(item.getProduct().getName())
                .build();
    }

    private WishlistResponse mapToResponse(Wishlist wishlist) {
        return WishlistResponse.builder()
                .id(wishlist.getId())
                .userId(wishlist.getUser().getId())
                .items(
                        wishlist.getItems().stream()
                                .map(this::mapToItemResponse)
                                .collect(Collectors.toSet())
                )
                .build();
    }

    public List<WishlistResponse> findAll() {
        return wishlistRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public WishlistResponse findById(Long id) {
        return mapToResponse(Objects.requireNonNull(wishlistRepository.findById(id).orElse(null)));
    }

    public WishlistResponse findByUserId(Long userId) {
        Wishlist wishlist = wishlistRepository.findByUser_Id(userId);
        if (wishlist == null) {
            return null;
        }
        return mapToResponse(wishlist);
    }

    public WishlistResponse save(WishlistRequest wishlistRequest) {
        Wishlist wishlist = mapToEntity(wishlistRequest);
        return WishlistResponse.builder()
                .id(wishlistRepository.save(wishlist).getId())
                .userId(wishlist.getUser().getId())
                .items(null)
                .build();
    }

    public WishlistResponse update(Long wishlistId, WishlistRequest wishlistRequest) {
        Wishlist wishlist = wishlistRepository.findById(wishlistId).orElse(null);
        if (wishlist == null) {
            return null;
        }
        wishlist.setUser(User.builder().id(wishlistRequest.getUserId()).build());
        return mapToResponse(wishlistRepository.save(wishlist));
    }

    public void delete(Long id) {
        wishlistRepository.deleteById(id);
    }

}
