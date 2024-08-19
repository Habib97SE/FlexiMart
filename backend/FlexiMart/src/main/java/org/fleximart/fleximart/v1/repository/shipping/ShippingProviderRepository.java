package org.fleximart.fleximart.v1.repository.shipping;

import org.fleximart.fleximart.v1.entity.shipping.ShippingProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingProviderRepository extends JpaRepository<ShippingProvider, Long> {
}
