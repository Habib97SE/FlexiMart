package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.service.product.InventoryService;
import org.fleximart.fleximart.v1.service.product.ProductMediaService;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;
    private final ProductMediaService productMediaService;
    private final InventoryService inventoryService;


    @Autowired
    public ProductController(ProductService productService,
                             ProductMediaService productMediaService,
                             InventoryService inventoryService) {
        this.productService = productService;
        this.productMediaService = productMediaService;
        this.inventoryService = inventoryService;
    }

    // Endpoints related to Products

    @GetMapping
    public ResponseEntity<Object> getAllProducts() {
        return ResponseHandler.generateResponse(
                "All products retrieved successfully.",
                200,
                productService.findAll(),
                false
        );
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Object> findBySlug (@PathVariable String slug) {
        ProductResponse productResponse = productService.findBySlug(slug);
        // if no product were found
        if (productResponse  == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product retrieved successfully",
                200,
                productResponse,
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> createProduct (@RequestBody ProductRequest productRequest) throws Exception {
        ProductResponse productResponse = productService.save(productRequest);
        if (productResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product created successfully.",
                201,
                productResponse,
                false
        );
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Object> getProductById (@PathVariable Long productId) {
        ProductResponse productResponse = productService.findById(productId);
        if (productResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }

        return ResponseHandler.generateResponse(
                "Product retrieved successfully",
                200,
                productResponse,
                false
        );
    }



    @PutMapping("/{productId}")
    public ResponseEntity<Object> updateProduct (@PathVariable Long productId, @RequestBody ProductRequest productRequest) {
        ProductResponse productResponse = productService.update(productId, productRequest);
        if (productResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }

        return ResponseHandler.generateResponse(
                "Product updated successfully",
                200,
                productResponse,
                false
        );
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Object> deleteProduct(@PathVariable Long productId) {
        boolean result = productService.delete(productId);
        if (result) {
            return ResponseHandler.generateResponse(
                    "Product deleted successfully.",
                    200,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Product could not be deleted.",
                500,
                null,
                true
        );
    }




}
