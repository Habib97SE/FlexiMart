package org.fleximart.fleximart.v1.repository.blog;

import org.fleximart.fleximart.v1.entity.blog.Post;
import org.fleximart.fleximart.v1.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByTags_Name(String tagName);
    List<Post> findByAuthor_Id(Long authorId);
    Optional<Post> findBySlug(String slug);
}
