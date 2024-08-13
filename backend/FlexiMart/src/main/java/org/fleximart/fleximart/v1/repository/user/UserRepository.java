package org.fleximart.fleximart.v1.repository.user;

import org.fleximart.fleximart.v1.entity.user.User;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findAll(Specification<User> specification);
    User findByEmail(String email);
}
