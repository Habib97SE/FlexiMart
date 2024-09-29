package org.fleximart.fleximart.v1.service.order;

import org.fleximart.fleximart.v1.DTO.order.request.OrderItemRequest;
import org.fleximart.fleximart.v1.DTO.order.request.OrderRequest;
import org.fleximart.fleximart.v1.DTO.order.request.ShippingRequest;
import org.fleximart.fleximart.v1.DTO.order.response.OrderItemResponse;
import org.fleximart.fleximart.v1.DTO.order.response.OrderResponse;
import org.fleximart.fleximart.v1.DTO.order.response.ShippingResponse;
import org.fleximart.fleximart.v1.entity.PaymentMethod;
import org.fleximart.fleximart.v1.entity.order.*;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.entity.shipping.ShippingMethod;
import org.fleximart.fleximart.v1.entity.user.Address;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.repository.order.OrderItemRepository;
import org.fleximart.fleximart.v1.repository.order.OrderRepository;
import org.fleximart.fleximart.v1.repository.order.ShippingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private ShippingRepository shippingRepository;

    public OrderService (OrderRepository orderRepository,
                         OrderItemRepository orderItemRepository,
                         ShippingRepository shippingRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.shippingRepository = shippingRepository;
    }

    private OrderItemResponse toOrderItemResponse (OrderItem orderItem) {
        return OrderItemResponse.builder()
                .id(orderItem.getId())
                .productName(orderItem.getProductName())
                .product(orderItem.getProduct().getId())
                .quantity(orderItem.getQuantity())
                .unitPrice(orderItem.getUnitPrice())
                .totalPrice(orderItem.getTotalPrice())
                .status(orderItem.getStatus().toString())
                .build();
    }

    private ShippingResponse toShippingResponse (Shipping shipping) {
        return ShippingResponse.builder()
                .id(shipping.getId())
                .shippingMethod(shipping.getShippingMethod().getId())
                .address(shipping.getAddress().getId())
                .totalCost(shipping.getTotalCost())
                .discount(shipping.getDiscount())
                .order(shipping.getOrder().getId())
                .deliveredAt(shipping.getDeliveredAt())
                .build();
    }

    private OrderResponse toOrderResponse (Order order) {
        return OrderResponse.builder()
                .id(order.getId())
                .status(order.getStatus().toString())
                .orderItems(order.getOrderItems().stream().map(this::toOrderItemResponse).toList())
                .user(order.getUser().getId())
                .discount(order.getDiscount())
                .paymentMethod(order.getPaymentMethod().getId())
                .paymentStatus(order.getPaymentStatus().toString())
                .transactionId(order.getTransactionId())
                .orderNumber(order.getOrderNumber())
                .billingAddress(order.getBillingAddress().getId())
                .shippingResponse(toShippingResponse(order.getShipping()))
                .totalAmount(order.getShipping().getTotalCost().add(order.getOrderItems().stream()
                        .map(OrderItem::getTotalPrice)
                        .reduce(BigDecimal.ZERO, BigDecimal::add)))
                .build();
    }

    private OrderItem toOrderItem (OrderItemRequest orderItemRequest) {
        return OrderItem.builder()
                .productName(orderItemRequest.getProductName())
                .product(Product.builder().id(orderItemRequest.getProduct()).build())
                .quantity(orderItemRequest.getQuantity())
                .unitPrice(orderItemRequest.getUnitPrice())
                .totalPrice(orderItemRequest.getUnitPrice().multiply(BigDecimal.valueOf(orderItemRequest.getQuantity())))
                .build();
    }

    private Shipping toShipping (ShippingRequest shippingRequest) {
        return Shipping.builder()
                .shippingMethod(ShippingMethod.builder().id(shippingRequest.getShippingMethod()).build())
                .address(Address.builder().id(shippingRequest.getAddress()).build())
                .discount(shippingRequest.getDiscount())
                .totalCost(shippingRequest.getTotalCost().subtract(shippingRequest.getDiscount()))
                .order(Order.builder().id(shippingRequest.getOrder()).build())
                .build();
    }

    private Order toOrder (OrderRequest orderRequest) {
        return Order.builder()
                .status(OrderStatus.valueOf(orderRequest.getStatus()))
                .orderItems(orderRequest.getOrderItems().stream().map(this::toOrderItem).toList())
                .user(User.builder().id(orderRequest.getUser()).build())
                .discount(orderRequest.getDiscount())
                .totalAmount(orderRequest.getTotalAmount())
                .paymentMethod(PaymentMethod.builder().id(orderRequest.getPaymentMethod()).build())
                .paymentStatus(PaymentStatus.valueOf(orderRequest.getPaymentStatus()))
                .transactionId(orderRequest.getTransactionId())
                .orderNumber(orderRequest.getOrderNumber())
                .billingAddress(Address.builder().id(orderRequest.getBillingAddress()).build())
                .shipping(toShipping(orderRequest.getShippingRequest()))
                .build();
    }

    public List<OrderResponse> findAll () {
        List<Order> orders = orderRepository.findAll();
        return orders.stream().map(this::toOrderResponse).toList();
    }

    public OrderResponse findById (Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        return toOrderResponse(order);
    }

    public List<OrderResponse> findByUserId (Long userId) {
        List<Order> orders = orderRepository.findByUser_Id(userId);
        return orders.stream().map(this::toOrderResponse).toList();
    }

    public OrderResponse createNewOrder (OrderRequest orderRequest) {
        Order order = toOrder(orderRequest);
        order = orderRepository.save(order);
        BigDecimal totalAmount = order.getOrderItems().stream()
                .map(OrderItem::getTotalPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add).add(order.getShipping().getTotalCost());

        return toOrderResponse(order);
    }

    public OrderResponse updateOrder (Long orderId, OrderRequest orderRequest) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        order = toOrder(orderRequest);
        order.setId(orderId);
        order = orderRepository.save(order);
        return toOrderResponse(order);
    }

    public Boolean deleteOrder (Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return false;
        }
        orderRepository.delete(order);
        return true;
    }

    public List<OrderItemResponse> getOrderItemsByOrderId (Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        return order.getOrderItems().stream().map(this::toOrderItemResponse).toList();
    }

    public List<OrderItemResponse> getOrderItems (Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        return order.getOrderItems().stream().map(this::toOrderItemResponse).toList();
    }

    public OrderItemResponse getOrderItem (Long orderId, Long orderItemId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        OrderItem orderItem = orderItemRepository.findById(orderItemId).orElse(null);
        if (orderItem == null) {
            return null;
        }
        return toOrderItemResponse(orderItem);
    }

    public OrderItemResponse createNewOrderItem (Long orderId, OrderItemRequest orderItemRequest) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        OrderItem orderItem = toOrderItem(orderItemRequest);
        orderItem = orderItemRepository.save(orderItem);
        return toOrderItemResponse(orderItem);
    }

    public OrderItemResponse updateOrderItem (Long orderId, Long orderItemId, OrderItemRequest orderItemRequest) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        OrderItem orderItem = orderItemRepository.findById(orderItemId).orElse(null);
        if (orderItem == null) {
            return null;
        }
        orderItem = toOrderItem(orderItemRequest);
        orderItem.setId(orderItemId);
        orderItem = orderItemRepository.save(orderItem);
        return toOrderItemResponse(orderItem);
    }

    public Boolean deleteOrderItem (Long orderId, Long orderItemId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return false;
        }
        OrderItem orderItem = orderItemRepository.findById(orderItemId).orElse(null);
        if (orderItem == null) {
            return false;
        }
        orderItemRepository.delete(orderItem);
        return true;
    }

    public ShippingResponse getShipping (Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        return toShippingResponse(order.getShipping());
    }

    public ShippingResponse createNewShipping (Long orderId, ShippingRequest shippingRequest) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        Shipping shipping = toShipping(shippingRequest);
        shipping = shippingRepository.save(shipping);
        return toShippingResponse(shipping);
    }

    public ShippingResponse updateShipping (Long orderId, ShippingRequest shippingRequest) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return null;
        }
        Shipping shipping = shippingRepository.findById(order.getShipping().getId()).orElse(null);
        if (shipping == null) {
            return null;
        }
        shipping = toShipping(shippingRequest);
        shipping.setId(order.getShipping().getId());
        shipping = shippingRepository.save(shipping);
        return toShippingResponse(shipping);
    }

    public Boolean deleteShipping (Long orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null) {
            return false;
        }
        Shipping shipping = shippingRepository.findById(order.getShipping().getId()).orElse(null);
        if (shipping == null) {
            return false;
        }
        shippingRepository.delete(shipping);
        return true;
    }

}
