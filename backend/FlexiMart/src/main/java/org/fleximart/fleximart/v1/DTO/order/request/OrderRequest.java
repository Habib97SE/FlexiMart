package org.fleximart.fleximart.v1.DTO.order.request;

import lombok.*;
import org.fleximart.fleximart.v1.DTO.user.request.UserRequest;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderRequest {
    private String status;
    private List<OrderItemRequest> orderItems;
    private Long user;
    private BigDecimal discount;
    private BigDecimal totalAmount;
    private Long paymentMethod;
    private String paymentStatus;
    private String transactionId;
    private String orderNumber;
    private Long billingAddress;
    private ShippingRequest shippingRequest;
}
