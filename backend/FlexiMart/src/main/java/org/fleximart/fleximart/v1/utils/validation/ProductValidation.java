package org.fleximart.fleximart.v1.utils.validation;

public class ProductValidation {
    public static boolean validateProductName(String productName) {
        return productName != null && productName.length() > 0;
    }

    public static boolean validateProductDescription(String productDescription) {
        return productDescription != null && productDescription.length() > 0;
    }

    public static boolean validateProductPrice(double productPrice) {
        return productPrice > 0;
    }

    public static boolean validateProductQuantity(int productQuantity) {
        return productQuantity > 0;
    }

    public static boolean validateProductCategory(String productCategory) {
        return productCategory != null && productCategory.length() > 0;
    }

    public static boolean validateProductImage(String productImage) {
        return productImage != null && productImage.length() > 0;
    }

    public static boolean validateProductRating(double productRating) {
        return productRating >= 0 && productRating <= 5;
    }

    public static boolean validateProductDiscount(double productDiscount) {
        return productDiscount >= 0 && productDiscount <= 100;
    }

    public static boolean validateProductDiscountedPrice(double productDiscountedPrice) {
        return productDiscountedPrice >= 0;
    }

    public static boolean validateProductDiscountStartDate(String productDiscountStartDate) {
        return productDiscountStartDate != null && productDiscountStartDate.length() > 0;
    }

    public static boolean validateProductDiscountEndDate(String productDiscountEndDate) {
        return productDiscountEndDate != null && productDiscountEndDate.length() > 0;
    }

    public static boolean validateProductDiscountStatus(String productDiscountStatus) {
        return productDiscountStatus != null && productDiscountStatus.length() > 0;
    }
    

}
