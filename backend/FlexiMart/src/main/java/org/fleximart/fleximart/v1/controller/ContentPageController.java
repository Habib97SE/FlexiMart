package org.fleximart.fleximart.v1.controller;

import org.fleximart.fleximart.v1.entity.ContentPage;
import org.fleximart.fleximart.v1.service.ContentPageService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/content-page")
public class ContentPageController {

    private ContentPageService contentPageService;

    @Autowired
    public ContentPageController(ContentPageService contentPageService) {
        this.contentPageService = contentPageService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "Content pages retrieved successfully",
                200,
                contentPageService.findAll(),
                false
        );
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Object> findBySlug(@PathVariable String slug) {
        ContentPage contentPage = contentPageService.findBySlug(slug);
        if (contentPage == null) {
            return ResponseHandler.generateResponse(
                    "Content page not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Content page retrieved successfully",
                200,
                contentPage,
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        ContentPage contentPage = contentPageService.findById(id);
        if (contentPage == null) {
            return ResponseHandler.generateResponse(
                    "Content page not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Content page retrieved successfully",
                200,
                contentPage,
                false
        );
    }

    @GetMapping("/unpublish/{id}")
    public ResponseEntity<Object> unpublishContentPage(@PathVariable Long id) {
        Boolean isUnpublished = contentPageService.unpublishContentPage(id);
        if (!isUnpublished) {
            return ResponseHandler.generateResponse(
                    "Content page not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Content page unpublished successfully",
                200,
                null,
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody ContentPage contentPage) {
        return ResponseHandler.generateResponse(
                "Content page saved successfully",
                201,
                contentPageService.save(contentPage),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody ContentPage contentPage) {
        ContentPage updatedContentPage = contentPageService.update(id, contentPage);
        if (updatedContentPage == null) {
            return ResponseHandler.generateResponse(
                    "Content page not found",
                    404,
                    null,
                    true
            );
        }
        return ResponseHandler.generateResponse(
                "Content page updated successfully",
                200,
                updatedContentPage,
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        contentPageService.delete(id);
        return ResponseHandler.generateResponse(
                "Content page deleted successfully",
                200,
                null,
                false
        );
    }

}
