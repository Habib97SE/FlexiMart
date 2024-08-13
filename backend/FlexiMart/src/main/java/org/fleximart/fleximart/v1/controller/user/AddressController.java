package org.fleximart.fleximart.v1.controller.user;

import org.fleximart.fleximart.v1.DTO.user.request.AddressRequest;
import org.fleximart.fleximart.v1.service.user.AddressService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping({"/", ""})
    public ResponseEntity<Object> getAllAddresses() {
        return addressService.findAll();
    }

    @GetMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Object> getAddressById(@PathVariable Long id) {
        return addressService.findById(id);
    }

    // get all address types
    @GetMapping({"/types", "/types/"})
    public ResponseEntity<Object> getAllAddressTypes() {
        return addressService.findAllAddressTypes();
    }

    @GetMapping({"/user/{id}", "/user/{id}/"})
    public ResponseEntity<Object> getAddressesByUserId(@PathVariable Long id) {
        return addressService.findByUserId(id);
    }

    @GetMapping({"/types/{id}", "/types/{id}/"})
    public ResponseEntity<Object> getAddressTypeById(@PathVariable Long id) {
        System.err.println("Address Type ID: " + id);
        return addressService.getAddressTypeById(id);
    }

    @PostMapping({"/", ""})
    public ResponseEntity<Object> createAddress(@RequestBody AddressRequest addressRequest) {
        return addressService.create(addressRequest);
    }

    @DeleteMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Object> deleteAddress(@PathVariable Long id) {
        return addressService.delete(id);
    }
}
