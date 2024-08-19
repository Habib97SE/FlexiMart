package org.fleximart.fleximart.v1.controller.product;

import org.fleximart.fleximart.v1.DTO.product.request.InventoryRequest;
import org.fleximart.fleximart.v1.DTO.product.response.InventoryResponse;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.fleximart.fleximart.v1.service.product.InventoryService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/inventories")
public class InventoryController {

    private final InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        List<InventoryResponse> inventories = inventoryService.findAll();
        if (inventories == null) {
            return ResponseHandler.generateResponse(
                    "No inventories found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "All inventories fetched successfully",
                200,
                inventories,
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        InventoryResponse inventory = inventoryService.findById(id);
        if (inventory == null) {
            return ResponseHandler.generateResponse(
                    "Inventory not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Inventory fetched successfully",
                200,
                inventory,
                false
        );
    }



    @PostMapping
    public ResponseEntity<Object> create(@RequestBody InventoryRequest inventoryRequest) {
        return ResponseHandler.generateResponse(
                "Inventory created successfully",
                201,
                inventoryService.save(inventoryRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody InventoryRequest inventoryRequest) {
        InventoryResponse inventory = inventoryService.update(id, inventoryRequest);
        if (inventory == null) {
            return ResponseHandler.generateResponse(
                    "Inventory not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Inventory updated successfully",
                200,
                inventory,
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Inventory deleted successfully",
                200,
                inventoryService.delete(id),
                false
        );
    }
}
