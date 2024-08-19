package org.fleximart.fleximart.v1.service.blog;

import org.fleximart.fleximart.v1.DTO.blog.request.MediaRequest;
import org.fleximart.fleximart.v1.DTO.blog.response.MediaResponse;
import org.fleximart.fleximart.v1.entity.blog.Media;
import org.fleximart.fleximart.v1.repository.blog.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    public MediaService(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    private List<MediaResponse> mapToResponse(List<Media> mediaList) {
        return mediaList.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private MediaResponse mapToResponse(Media media) {
        return MediaResponse.builder()
                .id(media.getId())
                .mediaUrl(media.getMediaUrl())
                .mediaAlt(media.getMediaAlt())
                .mediaType(media.getMediaType())
                .build();
    }

    private Media mapToEntity(Media media, MediaRequest mediaRequest) {
        media.setMediaUrl(mediaRequest.getMediaUrl());
        media.setMediaAlt(mediaRequest.getMediaAlt());
        media.setMediaType(mediaRequest.getMediaType());
        return media;
    }

    public List<MediaResponse> findAll() {
        return mapToResponse(mediaRepository.findAll());
    }

    public MediaResponse findById(Long id) {
        return mapToResponse(Objects.requireNonNull(mediaRepository.findById(id).orElse(null)));
    }

    public MediaResponse save(MediaRequest mediaRequest) {
        Media media = new Media();
        media = mapToEntity(media, mediaRequest);
        return mapToResponse(mediaRepository.save(media));
    }

    public MediaResponse update(Long id, MediaRequest mediaRequest) {
        Media media = Objects.requireNonNull(mediaRepository.findById(id).orElse(null));
        media = mapToEntity(media, mediaRequest);
        return mapToResponse(mediaRepository.save(media));
    }

    public boolean delete(Long id) {
        try {
            mediaRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

}
