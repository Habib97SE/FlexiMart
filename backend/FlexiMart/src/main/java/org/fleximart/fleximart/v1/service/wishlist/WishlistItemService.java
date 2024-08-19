package org.fleximart.fleximart.v1.service.wishlist;

import org.fleximart.fleximart.v1.DTO.wishlist.request.WishlistItemRequest;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistItemResponse;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistResponse;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.wishlist.Wishlist;
import org.fleximart.fleximart.v1.entity.wishlist.WishlistItem;
import org.fleximart.fleximart.v1.repository.wishlist.WishlistItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class WishlistItemService {

    @Autowired
    private WishlistItemRepository wishlistItemRepository;

    public WishlistItemService(WishlistItemRepository wishlistItemRepository) {
        this.wishlistItemRepository = wishlistItemRepository;
    }

    private WishlistItem mapToEntity(WishlistItemRequest wishlistItemRequest) {
        return WishlistItem.builder()
                .wishlist(Wishlist.builder().id(wishlistItemRequest.getWishlistId()).build())
                .product(Product.builder().id(wishlistItemRequest.getProductId()).build())
                .build();
    }

    private WishlistItemResponse mapToResponse(WishlistItem item) {
        return WishlistItemResponse.builder()
                .productId(item.getProduct().getId())
                .productName(item.getProduct().getName())
                .build();
    }

    public List<WishlistItemResponse> findAll(Long wishlistId) {
        return wishlistItemRepository.findByWishlist_Id(wishlistId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }


    public WishlistItemResponse findById(Long id) {
        return mapToResponse(Objects.requireNonNull(wishlistItemRepository.findById(id).orElse(null)));
    }

    public WishlistItemResponse save (WishlistItemRequest wishlistItemRequest) {
        WishlistItem wishlistItem = mapToEntity(wishlistItemRequest);
        return mapToResponse(wishlistItemRepository.save(wishlistItem));
    }

    public WishlistItemResponse update(Long id, WishlistItemRequest wishlistItemRequest) {
        WishlistItem wishlistItem = wishlistItemRepository.findById(id).orElse(null);
        if (wishlistItem == null) {
            return null;
        }

        wishlistItem.setProduct(Product.builder().id(wishlistItemRequest.getProductId()).build());
        return mapToResponse(wishlistItemRepository.save(wishlistItem));
    }

    public void delete(Long id) {
        wishlistItemRepository.deleteById(id);
    }


}
