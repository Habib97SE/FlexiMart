package org.fleximart.fleximart.v1.controller.shipping;

import org.fleximart.fleximart.v1.DTO.shipping.request.ShippingProviderRequest;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.fleximart.fleximart.v1.service.shipping.ShippingProviderService;

@RestController
@RequestMapping("/api/v1/shipping/shipping-provider")
public class ShippingProviderController {

    private final ShippingProviderService shippingProviderService;

    @Autowired
    public ShippingProviderController(ShippingProviderService shippingProviderService) {
        this.shippingProviderService = shippingProviderService;
    }

    @GetMapping
    public ResponseEntity<Object> getAllShippingProviders() {
        return ResponseHandler.generateResponse(
                "Successfully retrieved all shipping providers",
                200,
                shippingProviderService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getShippingProviderById(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Successfully retrieved shipping provider",
                200,
                shippingProviderService.findById(id),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> createShippingProvider(@RequestBody ShippingProviderRequest shippingProviderRequest) {
        return ResponseHandler.generateResponse(
                "Successfully created shipping provider",
                201,
                shippingProviderService.save(shippingProviderRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateShippingProvider(@PathVariable Long id, @RequestBody ShippingProviderRequest shippingProviderRequest) {
        return ResponseHandler.generateResponse(
                "Successfully updated shipping provider",
                200,
                shippingProviderService.update(id, shippingProviderRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteShippingProvider(@PathVariable Long id) {
        shippingProviderService.delete(id);
        return ResponseHandler.generateResponse(
                "Successfully deleted shipping provider",
                200,
                null,
                false
        );
    }
}
