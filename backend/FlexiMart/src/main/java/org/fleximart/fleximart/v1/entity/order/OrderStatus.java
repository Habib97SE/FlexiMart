package org.fleximart.fleximart.v1.entity.order;

public enum OrderStatus {
    PENDING,
    PAYMENT_PENDING,
    PAYMENT_FAILED,
    PAYMENT_SUCCESS,
    CONFIRMED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELED,
    RETURNED
}
