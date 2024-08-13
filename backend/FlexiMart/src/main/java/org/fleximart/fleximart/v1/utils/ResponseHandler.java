package org.fleximart.fleximart.v1.utils;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseHandler {

    public static ResponseEntity<Object> generateResponse(
            String message,
            int statusCode,
            Object responseObject,
            boolean error) {
        Map<String, Object> map = new HashMap<>();
        map.put("message", message);
        map.put("status", statusCode);
        map.put("error", error);
        map.put("data", responseObject);
        return new ResponseEntity<Object>(map, HttpStatusCode.valueOf(200));
    }
}
