package org.fleximart.fleximart.v1.entity.product;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
public class ProductMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "variant_id", nullable = false)
    @JsonBackReference
    private ProductVariant productVariant;

    @NotNull(message = "Media URL is required")
    @Size(max = 255, message = "Media URL must not exceed 255 characters")
    @Column(nullable = false)
    private String mediaUrl;

    @NotNull(message = "Media type is required")
    @Size(max = 50, message = "Media type must not exceed 50 characters")
    @Column(nullable = false)
    private String mediaType; // e.g., "thumbnail", "gallery", "main", etc.

    @Size(max = 255, message = "Alt text must not exceed 255 characters")
    @Column(nullable = true)
    private String altText; // Optional alt text for the image, useful for accessibility

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    @PastOrPresent(message = "Created at must be a past or present date/time")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = true)
    @PastOrPresent(message = "Updated at must be a past or present date/time")
    private LocalDateTime updatedAt;
}
