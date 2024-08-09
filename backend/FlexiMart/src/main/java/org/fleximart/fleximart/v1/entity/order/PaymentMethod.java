package org.fleximart.fleximart.v1.entity.order;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    @NotNull(message = "Payment method name cannot be null")
    @Size(min = 2, max = 50, message = "Payment method name must be between 2 and 50 characters")
    private String name;

    @Column(nullable = true, length = 255)
    @Size(max = 255, message = "Description should not exceed 255 characters")
    private String description;

    @Column(nullable = true)
    private String provider; // e.g., "Visa", "MasterCard", "PayPal", "Stripe"

    @Column(nullable = true)
    private Boolean isActive;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = true)
    private LocalDateTime updatedAt;
}
