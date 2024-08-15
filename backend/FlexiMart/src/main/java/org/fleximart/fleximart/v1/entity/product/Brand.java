package org.fleximart.fleximart.v1.entity.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    @Size(min = 2, max = 100, message = "Brand name must be between 2 and 100 characters")
    private String name;

    @Column(nullable = true)
    @URL(message = "website should be a valid URL")
    private String website;

    @Column(nullable = true)
    @URL(message = "logo should be a valid URL")
    private String logo;

    @Column(nullable = true)
    @Size(max = 1000, message = "Description should not exceed 1000 characters")
    private String description;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;


}
