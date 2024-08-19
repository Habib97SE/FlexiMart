package org.fleximart.fleximart.v1.DTO.review.response;

import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewResponse {
    private Long id;
    private String title;
    private String comment;
    private Integer rating;
    private Long productId;
    private Long userId;
    private Boolean isApproved;
    private Boolean isDeleted;
    private Boolean isPublished;
    private Set<ReviewMediaResponse> reviewMedia;
    private String createdAt;
    private String updatedAt;
}
