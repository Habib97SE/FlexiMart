package org.fleximart.fleximart.v1.repository.user;

import org.fleximart.fleximart.v1.entity.user.AddressType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressTypeRepository extends JpaRepository<AddressType, Long>{
    AddressType findByName(String name);
}
