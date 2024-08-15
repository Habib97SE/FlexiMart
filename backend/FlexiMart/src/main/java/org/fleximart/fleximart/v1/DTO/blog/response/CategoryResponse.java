package org.fleximart.fleximart.v1.DTO.blog.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryResponse {
    private Long id;
    private String name;
    private String description;
    private String mainImageUrl;
    private String mainImageAlt;
    private String slug;
    private List<PostResponse> posts;
}
