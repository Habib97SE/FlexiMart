package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.repository.user.AddressTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressTypeService {

    @Autowired
    private AddressTypeRepository addressTypeRepository;

    public AddressTypeService(AddressTypeRepository addressTypeRepository) {
        this.addressTypeRepository = addressTypeRepository;
    }
}
