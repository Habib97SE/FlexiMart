package org.fleximart.fleximart.v1.DTO.blog.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MediaRequest {
    private String mediaUrl;
    private String mediaAlt;
    private String mediaType;

}
