package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.CollectionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.CollectionResponse;
import org.fleximart.fleximart.v1.service.product.CollectionService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/collections")
public class CollectionController {

    private final CollectionService collectionService;

    @Autowired
    public CollectionController(CollectionService collectionService) {
        this.collectionService = collectionService;
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
}
