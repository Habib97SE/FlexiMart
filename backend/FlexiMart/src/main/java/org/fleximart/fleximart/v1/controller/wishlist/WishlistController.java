package org.fleximart.fleximart.v1.controller.wishlist;

import org.fleximart.fleximart.v1.DTO.wishlist.request.WishlistItemRequest;
import org.fleximart.fleximart.v1.DTO.wishlist.response.WishlistResponse;
import org.fleximart.fleximart.v1.service.wishlist.WishlistItemService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.fleximart.fleximart.v1.service.wishlist.WishlistService;
import org.fleximart.fleximart.v1.DTO.wishlist.request.WishlistRequest;


@RestController
@RequestMapping("/api/v1/wishlists/")
public class WishlistController {
    private final WishlistService wishlistService;
    private final WishlistItemService wishlistItemService;

    @Autowired
    public WishlistController(WishlistService wishlistService,
                              WishlistItemService wishlistItemService) {
        this.wishlistService = wishlistService;
        this.wishlistItemService = wishlistItemService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "Wishlist retrieved successfully",
                200,
                wishlistService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Wishlist retrieved successfully",
                200,
                wishlistService.findById(id),
                false
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Object> findByUserId(@PathVariable Long userId) {
        WishlistResponse wishlistResponse = wishlistService.findByUserId(userId);
        if (wishlistResponse == null) {
            return ResponseHandler.generateResponse(
                    "Wishlist not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Wishlist retrieved successfully",
                200,
                wishlistResponse,
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody WishlistRequest wishlistRequest) {
        return ResponseHandler.generateResponse(
                "Wishlist saved successfully",
                201,
                wishlistService.save(wishlistRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody WishlistRequest wishlistRequest) {
        return ResponseHandler.generateResponse(
                "Wishlist updated successfully",
                200,
                wishlistService.update(id, wishlistRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        wishlistService.delete(id);
        return ResponseHandler.generateResponse(
                "Wishlist deleted successfully",
                200,
                null,
                true
        );
    }

    @GetMapping("{wishlistId}/items")
    public ResponseEntity<Object> findAllItems(@PathVariable Long wishlistId) {
        return ResponseHandler.generateResponse(
                "Wishlist items retrieved successfully",
                200,
                wishlistItemService.findAll(wishlistId),
                false
        );
    }

    @GetMapping("{wishlistId}/items/{id}")
    public ResponseEntity<Object> findItemById(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Wishlist item retrieved successfully",
                200,
                wishlistItemService.findById(id),
                false
        );
    }

    @PostMapping("{wishlistId}/items")
    public ResponseEntity<Object> saveItem(@PathVariable Long wishlistId, @RequestBody WishlistItemRequest wishlistItemRequest) {
        return ResponseHandler.generateResponse(
                "Wishlist item saved successfully",
                201,
                wishlistItemService.save(wishlistItemRequest),
                false
        );
    }

    @PutMapping("{wishlistId}/items/{id}")
    public ResponseEntity<Object> updateItem(@PathVariable Long id, @RequestBody WishlistItemRequest wishlistItemRequest) {
        return ResponseHandler.generateResponse(
                "Wishlist item updated successfully",
                200,
                wishlistItemService.update(id, wishlistItemRequest),
                false
        );
    }

    @DeleteMapping("{wishlistId}/items/{id}")
    public ResponseEntity<Object> deleteItem(@PathVariable Long id) {
        wishlistItemService.delete(id);
        return ResponseHandler.generateResponse(
                "Wishlist item deleted successfully",
                200,
                null,
                true
        );
    }

}
