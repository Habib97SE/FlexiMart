package org.fleximart.fleximart.v1.service.blog;

import org.fleximart.fleximart.v1.DTO.blog.request.CategoryRequest;
import org.fleximart.fleximart.v1.DTO.blog.response.CategoryResponse;
import org.fleximart.fleximart.v1.DTO.blog.response.PostResponse;
import org.fleximart.fleximart.v1.DTO.blog.response.TagResponse;
import org.fleximart.fleximart.v1.entity.blog.Category;
import org.fleximart.fleximart.v1.entity.blog.Post;
import org.fleximart.fleximart.v1.entity.blog.Tag;
import org.fleximart.fleximart.v1.repository.blog.CategpryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategpryRepository categpryRepository;

    public CategoryService(CategpryRepository categpryRepository) {
        this.categpryRepository = categpryRepository;
    }

    private List<TagResponse> mapTagsToResponse (Set<Tag> tags) {
        return tags.stream()
                .map(tag -> TagResponse.builder()
                        .id(tag.getId())
                        .name(tag.getName())
                        .build())
                .collect(Collectors.toList());
    }

    private List<PostResponse> mapPostsToResponse (Set<Post> posts) {
        return posts.stream()
                .map(post -> PostResponse.builder()
                        .id(post.getId())
                        .title(post.getTitle())
                        .content(post.getContent())
                        .mainImage(post.getMainImage())
                        .slug(post.getSlug())
                        .tags(mapTagsToResponse(post.getTags()))
                        .build())
                .collect(Collectors.toList());
    }

    private CategoryResponse mapToResponse (Category category) {
        return CategoryResponse.builder()
                .id(category.getId())
                .name(category.getName())
                .description(category.getDescription())
                .mainImageUrl(category.getMainImageUrl())
                .mainImageAlt(category.getMainImageAlt())
                .slug(category.getSlug())
                .posts(mapPostsToResponse(category.getPosts()))
                .build();
    }

    private Category mapToEntity (CategoryRequest categoryRequest) {
        return Category.builder()
                .name(categoryRequest.getName())
                .description(categoryRequest.getDescription())
                .mainImageUrl(categoryRequest.getMainImageUrl())
                .mainImageAlt(categoryRequest.getMainImageAlt())
                .slug(categoryRequest.getSlug())
                .build();
    }

    public List<CategoryResponse> findAll () {
        List<Category> categories = categpryRepository.findAll();
        return categories.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }


    public CategoryResponse findById (Long id) {
        Category category = categpryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found."));
        return mapToResponse(category);
    }

    public CategoryResponse save (CategoryRequest categoryRequest) {
        Category category = mapToEntity(categoryRequest);
        category = categpryRepository.save(category);
        return mapToResponse(category);
    }

    public CategoryResponse update (Long id, CategoryRequest categoryRequest) {
        Category category = categpryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found."));
        category = mapToEntity(categoryRequest);
        category = categpryRepository.save(category);
        return mapToResponse(category);
    }

    public boolean delete (Long id) {
        Category category = categpryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found."));
        categpryRepository.delete(category);
        return true;
    }

}
