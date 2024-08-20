package org.fleximart.fleximart.v1.controller.order;

import org.fleximart.fleximart.v1.DTO.order.request.OrderItemRequest;
import org.fleximart.fleximart.v1.DTO.order.request.OrderRequest;
import org.fleximart.fleximart.v1.DTO.order.request.ShippingRequest;
import org.fleximart.fleximart.v1.DTO.order.response.OrderItemResponse;
import org.fleximart.fleximart.v1.DTO.order.response.OrderResponse;
import org.fleximart.fleximart.v1.DTO.order.response.ShippingResponse;
import org.fleximart.fleximart.v1.service.order.OrderService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<Object> getOrders() {
        List<OrderResponse> orders = orderService.findAll();
        if (orders == null) {
            return ResponseHandler.generateResponse(
                    "No orders found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Orders fetched successfully",
                200,
                orderService.findAll(),
                false
        );
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Object> getOrderById(Long orderId) {
        OrderResponse order = orderService.findById(orderId);
        if (order == null) {
            return ResponseHandler.generateResponse(
                    "Order not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order fetched successfully",
                200,
                orderService.findById(orderId),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse order = orderService.createNewOrder(orderRequest);
        if (order == null) {
            return ResponseHandler.generateResponse(
                    "Order not created",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order created successfully",
                201,
                order,
                false
        );
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<Object> updateOrder(@PathVariable Long orderId, @RequestBody OrderRequest orderRequest) {
        OrderResponse order = orderService.updateOrder(orderId, orderRequest);
        if (order == null) {
            return ResponseHandler.generateResponse(
                    "Order not updated",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order updated successfully",
                200,
                order,
                false
        );
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<Object> deleteOrder(@PathVariable Long orderId) {
        Boolean isDeleted = orderService.deleteOrder(orderId);
        if (!isDeleted) {
            return ResponseHandler.generateResponse(
                    "Order not deleted",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order deleted successfully",
                200,
                null,
                false
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Object> getOrdersByUserId(@PathVariable Long userId) {
        List<OrderResponse> orders = orderService.findByUserId(userId);
        if (orders == null) {
            return ResponseHandler.generateResponse(
                    "No orders found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Orders fetched successfully",
                200,
                orderService.findByUserId(userId),
                false
        );
    }


    // OrderItems endpoints

    @GetMapping("/{orderId}/orderItems")
    public ResponseEntity<Object> getOrderItems(@PathVariable Long orderId) {
        List<OrderItemResponse> orderItems = orderService.getOrderItemsByOrderId(orderId);
        if (orderItems == null) {
            return ResponseHandler.generateResponse(
                    "No order items found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order items fetched successfully",
                200,
                orderItems,
                false
        );
    }

    @GetMapping("/{orderId}/orderItems/{orderItemId}")
    public ResponseEntity<Object> getOrderItemById(@PathVariable Long orderId, @PathVariable Long orderItemId) {
        OrderItemResponse orderItem = orderService.getOrderItem(orderId, orderItemId);
        if (orderItem == null) {
            return ResponseHandler.generateResponse(
                    "Order item not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order item fetched successfully",
                200,
                orderItem,
                false
        );
    }

    @PostMapping("/{orderId}/orderItems")
    public ResponseEntity<Object> createOrderItem(@PathVariable Long orderId, @RequestBody OrderItemRequest orderItemRequest) {
        OrderItemResponse orderItem = orderService.createNewOrderItem(orderId, orderItemRequest);
        if (orderItem == null) {
            return ResponseHandler.generateResponse(
                    "Order item not created",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order item created successfully",
                201,
                orderItem,
                false
        );
    }

    @PutMapping("/{orderId}/orderItems/{orderItemId}")
    public ResponseEntity<Object> updateOrderItem(@PathVariable Long orderId, @PathVariable Long orderItemId, @RequestBody OrderItemRequest orderItemRequest) {
        OrderItemResponse orderItem = orderService.updateOrderItem(orderId, orderItemId, orderItemRequest);
        if (orderItem == null) {
            return ResponseHandler.generateResponse(
                    "Order item not updated",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order item updated successfully",
                200,
                orderItem,
                false
        );
    }

    @DeleteMapping("/{orderId}/orderItems/{orderItemId}")
    public ResponseEntity<Object> deleteOrderItem(@PathVariable Long orderId, @PathVariable Long orderItemId) {
        Boolean isDeleted = orderService.deleteOrderItem(orderId, orderItemId);
        if (!isDeleted) {
            return ResponseHandler.generateResponse(
                    "Order item not deleted",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Order item deleted successfully",
                200,
                null,
                false
        );
    }

    // Shipping endpoints

    @GetMapping("/{orderId}/shipping")
    public ResponseEntity<Object> getShipping(@PathVariable Long orderId) {
        ShippingResponse shipping = orderService.getShipping(orderId);
        if (shipping == null) {
            return ResponseHandler.generateResponse(
                    "Shipping not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Shipping fetched successfully",
                200,
                shipping,
                false
        );
    }

    @PostMapping("/{orderId}/shipping")
    public ResponseEntity<Object> createShipping(@PathVariable Long orderId, @RequestBody ShippingRequest shippingRequest) {
        ShippingResponse shipping = orderService.createNewShipping(orderId, shippingRequest);
        if (shipping == null) {
            return ResponseHandler.generateResponse(
                    "Shipping not created",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Shipping created successfully",
                201,
                shipping,
                false
        );
    }

    @PutMapping("/{orderId}/shipping")
    public ResponseEntity<Object> updateShipping(@PathVariable Long orderId, @RequestBody ShippingRequest shippingRequest) {
        ShippingResponse shipping = orderService.updateShipping(orderId, shippingRequest);
        if (shipping == null) {
            return ResponseHandler.generateResponse(
                    "Shipping not updated",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Shipping updated successfully",
                200,
                shipping,
                false
        );
    }

    @DeleteMapping("/{orderId}/shipping")
    public ResponseEntity<Object> deleteShipping(@PathVariable Long orderId) {
        Boolean isDeleted = orderService.deleteShipping(orderId);
        if (!isDeleted) {
            return ResponseHandler.generateResponse(
                    "Shipping not deleted",
                    400,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Shipping deleted successfully",
                200,
                null,
                false
        );
    }

}
