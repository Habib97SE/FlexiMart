package org.fleximart.fleximart.v1.DTO.blog.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostRequest {
    private String title;
    private String content;
    private String slug;
    private String mainImage;
    private List<Long> categories;
    private List<Long> tags;
}
