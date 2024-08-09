package org.fleximart.fleximart.v1.entity.order;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fleximart.fleximart.v1.entity.ShippingMethod;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Shipping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(nullable = false)
    private String shippingAddress;

    @ManyToOne
    @JoinColumn(name = "shipping_method_id", nullable = false)
    private ShippingMethod shippingMethod; // e.g., "Standard", "Express"

    @Column(nullable = false)
    private String trackingNumber;

    @Column(nullable = false)
    private String shippingStatus; // e.g., "Pending", "Shipped", "Delivered"

    @Column(nullable = false)
    @PastOrPresent(message = "Shipping date must be in the past or present")
    private LocalDateTime shippingDate;

    @Column(nullable = true)
    @PastOrPresent(message = "Delivery date must be in the past or present")
    private LocalDateTime deliveryDate;


}
