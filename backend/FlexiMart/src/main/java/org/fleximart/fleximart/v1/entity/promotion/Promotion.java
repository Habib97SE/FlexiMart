package org.fleximart.fleximart.v1.entity.promotion;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = true, length = 200)
    @Size(max = 200, message = "Description should not exceed 200 characters")
    private String description;

    @Column(nullable = true, length = 200)
    @Size(max = 200, message = "PromoCode should not exceed 200 characters")
    @NotBlank(message = "PromoCode should not be blank")
    private String promoCode;

    @Column(nullable = false)
    @FutureOrPresent(message = "startDate should be in the future or present")
    private LocalDateTime startDate;

    @Column(nullable = false)
    @FutureOrPresent(message = "endDate should be in the future or present")
    private LocalDateTime endDate;

    @Column(nullable = false)
    private Boolean isActive;

    @OneToMany(mappedBy = "promotion", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Discount> discounts;


    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;

}
