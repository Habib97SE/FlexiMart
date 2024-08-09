package org.fleximart.fleximart.v1.repository.user;

import org.fleximart.fleximart.v1.entity.user.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{

}
