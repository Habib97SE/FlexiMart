package org.fleximart.fleximart.v1.DTO.review.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewMediaRequest {
    private String mediaUrl;
    private String mediaType;
}
