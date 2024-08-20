package org.fleximart.fleximart.v1.repository.order;

import org.fleximart.fleximart.v1.entity.order.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping, Long> {
}
