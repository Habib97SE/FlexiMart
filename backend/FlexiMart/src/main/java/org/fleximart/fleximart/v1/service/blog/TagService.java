package org.fleximart.fleximart.v1.service.blog;

import org.fleximart.fleximart.v1.DTO.blog.response.TagResponse;
import org.fleximart.fleximart.v1.entity.blog.Tag;
import org.fleximart.fleximart.v1.repository.blog.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    private TagResponse mapToResponse(Tag tag) {
        return new TagResponse(
                tag.getId(),
                tag.getName()
        );
    }

    public List<TagResponse> findAll() {
        return tagRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TagResponse findById(Long id) {
        return mapToResponse(tagRepository.findById(id).orElse(null));
    }

    public TagResponse findByName(String name) {
        return mapToResponse(tagRepository.findByName(name));
    }

    public TagResponse create(String name) {
        Tag tag = new Tag();
        tag.setName(name);
        return mapToResponse(tagRepository.save(tag));
    }

    public TagResponse update(Long id, String name) {
        Tag tag = tagRepository.findById(id).orElse(null);
        if (tag != null) {
            tag.setName(name);
            return mapToResponse(tagRepository.save(tag));
        }
        return null;
    }

    public void delete(Long id) {
        tagRepository.deleteById(id);
    }


}
