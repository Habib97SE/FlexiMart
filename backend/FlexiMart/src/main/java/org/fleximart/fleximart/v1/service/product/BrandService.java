package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.BrandRequest;
import org.fleximart.fleximart.v1.DTO.product.response.BrandResponse;
import org.fleximart.fleximart.v1.entity.product.Brand;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.fleximart.fleximart.v1.repository.product.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    private BrandResponse createBrandResponse(Brand brand) {
        return BrandResponse.builder()
                .id(brand.getId())
                .name(brand.getName())
                .description(brand.getDescription())
                .build();
    }

    private List<BrandResponse> createBrandResponseList(List<Brand> brands) {
        List<BrandResponse> brandResponses = new ArrayList<>();
        for (Brand brand : brands) {
            brandResponses.add(createBrandResponse(brand));
        }
        return brandResponses;
    }

    public List<BrandResponse> findAll() {
        return brandRepository.findAll().stream()
                .map(this::createBrandResponse)
                .toList();
    }

    public BrandResponse findById(Long id) {
        return brandRepository.findById(id)
                .map(this::createBrandResponse)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found"));
    }

    public BrandResponse save(BrandRequest brandRequest) {
        Brand brand = Brand.builder()
                .name(brandRequest.getName())
                .description(brandRequest.getDescription())
                .build();
        return createBrandResponse(brandRepository.save(brand));
    }

    public BrandResponse update(Long id, BrandRequest brandRequest) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found"));
        brand.setName(brandRequest.getName());
        brand.setDescription(brandRequest.getDescription());
        return createBrandResponse(brandRepository.save(brand));
    }

    public Brand delete(Long id) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found"));
        brandRepository.delete(brand);
        return brand;
    }



}
