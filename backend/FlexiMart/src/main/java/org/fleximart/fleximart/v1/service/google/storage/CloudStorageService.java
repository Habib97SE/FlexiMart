package org.fleximart.fleximart.v1.service.google.storage;


import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;



@Service
public class CloudStorageService {
    private final Storage storage;


    public CloudStorageService() throws IOException {

        String jsonPath = "src/main/resources/flexi-mart-project-2eac8c79802a.json";
        this.storage = StorageOptions.newBuilder().setCredentials(ServiceAccountCredentials.fromStream(new FileInputStream(jsonPath)))
                .build()
                .getService();
    }

    private String createBucketUrl () {
        return "https://storage.googleapis.com/fleximart_product_media/";
    }


    public byte[] downloadFile(String url) throws IOException {
        // download file from given url
        InputStream inputStream = new URL(url).openStream();

        Path tempFile = Files.createTempFile(null, null);
        Files.copy(inputStream, tempFile, java.nio.file.StandardCopyOption.REPLACE_EXISTING);
        return Files.readAllBytes(tempFile);
    }

    public String uploadFile(String bucketName, String objectName, byte[] content) {
        String uniqueObjectName = objectName;

        // Check if the object already exists
        Blob blob = storage.get(BlobId.of(bucketName, objectName));
        if (blob != null && blob.exists()) {
            // Generate a unique name by appending a timestamp
            String timestamp = String.valueOf(Instant.now().toEpochMilli());
            int extensionIndex = objectName.lastIndexOf('.');
            if (extensionIndex > 0) {
                String nameWithoutExtension = objectName.substring(0, extensionIndex);
                String extension = objectName.substring(extensionIndex);
                uniqueObjectName = nameWithoutExtension + "_" + timestamp + extension;
            } else {
                uniqueObjectName = objectName + "_" + timestamp;
            }
        }

        // Create the BlobId and BlobInfo with the unique name
        BlobId blobId = BlobId.of(bucketName, uniqueObjectName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("image/jpeg").build();

        // Upload the file to the bucket
        blob = storage.create(blobInfo, content);

        // Get the object's name
        String name = blob.getName();
        return createBucketUrl() + name;
    }


    /**
     * Upload all sorts of images
     * @param bucketName the name of the bucket
     * @param content the content of the image
     * @return the url of the image
     */
    public String uploadImage(String bucketName, byte[] content) {
        String objectName = "image" + System.currentTimeMillis() + ".jpg";
        return uploadFile(bucketName, objectName, content);
    }


    public byte[] downloadFile(String bucketName, String objectName) {
        Blob blob = storage.get(BlobId.of(bucketName, objectName));
        return blob.getContent();
    }

    /**
     * Delete a file from the bucket by providing the bucket name and the object name
     * @param bucketName the name of the bucket
     * @param objectName the name of the object
     * @return true if the file is deleted successfully, false otherwise
     */
    public Boolean deleteFile(String bucketName, String objectName) {
        return storage.delete(BlobId.of(bucketName, objectName));
    }
}
