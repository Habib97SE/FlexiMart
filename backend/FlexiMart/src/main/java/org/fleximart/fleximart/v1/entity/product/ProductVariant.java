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
public class ProductVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many-to-one relationship with Product entity
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    // Many-to-one relationship with VariantOptionRepository entity (e.g., Size, Color)
    @ManyToMany
    @JoinTable(
            name = "product_variant_option",
            joinColumns = @JoinColumn(name = "product_variant_id"),
            inverseJoinColumns = @JoinColumn(name = "variant_option_id")
    )
    private List<VariantOption> variantOptions;

    @NotNull(message = "SKU is required")
    @Size(max = 50, message = "SKU must not exceed 50 characters")
    @Column(nullable = false, unique = true)
    private String sku;

    @Size(max = 100, message = "Barcode must not exceed 100 characters")
    @Column(nullable = true, unique = true)
    private String barCode;


    // List of product media related to this variant
    @OneToMany(mappedBy = "productVariant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductMedia> productMediaList;

    // Created at timestamp
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Updated at timestamp
    @UpdateTimestamp
    @Column(nullable = true)
    private LocalDateTime updatedAt;


}
