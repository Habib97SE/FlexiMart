package org.fleximart.fleximart.v1.entity.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"addresses"})
@Builder
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class AddressType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;

    @Column(nullable = false)
    @Size(min = 2, max = 255, message = "Description must be between 2 and 255 characters")
    private String description;

    @Column(nullable = false)
    private String icon;

    @OneToMany(mappedBy = "addressType")
    @JsonManagedReference
    private List<Address> addresses;

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt should be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt should be in the past or present")
    private LocalDateTime updatedAt;


}
