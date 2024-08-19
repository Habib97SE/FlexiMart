package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.ProductVariantRequest;
import org.fleximart.fleximart.v1.DTO.product.request.VariantOptionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.ProductVariantResponse;
import org.fleximart.fleximart.v1.DTO.product.response.VariantOptionResponse;
import org.fleximart.fleximart.v1.entity.product.VariantOption;
import org.fleximart.fleximart.v1.service.product.ProductVariantService;
import org.fleximart.fleximart.v1.service.product.VariantOptionService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/product-variants")
public class ProductVariantController {

    private final ProductVariantService productVariantService;
    private final VariantOptionService variantOptionService;

    @Autowired
    public ProductVariantController(ProductVariantService productVariantService, VariantOptionService variantOptionService) {
        this.productVariantService = productVariantService;
        this.variantOptionService = variantOptionService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        List<ProductVariantResponse> productVariantResponses = productVariantService.findAll();
        return ResponseHandler.generateResponse(
                "Product variants retrieved successfully",
                200,
                productVariantResponses,
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        ProductVariantResponse productVariantResponse = productVariantService.findById(id);
        if (productVariantResponse == null) {
            return ResponseHandler.generateResponse(
                    "Product variant not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product variant retrieved successfully",
                200,
                productVariantResponse,
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody ProductVariantRequest productVariantRequest) {
        ProductVariantResponse productVariantResponse = productVariantService.save(productVariantRequest);
        return ResponseHandler.generateResponse(
                "Product variant saved successfully",
                201,
                productVariantResponse,
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody ProductVariantRequest productVariantRequest) {
        ProductVariantResponse productVariantResponse = productVariantService.update(id, productVariantRequest);
        if (productVariantResponse == null) {
            return ResponseHandler.generateResponse(
                    "Product variant not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product variant updated successfully",
                200,
                productVariantResponse,
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        boolean isDeleted = productVariantService.delete(id);
        if (!isDeleted) {
            return ResponseHandler.generateResponse(
                    "Product variant not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product variant deleted successfully",
                200,
                null,
                false
        );
    }
}
