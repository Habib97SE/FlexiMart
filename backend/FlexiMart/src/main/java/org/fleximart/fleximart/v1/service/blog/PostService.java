package org.fleximart.fleximart.v1.service.blog;

import org.fleximart.fleximart.v1.entity.blog.Post;
import org.fleximart.fleximart.v1.repository.blog.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }



}
