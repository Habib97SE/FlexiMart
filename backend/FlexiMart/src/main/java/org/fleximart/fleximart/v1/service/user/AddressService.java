package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.repository.user.AddressRepository;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    /**
     * Fetch all Address
     * @return ResponseEntity
     */
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "All Address fetched successfully.",
                200,
                addressRepository.findAll(),
                false);
    }
}
