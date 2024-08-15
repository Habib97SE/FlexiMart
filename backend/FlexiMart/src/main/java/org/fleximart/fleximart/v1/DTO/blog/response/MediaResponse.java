package org.fleximart.fleximart.v1.DTO.blog.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MediaResponse {
    private Long id;
    private String mediaUrl;
    private String mediaAlt;
    private String mediaType;
}
