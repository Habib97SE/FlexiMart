package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.NewProductRequest;
import org.fleximart.fleximart.v1.DTO.product.request.UpdateProductRequest;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Product fetched successfully",
                200,
                productService.findById(id),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> createProduct(@RequestBody NewProductRequest newProductRequest) {
        return productService.save(newProductRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProduct(@PathVariable Long id, @RequestBody UpdateProductRequest updateProductRequest) {
        return productService.update(id, updateProductRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduct(@PathVariable Long id) {
        return productService.delete(id);
    }


}
