package org.fleximart.fleximart.v1.entity.review;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewMedia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String mediaUrl;

    @Column(nullable = false)
    private String mediaType;

    @ManyToOne
    @JoinColumn(name = "review_id", nullable = false)
    private Review review;

}
