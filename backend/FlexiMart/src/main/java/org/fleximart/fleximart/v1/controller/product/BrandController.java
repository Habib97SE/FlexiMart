package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.BrandRequest;
import org.fleximart.fleximart.v1.DTO.product.response.BrandResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.service.product.BrandService;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/brands")
public class BrandController {

    private final BrandService brandService;

    private final ProductService productService;

    @Autowired
    public BrandController(BrandService brandService,
                           ProductService productService) {
        this.brandService = brandService;
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll () throws IOException {
        List<BrandResponse> brandResponses = brandService.findAll();
        return ResponseHandler.generateResponse(
                "All brands fetched successfully",
                200,
                brandResponses,
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById (Long id) {
        BrandResponse brandResponse = brandService.findById(id);
        return ResponseHandler.generateResponse(
                "Brand fetched successfully",
                200,
                brandResponse,
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save (@RequestBody BrandRequest brandRequest) throws Exception {
        System.err.println(brandRequest.toString());
        BrandResponse savedBrandResponse = brandService.save(brandRequest);
        return ResponseHandler.generateResponse(
                "Brand saved successfully",
                201,
                savedBrandResponse,
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update (Long id, BrandRequest brandRequest) {
        BrandResponse updatedBrandResponse = brandService.update(id, brandRequest);
        return ResponseHandler.generateResponse(
                "Brand updated successfully",
                200,
                updatedBrandResponse,
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete (Long id) {
        brandService.delete(id);
        return ResponseHandler.generateResponse(
                "Brand deleted successfully",
                200,
                null,
                false
        );
    }

    @GetMapping("/{id}/products")
    public ResponseEntity<Object> getProductsByBrandId(@PathVariable Long id) {
        List<ProductResponse> productResponseList = productService.findByBrand(id);

        if (productResponseList == null) {
            return ResponseHandler.generateResponse(
                    "Something went wrong while fetching products for the brand",
                    500,
                    null,
                    true
            );
        }

        if (productResponseList.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "No products found for the brand",
                    404,
                    null,
                    true
            );
        }

        return ResponseHandler.generateResponse(
                "Products fetched successfully",
                200,
                productResponseList,
                false
        );
    }

        @GetMapping("/autocomplete/{name}")
        public ResponseEntity<Object> getAutoCompleteBrands(@PathVariable String name) {
        System.err.println("Name: " + name);
            List<BrandResponse> brandResponses = brandService.getAutoCompleteBrands(name);
            return ResponseHandler.generateResponse(
                    "Brands fetched successfully",
                    200,
                    brandResponses,
                    false
            );
        }

}
