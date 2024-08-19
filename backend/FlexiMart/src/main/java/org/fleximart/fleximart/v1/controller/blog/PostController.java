package org.fleximart.fleximart.v1.controller.blog;

import org.fleximart.fleximart.v1.DTO.blog.request.PostRequest;
import org.fleximart.fleximart.v1.service.blog.PostService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/blog/posts")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll () {
        return ResponseHandler.generateResponse(
                "All posts fetched successfully",
                200,
                postService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById (Long id) {
        return ResponseHandler.generateResponse(
                "Post fetched successfully",
                200,
                postService.findById(id),
                false
        );
    }

    @GetMapping("/tag/{tagName}")
    public ResponseEntity<Object> findByTagName (@PathVariable String tagName) {
        return ResponseHandler.generateResponse(
                "Posts fetched successfully",
                200,
                postService.findByTag(tagName),
                false
        );
    }

    @GetMapping("/author/{authorId}")
    public ResponseEntity<Object> findByAuthorId (@PathVariable Long authorId) {
        return ResponseHandler.generateResponse(
                "Posts fetched successfully",
                200,
                postService.findByAuthor(authorId),
                false
        );
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Object> findBySlug (@PathVariable String slug) {
        return ResponseHandler.generateResponse(
                "Post fetched successfully",
                200,
                postService.findBySlug(slug),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> create (@RequestBody PostRequest postRequest) {
        return ResponseHandler.generateResponse(
                "Post created successfully",
                201,
                postService.create(postRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update (@PathVariable Long id, @RequestBody PostRequest postRequest) {
        return ResponseHandler.generateResponse(
                "Post updated successfully",
                200,
                postService.update(id, postRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete (@PathVariable Long id) {
        postService.delete(id);
        return ResponseHandler.generateResponse(
                "Post deleted successfully",
                200,
                null,
                true
        );
    }



}
