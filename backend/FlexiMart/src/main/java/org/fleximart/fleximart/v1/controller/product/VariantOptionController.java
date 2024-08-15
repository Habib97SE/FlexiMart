package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.VariantOptionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.fleximart.fleximart.v1.service.product.VariantOptionService;

@RestController
@RequestMapping("/api/v1/variant-option")
public class VariantOptionController {

    private final VariantOptionService variantOptionService;

    @Autowired
    public VariantOptionController(VariantOptionService variantOptionService) {
        this.variantOptionService = variantOptionService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return variantOptionService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return variantOptionService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody VariantOptionRequest variantOptionRequest) {
        return variantOptionService.save(variantOptionRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody VariantOptionRequest variantOptionRequest) {
        return variantOptionService.update(id, variantOptionRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return variantOptionService.delete(id);
    }


}
