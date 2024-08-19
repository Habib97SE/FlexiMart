package org.fleximart.fleximart.v1.controller.blog;

import org.fleximart.fleximart.v1.DTO.blog.request.MediaRequest;
import org.fleximart.fleximart.v1.service.blog.MediaService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/blog/media")
public class MediaController {

    private final MediaService mediaService;

    @Autowired
    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "All media fetched successfully.",
                200,
                mediaService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Media fetched successfully.",
                200,
                mediaService.findById(id),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody MediaRequest mediaRequest) {
        return ResponseHandler.generateResponse(
                "Media saved successfully.",
                200,
                mediaService.save(mediaRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody MediaRequest mediaRequest) {
        return ResponseHandler.generateResponse(
                "Media updated successfully.",
                200,
                mediaService.update(id, mediaRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        mediaService.delete(id);
        return ResponseHandler.generateResponse(
                "Media deleted successfully.",
                200,
                null,
                false
        );
    }


}
