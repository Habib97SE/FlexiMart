package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.ProductTypeRequest;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductTypeResponse;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.service.product.ProductTypeService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/product-types")
public class ProductTypeController {

    private final ProductTypeService productTypeService;

    private final ProductService productService;

    @Autowired
    public ProductTypeController(ProductTypeService productTypeService,
                                 ProductService productService) {
        this.productTypeService = productTypeService;
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        List<ProductTypeResponse> productTypeResponses = productTypeService.findAll();
        if (productTypeResponses.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "No product types found",
                    200,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Product types found",
                200,
                productTypeResponses,
                true
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        ProductTypeResponse productTypeResponse = productTypeService.findById(id);
        if (productTypeResponse == null) {
            return ResponseHandler.generateResponse(
                    "Product type not found",
                    404,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Product type found",
                200,
                productTypeResponse,
                true
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody ProductTypeRequest productTypeRequest) {
        ProductTypeResponse productTypeResponse = productTypeService.save(productTypeRequest);
        return ResponseHandler.generateResponse(
                "Product type saved",
                201,
                productTypeResponse,
                true
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody ProductTypeRequest productTypeRequest) {
        ProductTypeResponse productTypeResponse = productTypeService.update(id, productTypeRequest);
        if (productTypeResponse == null) {
            return ResponseHandler.generateResponse(
                    "Product type not found",
                    404,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Product type updated",
                200,
                productTypeResponse,
                true
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        boolean isDeleted = productTypeService.delete(id);
        if (!isDeleted) {
            return ResponseHandler.generateResponse(
                    "Product type not found",
                    404,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Product type deleted",
                200,
                null,
                true
        );
    }

    @GetMapping("/{id}/products")
    public ResponseEntity<Object> getProductsByProductTypeId(@PathVariable Long id) {
        List<ProductResponse> productResponseList = productService.findByProductType(id);

        if (productResponseList == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong while fetching products for the product type",
                    500,
                    null,
                    true
            );
        }

        if (productResponseList.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "No products found for the product type",
                    404,
                    null,
                    true
            );
        }

        return ResponseHandler.generateResponse(
                "Products retrieved successfully",
                200,
                productResponseList,
                false
        );
    }
}
