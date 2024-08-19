package org.fleximart.fleximart.v1.DTO.review.request;

import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewRequest {
    private String title;
    private String comment;
    private Integer rating;
    private Long productId;
    private Long userId;
    private Boolean isApproved;
    private Boolean isDeleted;
    private Boolean isPublished;
    private Set<ReviewMediaRequest> reviewMedia;
}
