package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    Product findProductById (Long id);
    List<Product> findByCollection_Id(Long collectionId);
    List<Product> findByBrand_Id(Long brandId);
    List<Product> findByProductType_Id (Long productTypeId);
}
