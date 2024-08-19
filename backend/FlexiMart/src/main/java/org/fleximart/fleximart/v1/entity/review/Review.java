package org.fleximart.fleximart.v1.entity.review;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.user.User;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String comment;

    // Rating out of 5
    @Column(nullable = false)
    private Integer rating;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL)
    private Set<ReviewMedia> reviewMedia;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private Boolean isApproved;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private Boolean isDeleted;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private Boolean isPublished;

    @Column(nullable = false)
    @CreationTimestamp
    @PastOrPresent(message = "Review date cannot be in the future")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @UpdateTimestamp
    @PastOrPresent(message = "Review date cannot be in the future")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;
}
