package org.fleximart.fleximart.v1.entity;

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
public class Setting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "key must be less than or equal to 100 characters")
    @Min(value = 1, message = "key must be greater than or equal to 1")
    private String key;

    @Column(nullable = false, columnDefinition = "TEXT")
    @Min(value = 1, message = "value must be greater than or equal to 1")
    private String value;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "description must be less than or equal to 100 characters")
    private String description;

    @Column(nullable = true)
    private String type;

    @Column(nullable = false)
    private Boolean status;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;

}
