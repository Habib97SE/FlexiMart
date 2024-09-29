package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.ProductMedia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductMediaRepository extends JpaRepository<ProductMedia, Long> {
    List<ProductMedia> findByProduct_Id(Long productId);
}
