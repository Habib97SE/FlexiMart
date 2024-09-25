package org.fleximart.fleximart.v1.service;

import org.fleximart.fleximart.v1.service.google.storage.CloudStorageService;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;

public class MediaManagement {

    public static byte[] downloadImageFromUrl (String imageUrl) throws Exception {
        try {
            URL url = new URL(imageUrl);
            InputStream in = new BufferedInputStream(url.openStream());
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[1024];
            int n = 0;
            while (-1 != (n=in.read(buf))) {
                out.write(buf, 0, n);
            }
            out.close();
            in.close();
            return out.toByteArray();
        } catch (FileNotFoundException e) {
            throw new FileNotFoundException("Image not found");
        } catch (MalformedURLException e) {
            throw new MalformedURLException("Invalid URL");
        } catch (IOException e) {
            throw new IOException("Error downloading image");
        } catch (Exception e) {
            throw new Exception("Error downloading image");
        }
    }


    public static String uploadToGoogleCloudStorage(String bucketName, String objectName, byte[] imageFile) {
        try {
            // Upload the image to google cloud storage
            CloudStorageService cloudStorageService = new CloudStorageService();
            String url = cloudStorageService.uploadFile(bucketName, objectName, imageFile);
            System.out.println("The url is: " + url);
            return url;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
    }

    public static Boolean deleteFromGoogleCloudStorage(String objectName) {
        try {
            CloudStorageService cloudStorageService = new CloudStorageService();
            cloudStorageService.deleteFile("fleximart_product_media", objectName);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }


}
