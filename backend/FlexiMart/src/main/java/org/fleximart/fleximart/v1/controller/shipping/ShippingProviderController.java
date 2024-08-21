package org.fleximart.fleximart.v1.controller.shipping;

import jakarta.mail.MessagingException;
import org.fleximart.fleximart.v1.DTO.shipping.request.ShippingMethodRequest;
import org.fleximart.fleximart.v1.DTO.shipping.request.ShippingProviderRequest;
import org.fleximart.fleximart.v1.DTO.shipping.response.ShippingMethodResponse;
import org.fleximart.fleximart.v1.DTO.shipping.response.ShippingProviderResponse;
import org.fleximart.fleximart.v1.service.email.EmailService;
import org.fleximart.fleximart.v1.service.google.storage.CloudStorageService;
import org.fleximart.fleximart.v1.service.shipping.ShippingMethodService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.fleximart.fleximart.v1.service.shipping.ShippingProviderService;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/v1/shippings")
public class ShippingProviderController {

    private final ShippingProviderService shippingProviderService;
    private final ShippingMethodService shippingMethodService;
    private final EmailService emailService;

    @Autowired
    public ShippingProviderController(ShippingProviderService shippingProviderService,
                                      ShippingMethodService shippingMethodService,
                                      EmailService emailService) {
        this.shippingProviderService = shippingProviderService;
        this.shippingMethodService = shippingMethodService;
        this.emailService = emailService;
    }

    /**
     * Get all shipping providers
     * @return ResponseEntity
     */
    @GetMapping("/providers")
    public ResponseEntity<Object> getAllShippingProviders () throws MessagingException, IOException {
        // use CloudStorageService to upload a file called cat.jpg
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("cat.jpg");
        if (inputStream == null) {
            throw new FileNotFoundException("File not found: cat.jpg");
        }
        byte[] content = inputStream.readAllBytes();
        CloudStorageService cloudStorageService = new CloudStorageService();
        String url = cloudStorageService.uploadFile("fleximart_product_media", "cat.jpg", content);
        System.err.println("The url is: " + url);
        List<ShippingProviderResponse> shippingProviders = shippingProviderService.findAll();
        return ResponseHandler.generateResponse(
                "Successfully retrieved all shipping providers",
                200,
                shippingProviders,
                false
        );
    }

    /**
     * Get a shipping provider by id
     * @param id the id of the shipping provider
     * @return ResponseEntity
     */
    @GetMapping("/providers/{id}")
    public ResponseEntity<Object> getShippingProviderById (@PathVariable Long id) {
        ShippingProviderResponse shippingProvider = shippingProviderService.findById(id);
        return ResponseHandler.generateResponse(
                "Successfully retrieved shipping provider",
                200,
                shippingProvider,
                false
        );
    }

    /**
     * Create a shipping provider
     * @param shippingProviderRequest the shipping provider request
     * @return ResponseEntity
     */
    @PostMapping("/providers")
    public ResponseEntity<Object> createShippingProvider (@RequestBody ShippingProviderRequest shippingProviderRequest) {
        ShippingProviderResponse shippingProvider = shippingProviderService.save(shippingProviderRequest);
        return ResponseHandler.generateResponse(
                "Successfully created shipping provider",
                201,
                shippingProvider,
                false
        );
    }

    /**
     * Update a shipping provider
     * @param id the id of the shipping provider
     * @param shippingProviderRequest the shipping provider request
     * @return ResponseEntity
     */
    @PutMapping("/providers/{id}")
    public ResponseEntity<Object> updateShippingProvider (@PathVariable Long id, @RequestBody ShippingProviderRequest shippingProviderRequest) {
        ShippingProviderResponse shippingProvider = shippingProviderService.update(id, shippingProviderRequest);
        return ResponseHandler.generateResponse(
                "Successfully updated shipping provider",
                200,
                shippingProvider,
                false
        );
    }

    /**
     * Delete a shipping provider
     * @param id the id of the shipping provider
     * @return ResponseEntity
     */
    @DeleteMapping("/providers/{id}")
    public ResponseEntity<Object> deleteShippingProvider (@PathVariable Long id) {
        shippingProviderService.delete(id);
        return ResponseHandler.generateResponse(
                "Successfully deleted shipping provider",
                200,
                null,
                false
        );
    }

    // Shipping methods

    /**
     * Get all shipping methods
     * @return ResponseEntity
     */
    @GetMapping("/providers/{id}/methods")
    public ResponseEntity<Object> getShippingMethodsByProviderId (@PathVariable Long id) {
        List<ShippingMethodResponse> shippingMethods = shippingMethodService.findByProviderId(id);
        return ResponseHandler.generateResponse(
                "Successfully retrieved shipping methods",
                200,
                shippingMethods,
                false
        );
    }

    /**
     * Get a shipping method by id
     * @param id the id of the shipping method
     * @return ResponseEntity
     */
    @GetMapping("/providers/{providerId}/methods/{id}")
    public ResponseEntity<Object> getShippingMethodById (@PathVariable Long providerId, @PathVariable Long id) {
        ShippingMethodResponse shippingMethod = shippingMethodService.findById(id);
        return ResponseHandler.generateResponse(
                "Successfully retrieved shipping method",
                200,
                shippingMethod,
                false
        );
    }

    /**
     * Create a shipping method
     * @param providerId
     * @param shippingMethodRequest
     * @return
     */
    @PostMapping("/providers/{providerId}/methods")
    public ResponseEntity<Object> createShippingMethod (@PathVariable Long providerId, @RequestBody ShippingMethodRequest shippingMethodRequest) {
        ShippingMethodResponse shippingMethod = shippingMethodService.create(shippingMethodRequest);
        return ResponseHandler.generateResponse(
                "Successfully created shipping method",
                201,
                shippingMethod,
                false
        );
    }

    /**
     * Update a shipping method
     * @param providerId : the id of the provider
     * @param id : the id of the shipping method
     * @param shippingMethodRequest : the shipping method request
     * @return ResponseEntity : the response entity
     */
    @PutMapping("/providers/{providerId}/methods/{id}")
    public ResponseEntity<Object> updateShippingMethod (@PathVariable Long providerId, @PathVariable Long id, @RequestBody ShippingMethodRequest shippingMethodRequest) {
        ShippingMethodResponse shippingMethod = shippingMethodService.update(id, shippingMethodRequest);
        return ResponseHandler.generateResponse(
                "Successfully updated shipping method",
                200,
                shippingMethod,
                false
        );
    }

    /**
     * Delete a shipping method
     * @param providerId : the id of the provider
     * @param id : the id of the shipping method
     * @return ResponseEntity : the response entity
     */
    @DeleteMapping("/providers/{providerId}/methods/{id}")
    public ResponseEntity<Object> deleteShippingMethod (@PathVariable Long providerId, @PathVariable Long id) {
        shippingMethodService.delete(id);
        return ResponseHandler.generateResponse(
                "Successfully deleted shipping method",
                200,
                null,
                false
        );
    }


}
