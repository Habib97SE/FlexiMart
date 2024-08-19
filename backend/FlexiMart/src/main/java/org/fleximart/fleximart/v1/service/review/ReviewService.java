package org.fleximart.fleximart.v1.service.review;

import org.fleximart.fleximart.v1.DTO.blog.response.MediaResponse;
import org.fleximart.fleximart.v1.DTO.review.request.ReviewMediaRequest;
import org.fleximart.fleximart.v1.DTO.review.request.ReviewRequest;
import org.fleximart.fleximart.v1.DTO.review.response.ReviewMediaResponse;
import org.fleximart.fleximart.v1.DTO.review.response.ReviewResponse;
import org.fleximart.fleximart.v1.entity.review.Review;
import org.fleximart.fleximart.v1.entity.review.ReviewMedia;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.fleximart.fleximart.v1.repository.product.ProductRepository;
import org.fleximart.fleximart.v1.repository.review.ReviewMediaRepository;
import org.fleximart.fleximart.v1.repository.review.ReviewRepository;
import org.fleximart.fleximart.v1.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ReviewMediaRepository reviewMediaRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public ReviewService(ReviewRepository reviewRepository,
                         ReviewMediaRepository reviewMediaRepository,
                         ProductRepository productRepository,
                         UserRepository userRepository) {
        this.reviewRepository = reviewRepository;
        this.reviewMediaRepository = reviewMediaRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    private ReviewMediaResponse mapToMediaResponse(ReviewMedia reviewMedia) {
        return ReviewMediaResponse.builder()
                .id(reviewMedia.getId())
                .mediaUrl(reviewMedia.getMediaUrl())
                .mediaType(reviewMedia.getMediaType())
                .build();
    }

    private ReviewResponse mapToReviewResponse(Review review) {
        if (review.getReviewMedia() == null) {
            review.setReviewMedia(new HashSet<>());
        }
        return ReviewResponse.builder()
                .id(review.getId())
                .title(review.getTitle())
                .comment(review.getComment())
                .rating(review.getRating())
                .productId(review.getProduct().getId())
                .userId(review.getUser().getId())
                .isApproved(review.getIsApproved())
                .isDeleted(review.getIsDeleted())
                .isPublished(review.getIsPublished())
                .reviewMedia(review.getReviewMedia().stream().map(this::mapToMediaResponse).collect(Collectors.toSet()))
                .createdAt(review.getCreatedAt().toString())
                .updatedAt(review.getUpdatedAt().toString())
                .build();
    }

    private ReviewMedia mapToReviewMediaEntity(Long reviewId, ReviewMediaRequest reviewMediaRequest) {
        return ReviewMedia.builder()
                .mediaUrl(reviewMediaRequest.getMediaUrl())
                .mediaType(reviewMediaRequest.getMediaType())
                .review(reviewRepository.findById(reviewId).orElseThrow(() -> new ResourceNotFoundException("Review not found")))
                .build();
    }

    private Review mapToReviewEntity(ReviewRequest reviewRequest) {

        return Review.builder()
                .title(reviewRequest.getTitle())
                .comment(reviewRequest.getComment())
                .rating(reviewRequest.getRating())
                .product(productRepository.findById(reviewRequest.getProductId()).orElseThrow(() -> new ResourceNotFoundException("Product not found")))
                .user(userRepository.findById(reviewRequest.getUserId()).orElseThrow(() -> new ResourceNotFoundException("User not found")))
                .isApproved(reviewRequest.getIsApproved())
                .isDeleted(reviewRequest.getIsDeleted())
                .isPublished(reviewRequest.getIsPublished())
                .build();
    }

    public List<ReviewResponse> findAll() {
        return reviewRepository.findAll().stream().map(this::mapToReviewResponse).collect(Collectors.toList());
    }

    public List<ReviewResponse> findByProductId(Long productId) {
        return reviewRepository.findByProduct_Id(productId).stream().map(this::mapToReviewResponse).collect(Collectors.toList());
    }

    public List<ReviewResponse> findByUserId(Long userId) {
        return reviewRepository.findByUser_Id(userId).stream().map(this::mapToReviewResponse).collect(Collectors.toList());
    }

    public ReviewResponse findById(Long id) {
        return mapToReviewResponse(reviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Review not found")));
    }

    public ReviewResponse create(ReviewRequest reviewRequest) {
        Review review = reviewRepository.save(mapToReviewEntity(reviewRequest));
        List<ReviewMedia> reviewMedia = reviewRequest.getReviewMedia().stream().map(reviewMediaRequest -> mapToReviewMediaEntity(review.getId(), reviewMediaRequest)).collect(Collectors.toList());
        reviewMediaRepository.saveAll(reviewMedia);
        return mapToReviewResponse(reviewRepository.findById(review.getId()).orElseThrow(() -> new ResourceNotFoundException("Review not found")));
    }

    public ReviewResponse update(Long id, ReviewRequest reviewRequest) {
        Review review = reviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Review not found"));
        review.setTitle(reviewRequest.getTitle());
        review.setComment(reviewRequest.getComment());
        review.setRating(reviewRequest.getRating());
        review.setProduct(productRepository.findById(reviewRequest.getProductId()).orElseThrow(() -> new ResourceNotFoundException("Product not found")));
        review.setUser(userRepository.findById(reviewRequest.getUserId()).orElseThrow(() -> new ResourceNotFoundException("User not found")));
        review.setIsApproved(reviewRequest.getIsApproved());
        review.setIsDeleted(reviewRequest.getIsDeleted());
        review.setIsPublished(reviewRequest.getIsPublished());
        review.getReviewMedia().forEach(reviewMedia -> reviewMediaRepository.delete(reviewMedia));
        reviewRequest.getReviewMedia().forEach(reviewMediaRequest -> reviewMediaRepository.save(mapToReviewMediaEntity(review.getId(), reviewMediaRequest)));
        return mapToReviewResponse(reviewRepository.save(review));
    }

    public void delete(Long id) {
        Review review = reviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Review not found"));
        reviewRepository.delete(review);
    }

}
