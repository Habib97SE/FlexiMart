package org.fleximart.fleximart.v1.entity.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;
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
public class CustomerGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = true, length = 200)
    @Size(max = 200, message = "Description should not exceed 200 characters")
    private String description;

    @Column(nullable = false)
    @PastOrPresent(message = "Date should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @PastOrPresent(message = "Date should be in the past or present")
    private LocalDateTime updatedAt;
}
