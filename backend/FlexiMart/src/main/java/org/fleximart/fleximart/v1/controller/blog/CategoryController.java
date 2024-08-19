package org.fleximart.fleximart.v1.controller.blog;

import org.fleximart.fleximart.v1.DTO.blog.request.CategoryRequest;
import org.fleximart.fleximart.v1.service.blog.CategoryService;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/blog/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseHandler.generateResponse(
                "All categories fetched successfully.",
                200,
                categoryService.findAll(),
                false
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseHandler.generateResponse(
                "Category fetched successfully.",
                200,
                categoryService.findById(id),
                false
        );
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody CategoryRequest categoryRequest) {
        return ResponseHandler.generateResponse(
                "Category saved successfully.",
                200,
                categoryService.save(categoryRequest),
                false
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody CategoryRequest categoryRequest) {
        return ResponseHandler.generateResponse(
                "Category updated successfully.",
                200,
                categoryService.update(id, categoryRequest),
                false
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        boolean result = categoryService.delete(id);
        if (result) {
            return ResponseHandler.generateResponse(
                    "Category deleted successfully.",
                    200,
                    null,
                    false
            );
        }
        return ResponseHandler.generateResponse(
                "Category not found.",
                404,
                null,
                true
        );

    }
}
