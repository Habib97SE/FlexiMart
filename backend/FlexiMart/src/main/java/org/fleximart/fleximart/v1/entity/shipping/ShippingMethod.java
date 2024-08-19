package org.fleximart.fleximart.v1.entity.shipping;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String methodName; // e.g., "Home Delivery"

    @Column
    private String description; // Optional, e.g., details about the method

    @ManyToOne
    @JoinColumn(name = "provider_id", nullable = false)
    private ShippingProvider provider; // Reference to the shipping provider

    @Column(nullable = false)
    @PastOrPresent(message = "Date must be in the past or present")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @PastOrPresent(message = "Date must be in the past or present")
    private LocalDateTime updatedAt;
}
