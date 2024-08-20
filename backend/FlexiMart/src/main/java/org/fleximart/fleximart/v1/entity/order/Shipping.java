package org.fleximart.fleximart.v1.entity.order;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jdk.jfr.Timestamp;
import lombok.*;
import org.fleximart.fleximart.v1.entity.shipping.ShippingMethod;
import org.fleximart.fleximart.v1.entity.user.Address;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Shipping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "shipping_method_id")
    private ShippingMethod shippingMethod;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @Column
    private BigDecimal totalCost;

    @Column
    private BigDecimal discount;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column
    private LocalDateTime deliveredAt;

    @Column(nullable = false)
    @PastOrPresent(message = "Date cannot be in future.")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @Column
    @PastOrPresent(message =  "Date cannot be in future.")
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;

}
