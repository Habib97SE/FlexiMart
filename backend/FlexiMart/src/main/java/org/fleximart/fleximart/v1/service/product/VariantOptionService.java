package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.VariantOptionRequest;
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
     * Find all variant options
     *
     * @return The response entity
     */
    public ResponseEntity<Object> findAll() {
        List<VariantOptionResponse> variantOptions = variantOptionRepository.findAll()
                .stream()
                .map(this::toVariantOptionResponse)
                .collect(Collectors.toList());
        return ResponseHandler.generateResponse("Variant options retrieved successfully", 200, variantOptions, false);
    }

    /**
     * Find a variant option by ID
     *
     * @param id The ID of the variant option to find
     * @return The response entity
     */
    public ResponseEntity<Object> findById(Long id) {
        VariantOption variantOption = variantOptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant option not found"));
        return ResponseHandler.generateResponse("Variant option retrieved successfully", 200, toVariantOptionResponse(variantOption), false);
    }

    /**
     * Save a variant option
     *
     * @param variantOptionRequest The variant option request DTO
     * @return The response entity
     */
    public ResponseEntity<Object> save(VariantOptionRequest variantOptionRequest) {
        VariantOption variantOption = fromRequest(variantOptionRequest);
        variantOptionRepository.save(variantOption);
        return ResponseHandler.generateResponse("Variant option created successfully", 201, toVariantOptionResponse(variantOption), false);
    }

    /**
     * Update a variant option
     *
     * @param id The ID of the variant option to update
     * @param variantOptionRequest The variant option request DTO
     * @return The response entity
     */
    public ResponseEntity<Object> update(Long id, VariantOptionRequest variantOptionRequest) {
        VariantOption variantOption = variantOptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant option not found"));
        variantOption.setValue(variantOptionRequest.getValue());
        variantOption.setDescription(variantOptionRequest.getDescription());

        VariantGroup variantGroup = variantGroupRepository.findById(variantOptionRequest.getVariantGroupId())
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));
        variantOption.setVariantGroup(variantGroup);

        variantOptionRepository.save(variantOption);
        return ResponseHandler.generateResponse("Variant option updated successfully", 200, toVariantOptionResponse(variantOption), false);
    }

    /**
     * Delete a variant option
     *
     * @param id The ID of the variant option to delete
     * @return The response entity
     */
    public ResponseEntity<Object> delete(Long id) {
        VariantOption variantOption = variantOptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Variant option not found"));
        variantOptionRepository.delete(variantOption);
        return ResponseHandler.generateResponse("Variant option deleted successfully", 200, null, false);
    }

    /**
     * Convert the VariantOptionRequest DTO to a VariantOption entity
     *
     * @param request The VariantOptionRequest DTO
     * @return The VariantOption entity
     */
    private VariantOption fromRequest(VariantOptionRequest request) {
        VariantGroup variantGroup = variantGroupRepository.findById(request.getVariantGroupId())
                .orElseThrow(() -> new ResourceNotFoundException("Variant group not found"));

        return VariantOption.builder()
                .value(request.getValue())
                .description(request.getDescription())
                .variantGroup(variantGroup)
                .build();
    }

    /**
     * Convert the VariantOption entity to a VariantOptionResponse DTO
     *
     * @param variantOption The VariantOption entity
     * @return The VariantOptionResponse DTO
     */
    private VariantOptionResponse toVariantOptionResponse(VariantOption variantOption) {
        return VariantOptionResponse.builder()
                .id(variantOption.getId())
                .value(variantOption.getValue())
                .description(variantOption.getDescription())
                .build();
    }
}
