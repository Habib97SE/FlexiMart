package org.fleximart.fleximart;

import org.fleximart.fleximart.v1.entity.blog.Media;
import org.fleximart.fleximart.v1.service.MediaManagement;
import org.fleximart.fleximart.v1.service.google.storage.CloudStorageService;
import org.fleximart.fleximart.v1.service.product.ProductMediaService;
import org.fleximart.fleximart.v1.utils.validation.UserValidation;
import org.junit.jupiter.api.Test;

public class ValidationTest {

    @Test
    void testUploadingFile () {
        try {
            byte[] image = MediaManagement.downloadImageFromUrl("https://via.placeholder.com/");
            CloudStorageService cloudStorageService = new CloudStorageService();
            String url = cloudStorageService.uploadFile("fleximart_product_media", "placeholder.jpg", image);
            System.out.println(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testValidation() {
        System.out.println(UserValidation.isValidPassword("password"));
        System.out.println(UserValidation.isValidPassword("1q2w3a$s"));
    }
}
