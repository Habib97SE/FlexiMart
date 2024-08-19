package org.fleximart.fleximart.v1.DTO.review.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewMediaResponse {
    private Long id;
    private String mediaUrl;
    private String mediaType;
}
