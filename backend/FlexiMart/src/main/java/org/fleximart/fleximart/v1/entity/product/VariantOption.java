package org.fleximart.fleximart.v1.entity.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
public class VariantOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Value is required")
    @Size(max = 100, message = "Value must not exceed 100 characters")
    @Column(nullable = false)
    private String value;

    @Size(max = 255, message = "Description must not exceed 255 characters")
    @Column(nullable = true)
    private String description;

    @ManyToOne
    @JoinColumn(name = "variant_group_id", nullable = false)
    private VariantGroup variantGroup;


    @ManyToMany(mappedBy = "variantOptions")
    private List<ProductVariant> productVariants;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(nullable = true)
    private LocalDateTime updatedAt;
}
