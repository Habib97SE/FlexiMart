package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long>{
    Collection findCollectionById (Long id);
    Collection findBySlug (String slug);
}
