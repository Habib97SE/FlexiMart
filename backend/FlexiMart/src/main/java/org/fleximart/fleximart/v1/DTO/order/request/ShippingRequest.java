package org.fleximart.fleximart.v1.DTO.order.request;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingRequest {
    private Long shippingMethod;
    private Long address;
    private BigDecimal totalCost;
    private BigDecimal discount;
    private Long order;
}
