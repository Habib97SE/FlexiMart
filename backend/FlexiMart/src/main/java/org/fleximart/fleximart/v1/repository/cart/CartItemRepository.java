package org.fleximart.fleximart.v1.repository.cart;

import org.fleximart.fleximart.v1.entity.cart.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
