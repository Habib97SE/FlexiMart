package org.fleximart.fleximart.v1.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Encryption {
    private static final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public static String encrypt(String password) {
        return bCryptPasswordEncoder.encode(password);
    }

    public static boolean match(String password, String encryptedPassword) {
        return bCryptPasswordEncoder.matches(password, encryptedPassword);
    }
}
