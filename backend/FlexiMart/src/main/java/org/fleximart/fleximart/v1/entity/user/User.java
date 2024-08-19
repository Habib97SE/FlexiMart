package org.fleximart.fleximart.v1.entity.user;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.fleximart.fleximart.v1.entity.blog.Post;
import org.fleximart.fleximart.v1.entity.review.Review;
import org.fleximart.fleximart.v1.entity.wishlist.Wishlist;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"addresses", "blogPosts"})
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(min = 2, max = 50, message = "firstName should be between 2 and 50 characters")
    private String firstName;

    @Column(nullable = false)
    @Size(min = 2, max = 50, message = "firstName should be between 2 and 50 characters")
    private String lastName;

    @Column(nullable = true)
    private String suffix;

    @Column(nullable = true)
    private String middleName;

    @Column(nullable = false, unique = true)
    @Email(message = "email should be valid")
    private String email;

    @Column(nullable = false)
    private String hashedPassword;

    @Column(nullable = true)
    private String phoneNumber;

    @Column(nullable = true)
    private LocalDate dateOfBirth;

    @Column(nullable = false, columnDefinition = "VARCHAR(49) DEFAULT 'USER'")
    private String role;


    @Column(nullable = true)
    @PastOrPresent(message = "lastLoginAt should be in the past or present")
    private LocalDateTime lastLoginAt;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean isDeleted;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Address> addresses;

    @OneToMany(mappedBy = "author")
    private Set<Post> posts = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Wishlist> wishlists;

    @OneToMany(mappedBy = "user")
    private Set<Review> reviews;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;


    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;

}
