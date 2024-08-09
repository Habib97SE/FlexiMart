package org.fleximart.fleximart.v1.repository.user;

import org.fleximart.fleximart.v1.entity.user.CustomerGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomGroupRepository extends JpaRepository<CustomerGroup, Long> {
}
