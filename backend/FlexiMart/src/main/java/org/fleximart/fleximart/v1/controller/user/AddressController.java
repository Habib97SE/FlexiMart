package org.fleximart.fleximart.v1.controller.user;

import org.fleximart.fleximart.v1.service.user.AddressService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping({"/", ""})
    public ResponseEntity<Object> getAllAddresses() {
        return addressService.findAll();
    }
}
