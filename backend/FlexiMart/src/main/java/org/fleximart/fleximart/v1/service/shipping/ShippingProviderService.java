package org.fleximart.fleximart.v1.service.shipping;

import org.fleximart.fleximart.v1.DTO.shipping.request.ShippingProviderRequest;
import org.fleximart.fleximart.v1.DTO.shipping.response.ShippingMethodResponse;
import org.fleximart.fleximart.v1.DTO.shipping.response.ShippingProviderResponse;
import org.fleximart.fleximart.v1.entity.shipping.ShippingMethod;
import org.fleximart.fleximart.v1.entity.shipping.ShippingProvider;
import org.fleximart.fleximart.v1.repository.shipping.ShippingMethodRepository;
import org.fleximart.fleximart.v1.repository.shipping.ShippingProviderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShippingProviderService {

    private final ShippingMethodRepository shippingMethodRepository;
    private ShippingProviderRepository shippingProviderRepository;

    public ShippingProviderService(ShippingProviderRepository shippingProviderRepository, ShippingMethodRepository shippingMethodRepository) {
        this.shippingProviderRepository = shippingProviderRepository;
        this.shippingMethodRepository = shippingMethodRepository;
    }

    private ShippingMethodResponse mapToShippingMethodResponse(ShippingMethod shippingMethod) {
        return ShippingMethodResponse.builder()
                .id(shippingMethod.getId())
                .methodName(shippingMethod.getMethodName())
                .description(shippingMethod.getDescription())
                .providerName(shippingMethod.getProvider().getName())
                .build();
    }

    private ShippingProviderResponse mapToResponse(ShippingProvider shippingProvider) {
        return ShippingProviderResponse.builder()
                .id(shippingProvider.getId())
                .name(shippingProvider.getName())
                .description(shippingProvider.getDescription())
                .website(shippingProvider.getWebsite())
                .logo(shippingProvider.getLogo())
                .emailAddress(shippingProvider.getEmailAddress())
                .trackingUrl(shippingProvider.getTrackingUrl())
                .phoneNumber(shippingProvider.getPhoneNumber())
                .shippingMethods(
                        shippingProvider.getShippingMethods().stream()
                                .map(this::mapToShippingMethodResponse)
                                .collect(Collectors.toSet())
                )
                .build();
    }

    private ShippingProvider mapToEntity(ShippingProviderRequest shippingProviderRequest) {
        return ShippingProvider.builder()
                .name(shippingProviderRequest.getName())
                .description(shippingProviderRequest.getDescription())
                .website(shippingProviderRequest.getWebsite())
                .logo(shippingProviderRequest.getLogo())
                .emailAddress(shippingProviderRequest.getEmailAddress())
                .trackingUrl(shippingProviderRequest.getTrackingUrl())
                .phoneNumber(shippingProviderRequest.getPhoneNumber())
                .shippingMethods(shippingProviderRequest.getShippingMethods().stream()
                        .map(shippingMethodRequest -> ShippingMethod.builder()
                                .methodName(shippingMethodRequest.getMethodName())
                                .description(shippingMethodRequest.getDescription())
                                .build())
                        .collect(Collectors.toSet()))
                .build();
    }

    public List<ShippingProviderResponse> findAll() {
        return shippingProviderRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ShippingProviderResponse findById(Long id) {
        return shippingProviderRepository.findById(id)
                .map(this::mapToResponse)
                .orElseThrow(() -> new RuntimeException("Shipping provider not found"));
    }

    public ShippingProviderResponse save(ShippingProviderRequest shippingProviderRequest) {
        ShippingProvider shippingProvider = shippingProviderRepository.save(mapToEntity(shippingProviderRequest));
        // check if the shipping provider has shipping methods
        if (shippingProviderRequest.getShippingMethods() != null) {
            shippingProviderRequest.getShippingMethods().forEach(shippingMethodRequest -> {
                ShippingMethod shippingMethod = ShippingMethod.builder()
                        .methodName(shippingMethodRequest.getMethodName())
                        .description(shippingMethodRequest.getDescription())
                        .provider(shippingProvider)
                        .build();
                shippingMethod = shippingMethodRepository.save(shippingMethod);
                shippingProvider.getShippingMethods().add(shippingMethod);
            });
        }
        return mapToResponse(shippingProviderRepository.save(mapToEntity(shippingProviderRequest)));
    }

    public ShippingProviderResponse update(Long id, ShippingProviderRequest shippingProviderRequest) {
        return mapToResponse(shippingProviderRepository.save(mapToEntity(shippingProviderRequest)));
    }

    public void delete(Long id) {
        shippingProviderRepository.deleteById(id);
    }

}
