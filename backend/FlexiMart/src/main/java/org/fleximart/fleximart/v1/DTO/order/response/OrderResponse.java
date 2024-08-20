package org.fleximart.fleximart.v1.DTO.order.response;

import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderResponse {
    private Long id;
    private String status;
    private List<OrderItemResponse> orderItems;
    private Long user;
    private BigDecimal discount;
    private BigDecimal totalAmount;
    private Long paymentMethod;
    private String paymentStatus;
    private String transactionId;
    private String orderNumber;
    private Long billingAddress;
    private ShippingResponse shippingResponse;

}
