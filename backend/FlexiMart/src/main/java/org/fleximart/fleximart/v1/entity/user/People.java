package org.fleximart.fleximart.v1.entity.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;


/**
 * People entity
 * This class is used to create a People entity
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class People {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    private String firstName;

    @Column(nullable = false)
    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
    private String lastName;

    @Column(nullable = true)
    @Size(min = 2, max = 50, message = "Suffix must be between 2 and 50 characters")
    private String suffix;

    @Column(nullable = true)
    @Size(min = 2, max = 50, message = "Middle name must be between 2 and 50 characters")
    private String middleName;

    @Column(nullable = false, unique = true)
    @Email(message = "Email should be valid")
    private String email;

    @Column(nullable = false)
    @Size(min = 8, max = 50, message = "Password must be between 8 and 50 characters")
    private String phoneNumber;

    @Column(nullable = false)
    private String hashedPassword;

    @Column(nullable = false)
    private String profilePicture;

    @Column(nullable = true)
    @Past(message = "Date of birth should be in the past")
    private LocalDate dateOfBirth;

    @OneToMany(mappedBy = "people", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addresses;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;

    // create field isDeleted and give default value false
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean isDeleted;


}
