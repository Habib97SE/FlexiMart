package org.fleximart.fleximart.v1.DTO.blog.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryRequest {
    private String name;
    private String description;
    private String slug;
    private String mainImageUrl;
    private String mainImageAlt;
}
