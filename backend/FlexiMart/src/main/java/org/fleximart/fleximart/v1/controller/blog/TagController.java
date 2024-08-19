package org.fleximart.fleximart.v1.controller.blog;

import org.fleximart.fleximart.v1.service.blog.TagService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/blog/tags")
public class TagController {

    private final TagService tagService;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll () {
        return ResponseHandler.generateResponse(
                "All tags fetched successfully",
                200,
                tagService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById (Long id) {
        return ResponseHandler.generateResponse(
                "Tag fetched successfully",
                200,
                tagService.findById(id),
                false
        );
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Object> findByName (String name) {
        return ResponseHandler.generateResponse(
                "Tag fetched successfully",
                200,
                tagService.findByName(name),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> create (String name) {
        return ResponseHandler.generateResponse(
                "Tag created successfully",
                201,
                tagService.create(name),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update (@PathVariable Long id, @RequestBody String name) {
        return ResponseHandler.generateResponse(
                "Tag updated successfully",
                200,
                tagService.update(id, name),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete (@PathVariable Long id) {
        tagService.delete(id);
        return ResponseHandler.generateResponse(
                "Tag deleted successfully",
                200,
                null,
                true
        );
    }

}
