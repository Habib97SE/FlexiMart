package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.VariantGroupRequest;
import org.fleximart.fleximart.v1.DTO.product.response.VariantGroupResponse;
import org.fleximart.fleximart.v1.entity.product.VariantGroup;
import org.fleximart.fleximart.v1.service.product.VariantGroupService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/variant-group")
public class VariantGroupController {

    private final VariantGroupService variantGroupService;

    @Autowired
    public VariantGroupController(VariantGroupService variantGroupService) {
        this.variantGroupService = variantGroupService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        List<VariantGroupResponse> variantGroupResponses = variantGroupService.findAll();
        return ResponseHandler.generateResponse(
                "Variant groups retrieved successfully",
                200,
                variantGroupResponses,
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return variantGroupService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody VariantGroupRequest variantGroupRequest) {
        return variantGroupService.save(variantGroupRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody VariantGroupRequest variantGroupRequest) {
        return variantGroupService.update(id, variantGroupRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return variantGroupService.delete(id);
    }




}
