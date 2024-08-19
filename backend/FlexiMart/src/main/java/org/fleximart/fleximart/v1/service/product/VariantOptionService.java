package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.VariantOptionRequest;
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
 * The VariantOptionService class is used to perform CRUD operations on variant options
 * in the database.
 *
 * The class is annotated with <strong>@Service</strong> to indicate that it is a service class.
 */
@Service
public class VariantOptionService {

    @Autowired
    private VariantOptionRepository variantOptionRepository;

    @Autowired
    private VariantGroupRepository variantGroupRepository;

    public VariantOptionService(VariantOptionRepository variantOptionRepository, VariantGroupRepository variantGroupRepository) {
        this.variantOptionRepository = variantOptionRepository;
        this.variantGroupRepository = variantGroupRepository;
    }

    /**
     * Find all variant options.
     *
     * @return ResponseEntity with a list of VariantOptionResponse.
     */
    public ResponseEntity<Object> findAll() {
        List<VariantOptionResponse> variantOptions = variantOptionRepository.findAll()
                .stream()
                .map(this::toVariantOptionResponse)
                .collect(Collectors.toList());
        return ResponseHandler.generateResponse("Variant options retrieved successfully", 200, variantOptions, false);
    }

    /**
     * Find a variant option by ID.
     *
     * @param id The ID of the variant option to find.
     * @return ResponseEntity with the VariantOptionResponse.
     */
    public ResponseEntity<Object> findById(Long id) {
        VariantOption variantOption = variantOptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant option not found with id " + id));
        return ResponseHandler.generateResponse("Variant option retrieved successfully", 200, toVariantOptionResponse(variantOption), false);
    }

    /**
     * Save a new variant option.
     *
     * @param variantOptionRequest The request DTO containing the variant option details.
     * @return ResponseEntity with the created VariantOptionResponse.
     */
    public VariantOptionResponse save(VariantOptionRequest variantOptionRequest) {
        VariantOption variantOption = fromRequest(variantOptionRequest);
        return toVariantOptionResponse(variantOptionRepository.save(variantOption));
    }

    /**
     * Update an existing variant option.
     *
     * @param id The ID of the variant option to update.
     * @param variantOptionRequest The request DTO containing the updated variant option details.
     * @return ResponseEntity with the updated VariantOptionResponse.
     */
    public ResponseEntity<Object> update(Long id, VariantOptionRequest variantOptionRequest) {
        VariantOption variantOption = variantOptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant option not found with id " + id));

        // Update fields
        variantOption.setValue(variantOptionRequest.getValue());
        variantOption.setDescription(variantOptionRequest.getDescription());

        // Update associated VariantGroup
        VariantGroup variantGroup = variantGroupRepository.findById(variantOptionRequest.getVariantGroupId())
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found with id " + variantOptionRequest.getVariantGroupId()));
        variantOption.setVariantGroup(variantGroup);

        variantOptionRepository.save(variantOption);
        return ResponseHandler.generateResponse("Variant option updated successfully", 200, toVariantOptionResponse(variantOption), false);
    }

    /**
     * Delete a variant option by ID.
     *
     * @param id The ID of the variant option to delete.
     * @return ResponseEntity indicating the result of the deletion.
     */
    public ResponseEntity<Object> delete(Long id) {
        VariantOption variantOption = variantOptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant option not found with id " + id));
        variantOptionRepository.delete(variantOption);
        return ResponseHandler.generateResponse("Variant option deleted successfully", 200, null, false);
    }

    /**
     * Convert VariantOptionRequest DTO to VariantOption entity.
     *
     * @param request The VariantOptionRequest DTO.
     * @return The VariantOption entity.
     */
    private VariantOption fromRequest(VariantOptionRequest request) {
        VariantGroup variantGroup = variantGroupRepository.findById(request.getVariantGroupId())
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found with id " + request.getVariantGroupId()));

        return VariantOption.builder()
                .value(request.getValue())
                .description(request.getDescription())
                .variantGroup(variantGroup)
                .build();
    }

    /**
     * Convert VariantOption entity to VariantOptionResponse DTO.
     *
     * @param variantOption The VariantOption entity.
     * @return The VariantOptionResponse DTO.
     */
    private VariantOptionResponse toVariantOptionResponse(VariantOption variantOption) {
        return VariantOptionResponse.builder()
                .id(variantOption.getId())
                .value(variantOption.getValue())
                .description(variantOption.getDescription())
                .variantGroup(VariantGroupResponse.builder()
                        .id(variantOption.getVariantGroup().getId())
                        .name(variantOption.getVariantGroup().getName())
                        .description(variantOption.getVariantGroup().getDescription())
                        .build())
                .build();
    }
}