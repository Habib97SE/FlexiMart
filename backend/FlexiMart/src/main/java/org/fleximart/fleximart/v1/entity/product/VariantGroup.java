package org.fleximart.fleximart.v1.entity.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VariantGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name is required")
    @Size(max = 100, message = "Name must not exceed 100 characters")
    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String description;

    @OneToMany(mappedBy = "variantGroup", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<VariantOption> variantOptions;

    @CreationTimestamp
    @PastOrPresent(message = "Created date must be in the past or present")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @PastOrPresent(message = "Updated date must be in the past or present")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = true)
    private LocalDateTime updatedAt;
}
