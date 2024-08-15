package org.fleximart.fleximart.v1.repository.blog;

import org.fleximart.fleximart.v1.entity.blog.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
}
