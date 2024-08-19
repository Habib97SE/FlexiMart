package org.fleximart.fleximart.v1.service.blog;

import org.fleximart.fleximart.v1.DTO.blog.request.PostRequest;
import org.fleximart.fleximart.v1.DTO.blog.response.PostResponse;
import org.fleximart.fleximart.v1.DTO.blog.response.TagResponse;
import org.fleximart.fleximart.v1.entity.blog.Category;
import org.fleximart.fleximart.v1.entity.blog.Post;
import org.fleximart.fleximart.v1.entity.blog.Tag;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.repository.blog.PostRepository;
import org.fleximart.fleximart.v1.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    // it's used to generate a unique slug for a post based on its title if the slug already exists
    // @See https://en.wikipedia.org/wiki/Slug_(web_publishing)
    private static final String SLUG_DATE_FORMAT = "yyyyMMddHHmmss";

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    private TagResponse mapToTagResponse(Tag tag) {
        return TagResponse.builder()
                .id(tag.getId())
                .name(tag.getName())
                .build();
    }

    private PostResponse mapToPostResponse(Post post) {
        return PostResponse.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .slug(post.getSlug())
                .mainImage(post.getMainImage())
                .tags(post.getTags().stream().map(this::mapToTagResponse).collect(Collectors.toList()))
                .createdAt(post.getCreatedAt().toString())
                .updatedAt(post.getUpdatedAt().toString())
                .build();
    }

    private List<Category> mapToCategories(List<Long> categoryIds) {
        return categoryIds.stream().map(categoryId -> Category
                .builder()
                .id(categoryId)
                .build()
        ).collect(Collectors.toList());
    }

    private Post mapToPost(PostRequest postRequest) {
        return Post.builder()
                .title(postRequest.getTitle())
                .content(postRequest.getContent())
                .slug(postRequest.getSlug())
                .mainImage(postRequest.getMainImage())
                .categories(mapToCategories(postRequest.getCategories()))
                .tags(postRequest.getTags().stream().map(tagId -> Tag.builder().id(tagId).build()).collect(Collectors.toSet()))
                .build();
    }

    private String generateUniqueSlug(String baseSlug) {
        String uniqueSlug = baseSlug;
        Optional<Post> existingPost = postRepository.findBySlug(uniqueSlug);
        if (existingPost.isPresent()) {
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern(SLUG_DATE_FORMAT));
            uniqueSlug = baseSlug + "-" + timestamp;
            existingPost = postRepository.findBySlug(uniqueSlug);
            // Optionally add a random number for additional uniqueness
            if (existingPost.isPresent()) {
                uniqueSlug = baseSlug + "-" + timestamp + "-" + new Random().nextInt(1000);
            }
        }
        return uniqueSlug;
    }

    public List<PostResponse> findAll() {
        return postRepository.findAll().stream().map(this::mapToPostResponse).collect(Collectors.toList());
    }

    public PostResponse findById(Long id) {
        return mapToPostResponse(Objects.requireNonNull(postRepository.findById(id).orElse(null)));
    }

    public List<PostResponse> findByTag(String tagName) {
        return postRepository.findByTags_Name(tagName).stream().map(this::mapToPostResponse).collect(Collectors.toList());
    }

    public List<PostResponse> findByAuthor(Long authorId) {
        return postRepository.findByAuthor_Id(authorId).stream().map(this::mapToPostResponse).collect(Collectors.toList());
    }

    public PostResponse findBySlug(String slug) {
        return mapToPostResponse(Objects.requireNonNull(postRepository.findBySlug(slug).orElse(null)));
    }

    public PostResponse create(PostRequest postRequest) {
        return mapToPostResponse(postRepository.save(mapToPost(postRequest)));
    }

    public PostResponse update(Long id, PostRequest postRequest) {
        Post post = postRepository.findById(id).orElse(null);
        if (post == null) {
            return null;
        }
        post = mapToPost(postRequest);
        return mapToPostResponse(postRepository.save(post));
    }

    public Boolean delete(Long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post == null) {
            return false;
        }
        postRepository.delete(post);
        return true;
    }


}
