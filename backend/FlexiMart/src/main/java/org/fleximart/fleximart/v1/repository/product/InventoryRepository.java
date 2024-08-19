package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}
