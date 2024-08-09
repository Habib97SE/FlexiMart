package org.fleximart.fleximart.v1.entity.cart;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    private ShoppingCart cart;


    @ManyToOne
    @JoinColumn(name = "product_variant_id", nullable = false)
    private ProductVariant productVariant;

    @Column(nullable = false)
    @Min(value = 1, message = "quantity must be greater than or equal to 1")
    private Integer quantity;

    @Column(nullable = false)
    @Min(value = 0, message = "price must be greater than or equal to 0")
    private BigDecimal price;

    @Column(nullable = false)
    @Min(value = 0, message = "totalPrice must be greater than or equal to 0")
    private BigDecimal totalPrice;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;

}
