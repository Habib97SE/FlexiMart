package org.fleximart.fleximart.v1.entity.shipping;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.PastOrPresent;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingProvider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = true)
    private String description;

    @Column
    @URL(message = "Invalid website URL")
    private String website;

    @Column
    @URL(message = "Invalid image URL")
    private String logo;

    @Column(nullable = true)
    @Email(message = "Invalid email address")
    private String emailAddress;

    @Column(nullable = true)
    @URL(message = "Invalid Tracking URL")
    private String trackingUrl;

    @Column
    private String phoneNumber;

    @Column(nullable = false)
    @PastOrPresent(message = "Date must be in the past or present")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @PastOrPresent(message = "Date must be in the past or present")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "provider")
    private Set<ShippingMethod> shippingMethods;
}
