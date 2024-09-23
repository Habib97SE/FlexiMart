package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.CollectionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.CollectionResponse;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.entity.product.Collection;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.fleximart.fleximart.v1.repository.product.CollectionRepository;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service class for Collection
 */
@Service
public class CollectionService {

    @Autowired
    private CollectionRepository collectionRepository;

    public CollectionService(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }

    private CollectionResponse createCollectionResponse(Collection collection) {
        return CollectionResponse.builder()
                .id(collection.getId())
                .name(collection.getName())
                .description(collection.getDescription())
                .slug(collection.getSlug())
                .collectionImage(collection.getCollectionImage())
                .createdAt(collection.getCreatedAt().toString())
                .updatedAt(collection.getUpdatedAt().toString())
                .build();
    }

    private Collection mapCollectionRequestToCollection(CollectionRequest collectionRequest) {
        return Collection.builder()
                .name(collectionRequest.getName())
                .description(collectionRequest.getDescription())
                .slug(collectionRequest.getSlug())
                .collectionImage(collectionRequest.getCollectionImage())
                .build();
    }

    private List<CollectionResponse> createCollectionResponseList(List<Collection> collections) {
        List<CollectionResponse> collectionResponses = new ArrayList<>();
        for (Collection collection : collections) {
            collectionResponses.add(createCollectionResponse(collection));
        }
        return collectionResponses;
    }

    public List<CollectionResponse> findAll() {
        return collectionRepository.findAll().stream()
                .map(this::createCollectionResponse)
                .toList();
    }

    public CollectionResponse findById(Long id) {
        return collectionRepository.findById(id)
                .map(this::createCollectionResponse)
                .orElseThrow(() -> new ResourceNotFoundException("Collection not found"));
    }

    public CollectionResponse findBySlug(String slug) {
        Collection collection = collectionRepository.findBySlug(slug);
        if (collection == null) {
            throw new ResourceNotFoundException("Collection not found");
        }

        return createCollectionResponse(collection);
    }


    public ResponseEntity<Object> save(CollectionRequest collectionRequest) {
        System.out.println(collectionRequest.getSlug());
        if (collectionRequest.getSlug().isEmpty()) {
            collectionRequest.setSlug(collectionRequest.getName().toLowerCase().replace(" ", "-"));
        }

        try {
            Collection collection = mapCollectionRequestToCollection(collectionRequest);
            collection = collectionRepository.save(collection);

            return ResponseHandler.generateResponse(
                    "Collection saved successfully",
                    201,
                    createCollectionResponse(collection),
                    false
            );

        } catch (Exception e) {
            return ResponseHandler.generateResponse(
                    "Collection not saved",
                    500,
                    null,
                    true
            );
        }

    }

    public ResponseEntity<Object> update(Long id, CollectionRequest collectionRequest) {
        if (collectionRequest.getSlug().isEmpty()) {
            collectionRequest.setSlug(collectionRequest.getName().toLowerCase().replace(" ", "-"));
        }
        Collection collection = mapCollectionRequestToCollection(collectionRequest);

        try {
            collection.setId(id);
            collection = collectionRepository.save(collection);
            return ResponseHandler.generateResponse(
                    "Collection updated successfully",
                    200,
                    createCollectionResponse(collection),
                    false
            );
        } catch (ResourceNotFoundException e) {
            return ResponseHandler.generateResponse(
                    "Collection not found",
                    404,
                    null,
                    true
            );
        }





    }


    public ResponseEntity<Object> delete(Long id) {
        return collectionRepository.findById(id)
                .map(collection -> {
                    collectionRepository.delete(collection);
                    return ResponseHandler.generateResponse(
                            "Collection deleted successfully",
                            200,
                            null,
                            false);
                })
                .orElseGet(() -> ResponseHandler.generateResponse(
                        "Collection not found",
                        404,
                        null,
                        true));
    }



}
