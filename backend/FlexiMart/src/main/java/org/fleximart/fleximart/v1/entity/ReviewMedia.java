package org.fleximart.fleximart.v1.entity;

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
public class ReviewMedia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @URL(message = "mediaUrl must be a valid URL")
    private String mediaUrl;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "mediaType must be less than or equal to 100 characters")
    private String mediaType;

    @ManyToOne
    @JoinColumn(name = "review_id", nullable = false)
    private Review review;

    @Column(nullable = false)
    private Boolean isApproved;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;


}
