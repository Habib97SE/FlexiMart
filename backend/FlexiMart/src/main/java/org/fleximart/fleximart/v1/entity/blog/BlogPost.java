package org.fleximart.fleximart.v1.entity.blog;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fleximart.fleximart.v1.entity.user.User;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * <h1>BlogPost</h1>
 * The BlogPost entity class is mapped to the blog_post table in the database.
 * It contains the following fields:
 * <ol>
 *     <li><strong>id</strong>: a Long value that is the primary key for the blog_post table.</li>
 *     <li><strong>title</strong>: a String value that represents the title of the blog post.</li>
 *     <li><strong>content</strong>: a String value that represents the content of the blog post.</li>
 *     <li><strong>admin</strong>: an AdminRepository object that represents the user who created the blog post.</li>
 *     <li><strong>media</strong>: a List of Media objects that represent the media associated with the blog post.</li>
 *     <li><strong>isPublished</strong>: a Boolean value that indicates whether the blog post is published or not.</li>
 *     <li><strong>slug</strong>: a String value that represents the slug of the blog post.</li>
 *     <li><strong>seoTitle</strong>: a String value that represents the SEO title of the blog post.</li>
 *     <li><strong>seoDescription</strong>: a String value that represents the SEO description of the blog post.</li>
 *     <li><strong>metaKeywords</strong>: a String value that represents the meta keywords of the blog post.</li>
 *     <li><strong>metaDescription</strong>: a String value that represents the meta description of the blog post.</li>
 *     <li><strong>categories</strong>: a Set of Collection objects that represent the categories associated with the blog post.</li>
 *     <li><strong>createdAt</strong>: a LocalDateTime value that represents the date and time the blog post was created.</li>
 *     <li><strong>updatedAt</strong>: a LocalDateTime value that represents the date and time the blog post was last updated.</li>
 * </ol>
 *
 * @version 1.0
 * @since 2024-08-09
 * @see Media
 * @see BlogCategory
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "title must be less than or equal to 100 characters")
    private String title;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String content;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "blogPost", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Media> media = new ArrayList<>();

    @Column(nullable = false, columnDefinition = "boolean default false")
    private Boolean isPublished;

    @Column(nullable = false)
    private String slug;

    @Column(nullable = true, length = 100)
    @Size(max = 100, message = "seoTitle must be less than or equal to 100 characters")
    private String seoTitle;

    @Column(nullable = true, length = 400)
    @Size(max = 400, message = "seoDescription must be less than or equal to 400 characters")
    private String seoDescription;

    @Column(nullable = true, length = 100)
    @Size(max = 100, message = "metaKeywords must be less than or equal to 100 characters")
    private String metaKeywords;

    @Column(nullable = true, length = 400)
    @Size(max = 400, message = "metaDescription must be less than or equal to 400 characters")
    private String metaDescription;

    @ManyToMany
    @JoinTable(
            name = "blog_post_category",
            joinColumns = @JoinColumn(name = "blog_post_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<BlogCategory> categories = new HashSet<>();


    @Column(nullable = false)
    @PastOrPresent(message = "createdAt must be in the past or present")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @PastOrPresent(message = "updatedAt must be in the past or present")
    private LocalDateTime updatedAt;

}
