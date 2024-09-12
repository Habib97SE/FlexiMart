package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.CollectionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.CollectionResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.service.product.CollectionService;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/collections")
public class CollectionController {

    private final CollectionService collectionService;

    private final ProductService productService;

    @Autowired
    public CollectionController(CollectionService collectionService,
                                ProductService productService) {
        this.collectionService = collectionService;
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        List<CollectionResponse> collectionResponseList = collectionService.findAll();
        return ResponseHandler.generateResponse(
                "Collections retrieved successfully",
                200,
                collectionResponseList,
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        CollectionResponse collectionResponse = collectionService.findById(id);
        return ResponseHandler.generateResponse(
                "Collection retrieved successfully",
                200,
                collectionResponse,
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> createCollection(@RequestBody CollectionRequest collectionRequest) {
        return collectionService.save(collectionRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCollection(@PathVariable Long id, @RequestBody CollectionRequest collectionRequest) {
        return collectionService.update(id, collectionRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCollection(@PathVariable Long id) {
        return collectionService.delete(id);
    }

    @GetMapping("/{id}/products")
    public ResponseEntity<Object> getProductsByCollectionId(@PathVariable Long id) {
        List<ProductResponse> productResponseList = productService.findByCollectionId(id);

        if (productResponseList == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong while fetching products for the collection",
                    500,
                    null,
                    true
            );
        }

         if (productResponseList.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "No products found for the collection",
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
