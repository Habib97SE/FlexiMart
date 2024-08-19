package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductVariantRepository extends JpaRepository<ProductVariant, Long> {
    List<ProductVariant> findByProduct(Product product);
    List<ProductVariant> findByProduct_Id(Long productId);
}
