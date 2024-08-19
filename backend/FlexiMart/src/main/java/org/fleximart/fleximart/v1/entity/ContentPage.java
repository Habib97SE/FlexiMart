package org.fleximart.fleximart.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContentPage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(min = 1, max = 255, message = "Title must be between 1 and 255 characters")
    private String title;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = true)
    @URL(message = "Invalid image URL")
    private String mainImage;

    @Column(nullable = true)
    private String slug;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean isPublished;

    @Column(nullable = false)
    @CreationTimestamp
    @PastOrPresent(message = "Created at must be in the past or present")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @UpdateTimestamp
    @PastOrPresent(message = "Updated at must be in the past or present")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;
}
