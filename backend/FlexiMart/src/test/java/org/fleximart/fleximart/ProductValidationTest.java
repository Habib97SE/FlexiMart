package org.fleximart.fleximart;

import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;
import org.fleximart.fleximart.v1.service.MediaManagement;
import org.fleximart.fleximart.v1.utils.validation.ProductValidation;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ProductValidationTest {

    // Test cases for isProductNameValid
    @Test
    public void testIsProductNameValid_withValidName() {
        assertTrue(ProductValidation.isProductNameValid("Product Name"));
    }

    @Test
    public void testIsProductNameValid_withEmptyName() {
        assertFalse(ProductValidation.isProductNameValid(""));
    }

    @Test
    public void testIsProductNameValid_withNullName() {
        assertThrows(NullPointerException.class, () -> ProductValidation.isProductNameValid(null));
    }

    // Test cases for isBrandIdValid
    @Test
    public void testIsBrandIdValid_withPositiveId() {
        assertTrue(ProductValidation.isBrandIdValid(1L));
    }

    @Test
    public void testIsBrandIdValid_withZeroId() {
        assertFalse(ProductValidation.isBrandIdValid(0L));
    }

    @Test
    public void testIsBrandIdValid_withNegativeId() {
        assertFalse(ProductValidation.isBrandIdValid(-1L));
    }

    @Test
    public void testIsBrandIdValid_withNullId() {
        assertThrows(NullPointerException.class, () -> ProductValidation.isBrandIdValid(null));
    }

    // Test cases for isCollectionIdValid
    @Test
    public void testIsCollectionIdValid_withPositiveId() {
        assertTrue(ProductValidation.isCollectionIdValid(1L));
    }

    @Test
    public void testIsCollectionIdValid_withZeroId() {
        assertFalse(ProductValidation.isCollectionIdValid(0L));
    }

    @Test
    public void testIsCollectionIdValid_withNegativeId() {
        assertFalse(ProductValidation.isCollectionIdValid(-1L));
    }

    @Test
    public void testIsCollectionIdValid_withNullId() {
        assertThrows(NullPointerException.class, () -> ProductValidation.isCollectionIdValid(null));
    }

    // Test cases for isDescriptionValid
    @Test
    public void testIsDescriptionValid_withValidDescription() {
        assertTrue(ProductValidation.isDescriptionValid("Valid description"));
    }

    @Test
    public void testIsDescriptionValid_withEmptyDescription() {
        assertFalse(ProductValidation.isDescriptionValid(""));
    }

    @Test
    public void testIsDescriptionValid_withNullDescription() {
        assertThrows(NullPointerException.class, () -> ProductValidation.isDescriptionValid(null));
    }

    // Test cases for isModelNumberValid
    @Test
    public void testIsModelNumberValid_withValidModelNumber() {
        assertTrue(ProductValidation.isModelNumberValid("12345"));
    }

    @Test
    public void testIsModelNumberValid_withEmptyModelNumber() {
        assertFalse(ProductValidation.isModelNumberValid(""));
    }

    @Test
    public void testIsModelNumberValid_withNullModelNumber() {
        assertThrows(NullPointerException.class, () -> ProductValidation.isModelNumberValid(null));
    }

    // Test cases for isProductTypeIdValid
    @Test
    public void testIsProductTypeIdValid_withPositiveId() {
        assertTrue(ProductValidation.isProductTypeIdValid(1L));
    }

    @Test
    public void testIsProductTypeIdValid_withZeroId() {
        assertFalse(ProductValidation.isProductTypeIdValid(0L));
    }

    @Test
    public void testIsProductTypeIdValid_withNegativeId() {
        assertFalse(ProductValidation.isProductTypeIdValid(-1L));
    }

    @Test
    public void testIsProductTypeIdValid_withNullId() {
        assertThrows(NullPointerException.class, () -> ProductValidation.isProductTypeIdValid(null));
    }

    // Test case for isProductRequestValid with individual parameters
    @Test
    public void testIsProductRequestValid_withAllValidData() {
        assertTrue(ProductValidation.isProductRequestValid(
                "Valid Name", 1L, 1L, "Valid description", "Model123", 1L
        ));
    }

    @Test
    public void testIsProductRequestValid_withInvalidName() {
        assertFalse(ProductValidation.isProductRequestValid(
                "", 1L, 1L, "Valid description", "Model123", 1L
        ));
    }

    @Test
    public void testIsProductRequestValid_withInvalidBrandId() {
        assertFalse(ProductValidation.isProductRequestValid(
                "Valid Name", 0L, 1L, "Valid description", "Model123", 1L
        ));
    }

    @Test
    public void testIsProductRequestValid_withInvalidCollectionId() {
        assertFalse(ProductValidation.isProductRequestValid(
                "Valid Name", 1L, -1L, "Valid description", "Model123", 1L
        ));
    }

    @Test
    public void testIsProductRequestValid_withInvalidDescription() {
        assertFalse(ProductValidation.isProductRequestValid(
                "Valid Name", 1L, 1L, "", "Model123", 1L
        ));
    }

    @Test
    public void testIsProductRequestValid_withInvalidModelNumber() {
        assertFalse(ProductValidation.isProductRequestValid(
                "Valid Name", 1L, 1L, "Valid description", "", 1L
        ));
    }

    @Test
    public void testIsProductRequestValid_withInvalidProductTypeId() {
        assertFalse(ProductValidation.isProductRequestValid(
                "Valid Name", 1L, 1L, "Valid description", "Model123", 0L
        ));
    }

    @Test
    void downloadImageTest() throws Exception {
        String imageAddress = "https://www.filippa-k.com/dw/image/v2/BFNP_PRD/on/demandware.static/-/Sites-filippa-k-master-catalog/default/dw7759259b/hi-res/30520-0056-SS24-0115-F-20.jpg?sw=1500&sh=2250&sm=fit&sfrm=jpg";
        byte[] img = MediaManagement.downloadImageFromUrl(imageAddress);

    }
}
