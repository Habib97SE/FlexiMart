package org.fleximart.fleximart.v1.controller.product;

import org.springframework.web.bind.annotation.RequestBody;
import org.fleximart.fleximart.v1.DTO.product.request.ProductMediaRequest;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.fleximart.fleximart.v1.service.product.ProductMediaService;

@RestController
@RequestMapping("/api/v1/product-media")
public class ProductMediaController {

    private final ProductMediaService productMediaService;

    @Autowired
    public ProductMediaController(ProductMediaService productMediaService) {
        this.productMediaService = productMediaService;
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Object> getProductMediaByProductId(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Product Media Retrieved Successfully",
                200,
                productMediaService.getProductMediaByProductId(id),
                false
        );
    }

    @GetMapping("{mediaId}")
    public ResponseEntity<Object> getProductMediaById(@PathVariable Long mediaId) {
        return ResponseHandler.generateResponse(
                "Product Media Retrieved Successfully",
                200,
                productMediaService.getProductMediaById(mediaId),
                false
        );
    }

    @PostMapping("/products/{productVariantId}")
    public ResponseEntity<Object> addProductMedia(@PathVariable Long productVariantId, @RequestBody ProductMediaRequest productMediaRequest) {

        if (productMediaRequest.getMediaUrl() == null || productMediaRequest.getMediaUrl().isEmpty()) {
            return ResponseHandler.generateResponse(
                    "Image URL is required",
                    400,
                    null,
                    true
            );
        }

        return ResponseHandler.generateResponse(
                "Product Media Added Successfully",
                201,
                productMediaService.addProductMediaForProduct(productVariantId, productMediaRequest),
                false
        );
    }


}
