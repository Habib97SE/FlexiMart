package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.ProductVariantRequest;
import org.fleximart.fleximart.v1.DTO.product.request.VariantOptionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.ProductMediaResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductVariantResponse;
import org.fleximart.fleximart.v1.DTO.product.response.VariantGroupResponse;
import org.fleximart.fleximart.v1.DTO.product.response.VariantOptionResponse;
import org.fleximart.fleximart.v1.entity.product.*;
import org.fleximart.fleximart.v1.repository.product.ProductRepository;
import org.fleximart.fleximart.v1.repository.product.ProductVariantRepository;
import org.fleximart.fleximart.v1.repository.product.VariantGroupRepository;
import org.fleximart.fleximart.v1.repository.product.VariantOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductVariantService {

    @Autowired
    private ProductVariantRepository productVariantRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private VariantOptionRepository variantOptionRepository;

    @Autowired
    private VariantGroupRepository variantGroupRepository;

    public ProductVariantService(ProductVariantRepository productVariantRepository,
                                 ProductRepository productRepository,
                                 VariantOptionRepository variantOptionRepository,
                                 VariantGroupRepository variantGroupRepository) {
        this.productVariantRepository = productVariantRepository;
        this.productRepository = productRepository;
        this.variantOptionRepository = variantOptionRepository;
        this.variantGroupRepository = variantGroupRepository;
    }

    private VariantGroupResponse createVariantGroupResponse(VariantGroup variantGroup) {
        List<VariantOptionResponse> variantOptionResponses = variantGroup.getVariantOptions().stream()
                .map(vo -> VariantOptionResponse.builder()
                        .id(vo.getId())
                        .value(vo.getValue())
                        .build())
                .collect(Collectors.toList());

        return VariantGroupResponse.builder()
                .id(variantGroup.getId())
                .name(variantGroup.getName())
                .variantOptions(variantOptionResponses)
                .build();
    }

    private List<ProductMediaResponse> createProductMediaList(List<ProductMedia> productMedia) {
        return productMedia.stream()
                .map(pm -> ProductMediaResponse.builder()
                        .id(pm.getId())
                        .mediaUrl(pm.getMediaUrl())
                        .mediaType(pm.getMediaType())
                        .mediaAlt(pm.getAltText())
                        .build())
                .collect(Collectors.toList());
    }

    private ProductVariantResponse createProductVariantResponse(ProductVariant productVariant) {
        // Find VariantGroups based on the VariantOptions of this ProductVariant
        List<VariantOption> variantOptions = productVariant.getVariantOptions();
        List<VariantGroup> variantGroups = variantGroupRepository.findByVariantOptions(variantOptions);

        List<VariantGroupResponse> variantGroupResponses = variantGroups.stream()
                .map(this::createVariantGroupResponse)
                .collect(Collectors.toList());

        return ProductVariantResponse.builder()
                .id(productVariant.getId())
                .sku(productVariant.getSku())
                .barCode(productVariant.getBarCode())
                .variantGroups(variantGroupResponses)
                .productMedia(createProductMediaList(productVariant.getProductMediaList()))
                .build();
    }

    public List<ProductVariantResponse> findAll() {
        return productVariantRepository.findAll()
                .stream()
                .map(this::createProductVariantResponse)
                .collect(Collectors.toList());
    }

    public ProductVariantResponse findById(Long id) {
        ProductVariant productVariant = productVariantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ProductVariant not found with id " + id));
        return createProductVariantResponse(productVariant);
    }

    /**
     * Save a new ProductVariant with associated VariantOptions.
     *
     * @param productVariantRequest the DTO containing the product variant and variant options details.
     * @return the saved ProductVariant response DTO.
     */
    public ProductVariantResponse saveProductVariant(ProductVariantRequest productVariantRequest) {
        // Fetch the Product entity
        Product product = productRepository.findById(productVariantRequest.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productVariantRequest.getProductId()));

        // Initialize the list to hold the VariantOptions
        List<VariantOption> variantOptions = new ArrayList<>();

        // Loop through the variant options in the request, create or fetch them, and add to the list
        for (VariantOptionRequest optionRequest : productVariantRequest.getVariantOptionRequests()) {
            VariantOption option = variantOptionRepository.findById(optionRequest.getId()).orElse(null);

            if (option == null) {
                // If the VariantOption doesn't exist, create a new one
                option = VariantOption.builder()
                        .value(optionRequest.getValue())
                        .description(optionRequest.getDescription())
                        .variantGroup(VariantGroup.builder().id(optionRequest.getVariantGroupId()).build())
                        .build();
                variantOptionRepository.save(option);
            }
            variantOptions.add(option);
        }

        // Build the ProductVariant entity
        ProductVariant productVariant = ProductVariant.builder()
                .product(product)
                .variantOptions(variantOptions)
                .sku(productVariantRequest.getSku())
                .barCode(productVariantRequest.getBarCode())
                .build();

        // Save the ProductVariant entity
        productVariant = productVariantRepository.save(productVariant);

        // Return the response DTO
        return createProductVariantResponse(productVariant);
    }

    public ProductVariantResponse update(Long id, ProductVariantRequest productVariantRequest) {
        // Fetch the ProductVariant entity
        ProductVariant productVariant = productVariantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ProductVariant not found with id " + id));

        // Fetch the Product entity
        Product product = productRepository.findById(productVariantRequest.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productVariantRequest.getProductId()));

        // Initialize the list to hold the VariantOptions
        List<VariantOption> variantOptions = new ArrayList<>();

        // Fetch the VariantOptions by their IDs from the request
        for (VariantOptionRequest variantOptionRequest : productVariantRequest.getVariantOptionRequests()) {
            VariantOption variantOption = variantOptionRepository.findById(variantOptionRequest.getId())
                    .orElseThrow(() -> new ResourceNotFoundException("VariantOption not found with id " + variantOptionRequest.getId()));
            variantOptions.add(variantOption);
        }

        // Update the ProductVariant entity
        productVariant.setProduct(product);
        productVariant.setVariantOptions(variantOptions);
        productVariant.setSku(productVariantRequest.getSku());
        productVariant.setBarCode(productVariantRequest.getBarCode());

        // Save the ProductVariant entity
        productVariant = productVariantRepository.save(productVariant);

        // Return the response DTO
        return createProductVariantResponse(productVariant);
    }

    public boolean delete(Long id) {
        if (id < 1) {
            return false;
        }

        ProductVariant productVariant = productVariantRepository.findById(id).orElse(null);
        if (productVariant == null) {
            return false;
        }

        productVariantRepository.delete(productVariant);
        return true;
    }


}
