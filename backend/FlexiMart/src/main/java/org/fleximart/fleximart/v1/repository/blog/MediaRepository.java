package org.fleximart.fleximart.v1.repository.blog;

import org.fleximart.fleximart.v1.entity.blog.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository extends JpaRepository<Media, Long> {
}
