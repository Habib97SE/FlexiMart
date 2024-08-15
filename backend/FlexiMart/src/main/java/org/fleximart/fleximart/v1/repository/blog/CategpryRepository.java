package org.fleximart.fleximart.v1.repository.blog;

import org.fleximart.fleximart.v1.entity.blog.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategpryRepository extends JpaRepository<Category, Long> {
}
