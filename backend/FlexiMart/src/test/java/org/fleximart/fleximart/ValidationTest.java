package org.fleximart.fleximart;

import org.fleximart.fleximart.v1.service.product.ProductMediaService;
import org.fleximart.fleximart.v1.utils.validation.UserValidation;
import org.junit.jupiter.api.Test;

public class ValidationTest {

    @Test
    void testUploadingFile () {
        ProductMediaService productMediaService = new ProductMediaService();
    }

    @Test
    public void testValidation() {
        System.out.println(UserValidation.isValidPassword("password"));
        System.out.println(UserValidation.isValidPassword("1q2w3a$s"));
    }
}
