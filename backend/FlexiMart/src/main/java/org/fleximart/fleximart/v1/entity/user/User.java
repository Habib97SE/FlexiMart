package org.fleximart.fleximart.v1.entity.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "people_id", nullable = false)
    private People people;

    @Column(nullable = false)
    @Min(value = 0, message = "WishListId should be positive")
    private Long wishListId;

    @Column(nullable = true)
    @PastOrPresent(message = "lastLoginAt should be in the past or present")
    private LocalDateTime lastLoginAt;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean isDeleted;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "customer_group_id", nullable = false)
    private CustomerGroup customerGroup;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;

}
