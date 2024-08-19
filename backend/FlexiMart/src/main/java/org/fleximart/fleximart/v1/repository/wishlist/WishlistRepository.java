package org.fleximart.fleximart.v1.repository.wishlist;

import org.fleximart.fleximart.v1.entity.wishlist.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
    Wishlist findByUser_Id(Long userId);
}
