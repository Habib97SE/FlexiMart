package org.fleximart.fleximart.v1.service;

import org.springframework.stereotype.Service;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;

public class MediaManagement {

    public static byte[] downloadImageFromUrl (String imageUrl) throws IOException {
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
    }


}
