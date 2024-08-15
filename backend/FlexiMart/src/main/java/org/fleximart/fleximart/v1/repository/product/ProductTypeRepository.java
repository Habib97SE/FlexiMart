package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductTypeRepository extends JpaRepository<ProductType, Long> {
}
