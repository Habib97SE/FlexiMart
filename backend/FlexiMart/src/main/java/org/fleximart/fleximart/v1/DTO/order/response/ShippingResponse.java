package org.fleximart.fleximart.v1.DTO.order.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingResponse {
    private Long id;
    private Long shippingMethod;
    private Long address;
    private BigDecimal totalCost;
    private BigDecimal discount;
    private Long order;
    private LocalDateTime deliveredAt;
}
