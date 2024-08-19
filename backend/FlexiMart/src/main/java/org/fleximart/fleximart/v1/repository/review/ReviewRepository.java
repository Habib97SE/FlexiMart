package org.fleximart.fleximart.v1.repository.review;

import org.fleximart.fleximart.v1.entity.review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByProduct_Id(Long productId);
    List<Review> findByUser_Id(Long userId);
}
