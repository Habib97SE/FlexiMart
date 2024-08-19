package org.fleximart.fleximart.v1.controller;

import org.fleximart.fleximart.v1.DTO.review.request.ReviewRequest;
import org.fleximart.fleximart.v1.DTO.review.response.ReviewResponse;
import org.fleximart.fleximart.v1.service.review.ReviewService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "Reviews retrieved successfully",
                200,
                reviewService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        ReviewResponse review = reviewService.findById(id);
        if (review == null) {
            return ResponseHandler.generateResponse(
                    "Review not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Review retrieved successfully",
                200,
                review,
                false
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Object> findByUserId(@PathVariable Long userId) {
        return ResponseHandler.generateResponse(
                "Reviews retrieved successfully",
                200,
                reviewService.findByUserId(userId),
                false
        );
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<Object> findByProductId(@PathVariable Long productId) {
        return ResponseHandler.generateResponse(
                "Reviews retrieved successfully",
                200,
                reviewService.findByProductId(productId),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody ReviewRequest reviewRequest) {
        System.err.println(reviewRequest.getRating());
        System.err.println(reviewRequest.getComment());
        System.err.println(reviewRequest.getTitle());
        System.err.println(reviewRequest.getUserId());
        System.err.println(reviewRequest.getProductId());
        return ResponseHandler.generateResponse(
                "Review created successfully",
                201,
                reviewService.create(reviewRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody ReviewRequest reviewRequest) {
        return ResponseHandler.generateResponse(
                "Review updated successfully",
                200,
                reviewService.update(id, reviewRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        reviewService.delete(id);
        return ResponseHandler.generateResponse(
                "Review deleted successfully",
                200,
                null,
                false
        );
    }


}
