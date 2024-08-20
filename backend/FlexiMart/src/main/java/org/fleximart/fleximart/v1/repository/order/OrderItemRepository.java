package org.fleximart.fleximart.v1.repository.order;

import org.fleximart.fleximart.v1.entity.order.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository  extends JpaRepository<OrderItem, Long> {
}
