package org.fleximart.fleximart.v1.entity.blog;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @URL(message = "mediaUrl must be a valid URL")
    private String mediaUrl;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "mediaType must be less than or equal to 100 characters")
    private String mediaType;

    @Column(nullable = false)
    private Boolean isApproved;

    @ManyToOne
    @JoinColumn(name = "blog_post_id", nullable = false)
    private BlogPost blogPost;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;
}
