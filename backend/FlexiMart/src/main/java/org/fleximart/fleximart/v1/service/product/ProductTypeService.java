package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.ProductTypeRequest;
import org.fleximart.fleximart.v1.DTO.product.response.ProductTypeResponse;
import org.fleximart.fleximart.v1.entity.product.ProductType;
import org.fleximart.fleximart.v1.repository.product.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    public ProductTypeService(ProductTypeRepository productTypeRepository) {
        this.productTypeRepository = productTypeRepository;
    }

    private ProductTypeResponse mapProductTypeToProductTypeResponse(ProductType productType) {
        return ProductTypeResponse.builder()
                .id(productType.getId())
                .name(productType.getName())
                .description(productType.getDescription())
                .build();
    }


    public List<ProductTypeResponse> findAll() {
        List<ProductType> productTypes = productTypeRepository.findAll();
        return productTypes.stream()
                .map(this::mapProductTypeToProductTypeResponse)
                .toList();
    }

    public ProductTypeResponse findById(Long id) {
        ProductType productType = productTypeRepository.findById(id).orElse(null);
        if (productType == null) {
            return null;
        }
        return mapProductTypeToProductTypeResponse(productType);
    }

    public ProductTypeResponse save(ProductTypeRequest productTypeRequest) {
        ProductType productType = ProductType.builder()
                .name(productTypeRequest.getName())
                .description(productTypeRequest.getDescription())
                .build();
        productTypeRepository.save(productType);
        return mapProductTypeToProductTypeResponse(productType);
    }

    public ProductTypeResponse update(Long id, ProductTypeRequest productTypeRequest) {
        ProductType productType = productTypeRepository.findById(id).orElse(null);
        if (productType == null) {
            return null;
        }
        productType.setName(productTypeRequest.getName());
        productType.setDescription(productTypeRequest.getDescription());
        productTypeRepository.save(productType);
        return mapProductTypeToProductTypeResponse(productType);
    }

    public boolean delete(Long id) {
        if (id < 1) {
            return false;
        }

        ProductType productType = productTypeRepository.findById(id).orElse(null);
        if (productType == null) {
            return false;
        }

        productTypeRepository.delete(productType);
        return true;
    }


}
