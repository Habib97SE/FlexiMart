package org.fleximart.fleximart.v1.utils.validation;

import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;

public class ProductValidation {

    public static boolean isProductNameValid(String name) {
        return !name.isEmpty();
    }

    public static boolean isBrandIdValid(Long brandId) {
        return brandId > 0;
    }

    public static boolean isCollectionIdValid(Long collectionId) {
        return collectionId > 0;
    }

    public static boolean isDescriptionValid(String description) {
        return !description.isEmpty();
    }

    public static boolean isModelNumberValid(String modelNumber) {
        return !modelNumber.isEmpty();
    }

    public static boolean isProductTypeIdValid(Long productTypeId) {
        return productTypeId > 0;
    }

    public static boolean isProductRequestValid(String name, Long brandId, Long collectionId, String description, String modelNumber, Long productTypeId) {
        return isProductNameValid(name) && isBrandIdValid(brandId) && isCollectionIdValid(collectionId) && isDescriptionValid(description) && isModelNumberValid(modelNumber) && isProductTypeIdValid(productTypeId);
    }

    public static boolean isProductRequestValid(ProductRequest productRequest) {
        return isProductRequestValid(productRequest.getName(), productRequest.getBrandId(), productRequest.getCollectionId(), productRequest.getDescription(), productRequest.getModelNumber(), productRequest.getProductTypeId());
    }




}
