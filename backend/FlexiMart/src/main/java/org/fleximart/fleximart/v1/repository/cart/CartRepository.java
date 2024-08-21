package org.fleximart.fleximart.v1.repository.cart;

import org.fleximart.fleximart.v1.entity.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByUser_Id(Long userId);
}
