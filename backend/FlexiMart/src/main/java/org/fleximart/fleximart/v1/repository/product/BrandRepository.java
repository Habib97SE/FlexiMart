package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {
    Brand findBrandById (Long id);
}
