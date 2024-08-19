package org.fleximart.fleximart.v1.repository.wishlist;

import org.fleximart.fleximart.v1.entity.wishlist.Wishlist;
import org.fleximart.fleximart.v1.entity.wishlist.WishlistItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishlistItemRepository extends JpaRepository<WishlistItem, Long> {
    List<WishlistItem> findByWishlist_Id(Long id);
}
