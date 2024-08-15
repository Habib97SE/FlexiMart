package org.fleximart.fleximart.v1.service.product;

import org.fleximart.fleximart.v1.DTO.product.request.CollectionRequest;
import org.fleximart.fleximart.v1.DTO.product.response.CollectionResponse;
import org.fleximart.fleximart.v1.entity.product.Collection;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.fleximart.fleximart.v1.repository.product.CollectionRepository;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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


    public ResponseEntity<Object> save(CollectionRequest collectionRequest) {
        Collection collection = Collection.builder()
                .name(collectionRequest.getName())
                .description(collectionRequest.getDescription())
                .build();
        collectionRepository.save(collection);
        return ResponseHandler.generateResponse(
                "Collection created successfully",
                201,
                createCollectionResponse(collection),
                false
        );
    }

    public ResponseEntity<Object> update(Long id, CollectionRequest collectionRequest) {
        return collectionRepository.findById(id)
                .map(collection -> {
                    collection.setName(collectionRequest.getName());
                    collection.setDescription(collectionRequest.getDescription());
                    collectionRepository.save(collection);
                    return ResponseHandler.generateResponse(
                            "Collection updated successfully",
                            200,
                            createCollectionResponse(collection),
                            false);
                })
                .orElseGet(() -> ResponseHandler.generateResponse(
                        "Collection not found",
                        404,
                        null,
                        true));
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
