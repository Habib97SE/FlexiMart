package org.fleximart.fleximart.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fleximart.fleximart.v1.entity.product.CoreProduct;

import org.fleximart.fleximart.v1.entity.user.User;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "title must be less than or equal to 100 characters")
    private String title;

    @Column(nullable = true, length = 1000)
    @Size(max = 1000, message = "description must be less than or equal to 1000 characters")
    private String description;

    @Column(nullable = false)
    @Min(value = 1, message = "rating must be greater than or equal to 1")
    @Max(value = 5, message = "rating must be less than or equal to 5")
    private Integer rating;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private CoreProduct product;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReviewMedia> reviewMedia = new ArrayList<>();


    @Column(nullable = false)
    private Boolean isApproved;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;

}
