package org.fleximart.fleximart.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ShippingMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    @Size(min = 2, max = 50, message = "Shipping method name must be between 2 and 50 characters")
    private String name;

    @Column(nullable = true, length = 255)
    @Size(max = 255, message = "Description should not exceed 255 characters")
    private String description;

    @Column(nullable = false)
    @Size(min = 2, max = 50, message = "Shipping provider must be between 2 and 50 characters")
    private String provider;

    @Column(nullable = true)
    @URL(message = "logoUrl should be a valid URL")
    private String logoUrl;

    @Column(nullable = true)
    @URL(message = "website should be a valid URL")
    private String website;

    @Column(nullable = true)
    @URL(message = "trackingUrl should be a valid URL")
    private String trackingUrl;

    @Column(nullable = true)
    @Email(message = "supportEmail should be a valid email")
    private String supportEmail;

    @Column(nullable = true)
    @Size(min = 10, max = 15, message = "supportPhone must be between 10 and 15 characters")
    private String supportPhone;

    @Column(nullable = true)
    private Boolean isActive;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;

}
