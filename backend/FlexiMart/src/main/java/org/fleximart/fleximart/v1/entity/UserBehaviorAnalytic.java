package org.fleximart.fleximart.v1.entity;

import jakarta.persistence.*;
import org.fleximart.fleximart.v1.entity.cart.ShoppingCart;
import org.fleximart.fleximart.v1.entity.order.Order;
import org.fleximart.fleximart.v1.entity.product.Collection;
import org.fleximart.fleximart.v1.entity.product.CoreProduct;
import org.fleximart.fleximart.v1.entity.product.ProductVariant;
import org.fleximart.fleximart.v1.entity.user.User;

import java.time.LocalDateTime;

/**
 * <h2>UserBehaviorAnalytic entity</h2>
 * This entity is used to store user behavior data such as page views, clicks, add to cart, purchase, etc.
 * This data can be used to analyze user behavior, improve user experience, and increase sales.
 */
public class UserBehaviorAnalytic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @Column(nullable = true)
    private String sessionId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user; // Assuming you have a User entity

    @Column(nullable = false)
    private String pageUrl;

    @Column(nullable = true)
    private String referrerUrl;

    @Column(nullable = false)
    private String eventType;

    @Column(nullable = true)
    private String eventDetails;

    @Column(nullable = true)
    private Long timeSpent;

    @Column(nullable = true)
    private String clickCoordinates;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    private CoreProduct product; // Assuming you have a Product entity

    @ManyToOne
    @JoinColumn(name = "product_category_id", nullable = true)
    private Collection productCollection; // Assuming you have a Collection entity

    @ManyToOne
    @JoinColumn(name = "variant_id", nullable = true)
    private ProductVariant variant; // Assuming you have a ProductVariant entity

    @Column(nullable = true)
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = true)
    private ShoppingCart cart; // Assuming you have a Cart entity

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = true)
    private Order order; // Assuming you have an Order entity

    @Column(nullable = true)
    private Double orderValue;

    @Column(nullable = true)
    private Double discountApplied;

    @Column(nullable = true)
    private String location;

    @Column(nullable = true)
    private String deviceType;

    @Column(nullable = true)
    private String browser;

    @Column(nullable = true)
    private String os;

    @Column(nullable = true)
    private String language;

    @Column(nullable = true)
    private String ipAddress;

    @Column(nullable = true)
    private String userAgent;

    @Column(nullable = true)
    private String screenResolution;

    @Column(nullable = true)
    private String campaignId;

    @Column(nullable = true)
    private String utmSource;

    @Column(nullable = true)
    private String utmMedium;

    @Column(nullable = true)
    private String utmCampaign;

    @Column(nullable = true)
    private String utmTerm;

    @Column(nullable = true)
    private String utmContent;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String customEventData;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String customUserProperties;
}
