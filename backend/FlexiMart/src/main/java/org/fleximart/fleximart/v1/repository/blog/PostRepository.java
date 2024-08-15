package org.fleximart.fleximart.v1.repository.blog;

import org.fleximart.fleximart.v1.entity.blog.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
