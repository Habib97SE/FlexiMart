package org.fleximart.fleximart.v1.utils;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class Helper {

    // static method to generate unique slug based on the date in yyyy-MM-dd format
    public static String generateSlug(String slug) {
        String uniqueSlug = slug;
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        uniqueSlug = slug + "-" + timestamp;
        return uniqueSlug;
    }
}
