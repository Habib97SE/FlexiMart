package org.fleximart.fleximart.v1.DTO.blog.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String slug;
    private String mainImage;
    private List<TagResponse> tags;
    private String createdAt;
    private String updatedAt;
}
