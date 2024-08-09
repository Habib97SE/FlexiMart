package org.fleximart.fleximart.v1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * <h1>ContentPage</h1>
 *
 * <p>This class represents the ContentPage entity. A ContentPage is a static page e.g. About, Contact and other static pages that would be fit as a static page.
 * It contains all the attributes and methods to create a ContentPage entity.</p>
 *
 * <p>It contains the following attributes:</p>
 * <ol>
 *     <li><strong>id</strong>: ID of the provided row</li>
 *     <li><strong>title</strong>: Title of the ContentPage</li>
 *     <li><strong>content</strong>: Content of the ContentPage</li>
 *     <li><strong>slug</strong>: Slug of the ContentPage</li>
 *     <li><strong>status</strong>: Status of the ContentPage</li>
 *     <li><strong>metaTitle</strong>: Meta Title of the ContentPage</li>
 *     <li><strong>metaDescription</strong>: Meta Description of the ContentPage</li>
 *     <li><strong>metaKeywords</strong>: Meta Keywords of the ContentPage</li>
 *     <li><strong>seoTitle</strong>: SEO Title of the ContentPage</li>
 *     <li><strong>seoDescription</strong>: SEO Description of the ContentPage</li>
 *     <li><strong>createdAt</strong>: Created At of the ContentPage</li>
 *     <li><strong>updatedAt</strong>: Updated At of the ContentPage</li>
 * </ol>
 *
 * @version 1.0
 * @since 2024-08-09
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContentPage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "title must be less than or equal to 100 characters")
    private String title;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String content;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "slug must be less than or equal to 100 characters")
    private String slug;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "status must be less than or equal to 100 characters")
    private String status;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "metaTitle must be less than or equal to 100 characters")
    private String metaTitle;

    @Column(nullable = false, length = 400)
    @Size(max = 400, message = "metaDescription must be less than or equal to 400 characters")
    private String metaDescription;

    @Column(nullable = false, length = 100)
    @Size(max = 100, message = "metaKeywords must be less than or equal to 100 characters")
    private String metaKeywords;

    @Column(nullable = false)
    private String seoTitle;

    @Column(nullable = false)
    private String seoDescription;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = true)
    private LocalDateTime updatedAt;

}
