package org.fleximart.fleximart.v1.repository.user;

import org.fleximart.fleximart.v1.entity.user.People;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeopleRepository extends JpaRepository<People, Long> {
}
