package org.fleximart.fleximart.v1.service.blog;

import org.fleximart.fleximart.v1.repository.blog.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    public MediaService(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
}
