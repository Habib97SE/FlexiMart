package org.fleximart.fleximart.v1.repository.shipping;

import org.fleximart.fleximart.v1.entity.shipping.ShippingMethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShippingMethodRepository extends JpaRepository<ShippingMethod, Long> {
}
