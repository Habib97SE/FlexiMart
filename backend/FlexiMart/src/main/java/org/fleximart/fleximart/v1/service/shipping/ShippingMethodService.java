package org.fleximart.fleximart.v1.service.shipping;

import org.fleximart.fleximart.v1.DTO.shipping.request.ShippingMethodRequest;
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
public class ShippingMethodService {
    private final ShippingMethodRepository shippingMethodRepository;
    private final ShippingProviderRepository shippingProviderRepository;

    public ShippingMethodService(ShippingMethodRepository shippingMethodRepository, ShippingProviderRepository shippingProviderRepository) {
        this.shippingMethodRepository = shippingMethodRepository;
        this.shippingProviderRepository = shippingProviderRepository;
    }

    private ShippingMethodResponse mapToResponse(ShippingMethod shippingMethod) {
        return ShippingMethodResponse.builder()
                .id(shippingMethod.getId())
                .methodName(shippingMethod.getMethodName())
                .description(shippingMethod.getDescription())
                .providerName(shippingMethod.getProvider().getName())
                .build();
    }

    private ShippingMethod mapToEntity(ShippingMethodRequest shippingMethodRequest) {
        ShippingProvider shippingProvider = shippingProviderRepository.findById(shippingMethodRequest.getProviderId())
                .orElseThrow(() -> new RuntimeException("Shipping provider not found"));
        return ShippingMethod.builder()
                .methodName(shippingMethodRequest.getMethodName())
                .description(shippingMethodRequest.getDescription())
                .provider(shippingProvider)
                .build();
    }

    public List<ShippingMethodResponse> findAll() {
        return shippingMethodRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ShippingMethodResponse findById(Long id) {
        return shippingMethodRepository.findById(id)
                .map(this::mapToResponse)
                .orElse(null);
    }

    /**
     * Find all shipping methods offered by a provider
     * @param providerId the id of the provider
     * @return List of ShippingMethodResponse.
     */
    public List<ShippingMethodResponse> findByProviderId(Long providerId) {
        return shippingMethodRepository.findByProvider_Id(providerId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ShippingMethodResponse create(ShippingMethodRequest shippingMethodRequest) {
        ShippingMethod shippingMethod = mapToEntity(shippingMethodRequest);

        return mapToResponse(shippingMethodRepository.save(shippingMethod));
    }

    public ShippingMethodResponse update(Long id, ShippingMethodRequest shippingMethodRequest) {
        ShippingMethod shippingMethod = shippingMethodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shipping method not found"));

        shippingMethod.setMethodName(shippingMethodRequest.getMethodName());
        shippingMethod.setDescription(shippingMethodRequest.getDescription());

        return mapToResponse(shippingMethodRepository.save(shippingMethod));
    }

    public void delete(Long id) {
        shippingMethodRepository.deleteById(id);
    }
}
