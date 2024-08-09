package org.fleximart.fleximart.v1.entity.product;


import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = true)
    private BigDecimal discountPrice;

    @Column(nullable = false)
    private BigDecimal costPrice;

    @Column(nullable = false)
    private String currency;

    @Column(nullable = false)
    private Integer stockQuantity;

    @Column(nullable = false)
    private Integer minOrderQuantity;

    @Column(nullable = true)
    private Integer maxOrderQuantity;

    @Column(nullable = false)
    private String stockStatus;

    @Column(nullable = false)
    private Boolean inventoryTracking;

    @Column(nullable = true)
    private Integer reOrderLevel;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private CoreProduct product;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;


}
