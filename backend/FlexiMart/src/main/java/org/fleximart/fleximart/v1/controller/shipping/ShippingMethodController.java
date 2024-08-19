package org.fleximart.fleximart.v1.controller.shipping;

import org.fleximart.fleximart.v1.DTO.shipping.request.ShippingMethodRequest;
import org.fleximart.fleximart.v1.service.shipping.ShippingMethodService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/shipping/shipping-method")
public class ShippingMethodController {

    private final ShippingMethodService shippingMethodService;

    @Autowired
    public ShippingMethodController(ShippingMethodService shippingMethodService) {
        this.shippingMethodService = shippingMethodService;
    }

    @GetMapping
    public ResponseEntity<Object> getAllShippingMethods() {
        return ResponseHandler.generateResponse(
                "Successfully retrieved all shipping methods",
                200,
                shippingMethodService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getShippingMethodById(Long id) {
        return ResponseHandler.generateResponse(
                "Successfully retrieved shipping method",
                200,
                shippingMethodService.findById(id),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> createShippingMethod(@RequestBody ShippingMethodRequest shippingMethodRequest) {
        return ResponseHandler.generateResponse(
                "Successfully created shipping method",
                201,
                shippingMethodService.create(shippingMethodRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateShippingMethod(@PathVariable Long id,@RequestBody ShippingMethodRequest shippingMethodRequest) {
        return ResponseHandler.generateResponse(
                "Successfully updated shipping method",
                200,
                shippingMethodService.update(id, shippingMethodRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteShippingMethod(@PathVariable Long id) {
        shippingMethodService.delete(id);
        return ResponseHandler.generateResponse(
                "Successfully deleted shipping method",
                200,
                null,
                false
        );
    }


}
