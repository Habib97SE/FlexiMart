package org.fleximart.fleximart.v1.entity.product;

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
public class Collection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(min = 2, max = 100, message = "Collection name must be between 2 and 100 characters")
    private String name;

    @Column(nullable = true)
    @Size(max = 1000, message = "Description should not exceed 1000 characters")
    private String description;

    @Column(nullable = true)
    @URL(message = "mainImageUrl should be a valid URL")
    private String mainImageUrl;

    @Column(nullable = true)
    private String seoTitle;

    @Column(nullable = true)
    private String seoDescription;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;


}
