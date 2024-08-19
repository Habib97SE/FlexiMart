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
    private VariantGroupRepository variantGroupRepository;

    @Autowired
    private VariantOptionRepository variantOptionRepository;

    public VariantGroupService(VariantGroupRepository variantGroupRepository,
                               VariantOptionRepository variantOptionRepository) {
        this.variantGroupRepository = variantGroupRepository;
        this.variantOptionRepository = variantOptionRepository;
    }

    /**
     * Get all Variant Groups with their associated Variant Options.
     *
     * @return List of VariantGroupResponse.
     */
    public List<VariantGroupResponse> findAll() {
        return variantGroupRepository.findAll()
                .stream()
                .map(this::toVariantGroupResponse)
                .collect(Collectors.toList());
    }

    /**
     * Get a Variant Group by ID.
     *
     * @param id the ID of the Variant Group.
     * @return ResponseEntity with VariantGroupResponse.
     */
    public ResponseEntity<Object> findById(Long id) {
        VariantGroup variantGroup = variantGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        return ResponseHandler.generateResponse("Variant group retrieved successfully", 200, toVariantGroupResponse(variantGroup), false);
    }

    /**
     * Save a new Variant Group.
     *
     * @param variantGroupRequest the request containing the details for the new Variant Group.
     * @return ResponseEntity with the saved VariantGroupResponse.
     */
    public ResponseEntity<Object> save(VariantGroupRequest variantGroupRequest) {
        VariantGroup variantGroup = fromRequest(variantGroupRequest);
        variantGroup = variantGroupRepository.save(variantGroup);
        return ResponseHandler.generateResponse("Variant group created successfully", 201, toVariantGroupResponse(variantGroup), false);
    }

    /**
     * Update an existing Variant Group.
     *
     * @param id                  the ID of the Variant Group to update.
     * @param variantGroupRequest the request containing the updated details.
     * @return ResponseEntity with the updated VariantGroupResponse.
     */
    public ResponseEntity<Object> update(Long id, VariantGroupRequest variantGroupRequest) {
        VariantGroup variantGroup = variantGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        variantGroup.setName(variantGroupRequest.getName());
        variantGroup.setDescription(variantGroupRequest.getDescription());
        variantGroupRepository.save(variantGroup);
        return ResponseHandler.generateResponse("Variant group updated successfully", 200, toVariantGroupResponse(variantGroup), false);
    }

    /**
     * Delete a Variant Group by ID.
     *
     * @param id the ID of the Variant Group to delete.
     * @return ResponseEntity indicating the result of the deletion.
     */
    public ResponseEntity<Object> delete(Long id) {
        VariantGroup variantGroup = variantGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        variantGroupRepository.delete(variantGroup);
        return ResponseHandler.generateResponse("Variant group deleted successfully", 200, null, false);
    }

    /**
     * Convert a VariantGroupRequest to a VariantGroup entity.
     *
     * @param request the request containing details for creating a VariantGroup.
     * @return the VariantGroup entity.
     */
    private VariantGroup fromRequest(VariantGroupRequest request) {
        return VariantGroup.builder()
                .name(request.getName())
                .description(request.getDescription())
                .build();
    }

    /**
     * Convert a VariantOption to a VariantOptionResponse.
     *
     * @param variantOption the VariantOption to convert.
     * @return the VariantOptionResponse.
     */
    private VariantOptionResponse toVariantOptionResponse(VariantOption variantOption) {
        return VariantOptionResponse.builder()
                .id(variantOption.getId())
                .value(variantOption.getValue())
                .description(variantOption.getDescription())
                .build();
    }

    /**
     * Convert a VariantGroup to a VariantGroupResponse.
     *
     * @param variantGroup the VariantGroup to convert.
     * @return the VariantGroupResponse.
     */
    private VariantGroupResponse toVariantGroupResponse(VariantGroup variantGroup) {
        return VariantGroupResponse.builder()
                .id(variantGroup.getId())
                .name(variantGroup.getName())
                .description(variantGroup.getDescription())
                .build();
    }
}