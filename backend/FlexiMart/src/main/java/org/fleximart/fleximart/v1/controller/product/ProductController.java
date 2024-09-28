package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.InventoryRequest;
import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;
import org.fleximart.fleximart.v1.DTO.product.request.ProductVariantRequest;
import org.fleximart.fleximart.v1.DTO.product.response.InventoryResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductMediaResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductVariantResponse;
import org.fleximart.fleximart.v1.entity.product.ProductMedia;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.fleximart.fleximart.v1.service.product.InventoryService;
import org.fleximart.fleximart.v1.service.product.ProductMediaService;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.service.product.ProductVariantService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;
    private final ProductVariantService productVariantService;
    private final ProductMediaService productMediaService;
    private final InventoryService inventoryService;


    @Autowired
    public ProductController(ProductService productService,
                             ProductVariantService productVariantService,
                             ProductMediaService productMediaService,
                             InventoryService inventoryService) {
        this.productService = productService;
        this.productVariantService = productVariantService;
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
            ResponseHandler.generateResponse(
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
    public ResponseEntity<Object> createProduct(@RequestBody ProductRequest productRequest) {
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
    public ResponseEntity<Object> updateProduct (@PathVariable Long productId) {
        boolean result = productService.delete(productId);
        if (result) {
            ResponseHandler.generateResponse(
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


    // Product Variant endpoints
    @GetMapping("/{productId}/product-variants")
    public ResponseEntity<Object> getAllProductVariantsByProductId (@PathVariable Long productId) {
        List<ProductVariant> productVariantResponseList = productVariantService.findByProductId(productId);
        if (productVariantResponseList.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "No product variant was found.",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "All product variants retrieved successfully.",
                200,
                productVariantResponseList.stream().map(productVariantService::createProductVariantResponse).toList(),
                false
        );
    }

    @PostMapping("/{productId}/product-variants")
    public ResponseEntity<Object> createNewProductVariant (@PathVariable Long productId, @RequestBody ProductVariantRequest productVariantRequest) {
        ProductVariantResponse productVariantResponse = productVariantService.save(productVariantRequest);
        if (productVariantResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "New product variant created successfully.",
                201,
                productVariantResponse,
                false
        );
    }

    @GetMapping("/{productId}/product-variants/{productVariantId}")
    public ResponseEntity<Object> getProductVariantById (@PathVariable Long productId, @PathVariable Long productVariantId) {
        ProductVariantResponse productVariantResponse = productVariantService.findById(productVariantId);
        if (productVariantResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product variant retrieved successfully.",
                201,
                productVariantResponse,
                false
        );
    }

    @PutMapping("/{productId}/product-variants/{productVariantId}")
    public ResponseEntity<Object> updateProductVariantById (@PathVariable Long productId, @PathVariable Long productVariantId, @RequestBody ProductVariantRequest productVariantRequest) {
        ProductVariantResponse productVariantResponse = productVariantService.update(productVariantId, productVariantRequest);
        if (productVariantResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product variant updated successfully.",
                201,
                productVariantResponse,
                false
        );
    }

    @DeleteMapping("/{productId}/product-variants/{productVariantId}")
    public ResponseEntity<Object> deleteProductVariantById (@PathVariable Long productId, @PathVariable Long productVariantId) {
        Boolean result = productVariantService.delete(productVariantId);
        if (result) {
            return ResponseHandler.generateResponse(
                    "Product variant deleted successfully.",
                    200,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Something went wrong",
                500,
                null,
                true
        );
    }

    // product media endpoints
    @GetMapping("/{productId}/product-variants/{productVariantId}/product-media")
    public ResponseEntity<Object> getAllProductMedia(@PathVariable Long productId, @PathVariable Long productVariantId) {
        List<ProductMediaResponse> productMediaResponseList = productMediaService.getProductMediaByProductVariantId(productVariantId);
        if (!productMediaResponseList.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "All product media retrieved successfully.",
                    200,
                    productMediaResponseList,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Something went wrong",
                500,
                null,
                true
        );
    }

    @PostMapping("/{productId}/product-variants/{productVariantId}/product-media/")
    public ResponseEntity<Object> createNewProductMedia (@PathVariable Long productId, @PathVariable Long productVariantId, @RequestBody ProductMedia productMedia ) {
         ProductMedia productMediaResponse = productMediaService.save(productVariantId, productMedia);
        if (productMediaResponse != null) {
            return ResponseHandler.generateResponse(
                    "Product media created successfully.",
                    201,
                    productMediaResponse,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Something went wrong",
                500,
                null,
                true
        );
    }

    @GetMapping("/{productId}/product-variants/{productVariantId}/product-media/{productMediaId}")
    public ResponseEntity<Object> getProductMediaById (@PathVariable Long productId, @PathVariable Long productVariantId, @PathVariable Long productMediaId) {
        ProductMediaResponse productMedia = productMediaService.getProductMediaById(productMediaId);
        if (productMedia == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Product media retrieved successfully.",
                200,
                productMedia,
                false
        );
    }

//    @PutMapping("/{productId}/product-variants/{productVariantId}/product-media/{productMediaId}")
//    public ResponseEntity<Object> updateProductMediaById (@PathVariable Long productId, @PathVariable Long productVariantId, @PathVariable Long productMediaId, @RequestBody ProductMedia productMedia) {
//        ProductMedia productMediaResponse = productMediaService
//    }

    // inventory endpoints
    @GetMapping("/{productId}/product-variants/{productVariantId}/inventory")
    public ResponseEntity<Object> getInventoryByProductVariantId (@PathVariable Long productId, @PathVariable Long productVariantId) {
        Long inventoryId = productVariantService.getInventoryId(productVariantId);
        InventoryResponse inventoryResponse = inventoryService.findById(inventoryId);
        if (inventoryResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Inventory retrieved successfully.",
                200,
                inventoryResponse,
                false
        );
    }

    @PostMapping("/{productId}/product-variants/{productVariantId}/inventory")
    public ResponseEntity<Object> createInventory (@PathVariable Long productId, @PathVariable Long productVariantId, @RequestBody InventoryRequest inventoryRequest) {
        InventoryResponse inventoryResponse = inventoryService.save(inventoryRequest);
        if (inventoryResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Inventory created successfully.",
                201,
                inventoryResponse,
                false
        );
    }

    @PutMapping("/{productId}/product-variants/{productVariantId}/inventory")
    public ResponseEntity<Object> updateInventory (@PathVariable Long productId, @PathVariable Long productVariantId, @RequestBody InventoryRequest inventoryRequest) {
        Long inventoryId = productVariantService.getInventoryId(productVariantId);

        InventoryResponse inventoryResponse = inventoryService.update(inventoryId, inventoryRequest);
        if (inventoryResponse == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Inventory updated successfully.",
                201,
                inventoryResponse,
                false
        );
    }

    @DeleteMapping("/{productId}/product-variants/{productVariantId}/inventory")
    public ResponseEntity<Object> deleteInventory (@PathVariable Long productId, @PathVariable Long productVariantId) {
        Long inventoryId = productVariantService.getInventoryId(productVariantId);
        Boolean result = inventoryService.delete(inventoryId);
        if (result) {
            return ResponseHandler.generateResponse(
                    "Something went wrong",
                    500,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Inventory deleted successfully.",
                500,
                null,
                false
        );
    }


}
