package org.fleximart.fleximart.v1.entity.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductVariant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private CoreProduct product;

    @ManyToOne
    @JoinColumn(name = "variant_option_id", nullable = false)
    private VariantOption variantOption;

    @Column(nullable = false)
    private String sku;

    @Column(nullable = true)
    private String barCode;

    @Column(nullable = true)
    @URL(message = "imageUrl should be a valid URL")
    private String imageUrl;

    @Column(nullable = true)
    @URL(message = "thumbnailImageUrl should be a valid URL")
    private String thumbnailImageUrl;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;


}
