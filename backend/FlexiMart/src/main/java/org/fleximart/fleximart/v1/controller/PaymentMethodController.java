package org.fleximart.fleximart.v1.controller;

import org.fleximart.fleximart.v1.entity.PaymentMethod;
import org.fleximart.fleximart.v1.service.PaymentMethodService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/payment-method")
public class PaymentMethodController {


    private final PaymentMethodService paymentMethodService;

    @Autowired
    public PaymentMethodController(PaymentMethodService paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "All Payment Methods fetched successfully",
                200,
                paymentMethodService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(Long id) {
        return ResponseHandler.generateResponse(
                "Payment Method fetched successfully",
                200,
                paymentMethodService.findById(id),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody PaymentMethod paymentMethod) {
        return ResponseHandler.generateResponse(
                "Payment Method saved successfully",
                200,
                paymentMethodService.save(paymentMethod),
                false
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody PaymentMethod paymentMethod) {
        paymentMethod.setId(id);
        return ResponseHandler.generateResponse(
                "Payment Method updated successfully",
                200,
                paymentMethodService.update(paymentMethod),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        paymentMethodService.delete(id);
        return ResponseHandler.generateResponse(
                "Payment Method deleted successfully",
                200,
                null,
                false
        );
    }


}
