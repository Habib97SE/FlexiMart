package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.BrandRequest;
import org.fleximart.fleximart.v1.DTO.product.response.BrandResponse;
import org.fleximart.fleximart.v1.service.product.BrandService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/brands")
public class BrandController {

    private final BrandService brandService;

    @Autowired
    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll () {
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
    public ResponseEntity<Object> save (BrandRequest brandRequest) {
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

}
