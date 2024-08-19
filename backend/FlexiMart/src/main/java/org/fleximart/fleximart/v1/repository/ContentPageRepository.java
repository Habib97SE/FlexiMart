package org.fleximart.fleximart.v1.repository;

import org.fleximart.fleximart.v1.entity.ContentPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentPageRepository extends JpaRepository<ContentPage, Long> {
    ContentPage findBySlug(String slug);
}
