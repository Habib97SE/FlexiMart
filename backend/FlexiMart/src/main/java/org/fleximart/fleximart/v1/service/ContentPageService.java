package org.fleximart.fleximart.v1.service;

import org.fleximart.fleximart.v1.entity.ContentPage;
import org.fleximart.fleximart.v1.repository.ContentPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.fleximart.fleximart.v1.utils.Helper;

import java.util.List;

@Service
public class ContentPageService {

    @Autowired
    private ContentPageRepository contentPageRepository;

    public ContentPageService(ContentPageRepository contentPageRepository) {
        this.contentPageRepository = contentPageRepository;
    }

    public ContentPage findById(Long id) {
        return contentPageRepository.findById(id).orElse(null);
    }

    public ContentPage findBySlug(String slug) {
        return contentPageRepository.findBySlug(slug);
    }

    public List<ContentPage> findAll() {
        return contentPageRepository.findAll();
    }

    public ContentPage save(ContentPage contentPage) {
        ContentPage existingContentPage = contentPageRepository.findBySlug(contentPage.getSlug());
        // Check if the slug already exists, if yes, then make slug unique
        if (existingContentPage != null) {
            contentPage.setSlug(Helper.generateSlug(contentPage.getSlug()));
        }
        return contentPageRepository.save(contentPage);
    }

    public Boolean unpublishContentPage(Long contentPageId) {
        ContentPage contentPage = contentPageRepository.findById(contentPageId).orElse(null);
        if (contentPage == null) {
            return false;
        }
        try {
            contentPage.setIsPublished(false);
            contentPageRepository.save(contentPage);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

    public ContentPage update(Long contentPageId, ContentPage contentPage) {
        ContentPage existingContentPage = contentPageRepository.findById(contentPageId).orElse(null);
        if (existingContentPage == null) {
            return null;
        }

        // Check if the slug already exists, if yes, then make slug unique
        ContentPage contentPage1 = contentPageRepository.findBySlug(contentPage.getSlug());
        if (contentPage1 != null && !contentPage1.getId().equals(contentPageId)) {
            contentPage.setSlug(Helper.generateSlug(contentPage.getSlug()));
        }

        // Update the existing content page
        return contentPageRepository.save(contentPage);
    }

    public void delete(Long id) {
        contentPageRepository.deleteById(id);
    }
}
