package org.fleximart.fleximart.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters")
    private String name;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    private Boolean active;

    @Column(nullable = true)
    @URL(message = "Invalid URL")
    private String website;

    @Column(nullable = true)
    private String logo;

    @Column(nullable = true)
    @Email(message = "Invalid email address")
    private String emailAddress;

    @Column(nullable = true)
    private String phoneNumber;

    @CreationTimestamp
    @PastOrPresent(message = "Date must be in the past or present")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private LocalDateTime createdAt;

    @PastOrPresent(message = "Date must be in the past or present")
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = true)
    private LocalDateTime updatedAt;
}
