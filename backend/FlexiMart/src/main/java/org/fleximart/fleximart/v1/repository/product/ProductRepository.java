package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    Product findProductById (Long id);
}
