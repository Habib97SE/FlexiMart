package org.fleximart.fleximart.v1.service.product;


import org.fleximart.fleximart.v1.DTO.product.request.VariantGroupRequest;
import org.fleximart.fleximart.v1.DTO.product.response.VariantGroupResponse;
import org.fleximart.fleximart.v1.DTO.product.response.VariantOptionResponse;
import org.fleximart.fleximart.v1.entity.product.VariantGroup;
import org.fleximart.fleximart.v1.entity.product.VariantOption;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.fleximart.fleximart.v1.repository.product.VariantGroupRepository;
import org.fleximart.fleximart.v1.repository.product.VariantOptionRepository;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


/**
 * Service class for VariantGroup, contains methods for CRUD operations.
 *
 * @Service annotation is used to indicate that the class is a service class.
 */
@Service
public class VariantGroupService {

    @Autowired
    private  VariantGroupRepository variantGroupRepository;

    @Autowired
    private VariantOptionRepository variantOptionRepository;

    public VariantGroupService(VariantGroupRepository variantGroupRepository,
                               VariantOptionRepository variantOptionRepository) {
        this.variantGroupRepository = variantGroupRepository;
        this.variantOptionRepository = variantOptionRepository;
    }

    /**
     * Method to convert a VariantOption object to a VariantOptionResponse object.
     * @return VariantOptionResponse object containing the details of the VariantOption object.
     */
    public List<VariantGroupResponse> findAll() {
        return variantGroupRepository.findAll()
                .stream()
                .map(this::toVariantGroupResponse)
                .collect(Collectors.toList());
    }

    public ResponseEntity<Object> findById(Long id) {
        VariantGroup variantGroup = variantGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        return ResponseHandler.generateResponse("Variant group retrieved successfully", 200, toVariantGroupResponse(variantGroup), false);
    }

    public ResponseEntity<Object> save(VariantGroupRequest variantGroupRequest) {
        VariantGroup variantGroup = fromRequest(variantGroupRequest);
        variantGroupRepository.save(variantGroup);
        return ResponseHandler.generateResponse("Variant group created successfully", 201, toVariantGroupResponse(variantGroup), false);
    }

    public ResponseEntity<Object> update(Long id, VariantGroupRequest variantGroupRequest) {
        VariantGroup variantGroup = variantGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        variantGroup.setName(variantGroupRequest.getName());
        variantGroup.setDescription(variantGroupRequest.getDescription());
        variantGroupRepository.save(variantGroup);
        return ResponseHandler.generateResponse("Variant group updated successfully", 200, toVariantGroupResponse(variantGroup), false);
    }

    public ResponseEntity<Object> delete(Long id) {
        VariantGroup variantGroup = variantGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        variantGroupRepository.delete(variantGroup);
        return ResponseHandler.generateResponse("Variant group deleted successfully", 200, null, false);
    }

    private VariantGroup fromRequest(VariantGroupRequest request) {
        return VariantGroup.builder()
                .name(request.getName())
                .description(request.getDescription())
                .build();
    }

    private VariantOptionResponse toVariantOptionResponse(VariantOption variantOption) {
        return VariantOptionResponse.builder()
                .id(variantOption.getId())
                .value(variantOption.getValue())
                .description(variantOption.getDescription())
                .build();
    }

    private VariantGroupResponse toVariantGroupResponse(VariantGroup variantGroup) {
        return VariantGroupResponse.builder()
                .id(variantGroup.getId())
                .name(variantGroup.getName())
                .description(variantGroup.getDescription())
                .variantOptions(variantGroup.getVariantOptions().stream()
                        .map(this::toVariantOptionResponse)
                        .collect(Collectors.toList()))
                .build();
    }
}
