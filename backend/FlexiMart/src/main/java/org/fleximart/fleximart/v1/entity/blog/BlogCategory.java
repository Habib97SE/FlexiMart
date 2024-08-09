package org.fleximart.fleximart.v1.entity.blog;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * <h1>Collection</h1>
 * Collection entity class contains the attributes of a collection for a blog post.
 * It contains the following attributes:
 * <ol>
 *     <li><strong>id</strong>: The id of the row.</li>
 *     <li><strong>title</strong>: The title of the collection.</li>
 *     <li><strong>description</strong>: The description of the collection.</li>
 *     <li><strong>slug</strong>: The slug of the collection.</li>
 *     <li><strong>status</strong>: The status of the collection.</li>
 *     <li><strong>metaTitle</strong>: The meta title of the collection.</li>
 *     <li><strong>metaDescription</strong>: The meta description of the collection.</li>
 *     <li><strong>metaKeywords</strong>: The meta keywords of the collection.</li>
 *     <li><strong>mainImage</strong>: The main image of the collection.</li>
 *     <li><strong>blogPosts</strong>: The blog posts associated with the collection.</li>
 *     <li><strong>createdAt</strong>: The date and time when the collection was created.</li>
 *     <li><strong>updatedAt</strong>: The date and time when the collection was last updated.</li>
 * </ol>
 *
 * @version 1.0
 * @since 2024-08-09
 * @see BlogPost
 * @see
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "title must be less than or equal to 100 characters")
    private String title;

    @Column(nullable = true, length = 1000)
    @Size(max = 1000, message = "description must be less than or equal to 1000 characters")
    private String description;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "slug must be less than or equal to 100 characters")
    private String slug;

    @Column(nullable = false)
    @Size(max = 100, message = "status must be less than or equal to 100 characters")
    private String status;

    @Column(nullable = true, length = 100)
    @Size(max = 100, message = "metaTitle must be less than or equal to 100 characters")
    private String metaTitle;

    @Column(nullable = true, length = 400)
    @Size(max = 400, message = "metaDescription must be less than or equal to 400 characters")
    private String metaDescription;

    @Column(nullable = true, length = 100)
    @Size(max = 100, message = "metaKeywords must be less than or equal to 100 characters")
    private String metaKeywords;

    @Column(nullable = false)
    @URL(message = "mainImage must be a valid URL")
    private String mainImage;

    @ManyToMany(mappedBy = "categories")
    private Set<BlogPost> blogPosts = new HashSet<>();

    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;
}
