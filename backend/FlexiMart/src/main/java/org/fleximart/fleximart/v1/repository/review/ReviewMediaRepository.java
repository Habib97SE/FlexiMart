package org.fleximart.fleximart.v1.repository.review;

import org.fleximart.fleximart.v1.entity.review.ReviewMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewMediaRepository extends JpaRepository<ReviewMedia, Long> {
}
