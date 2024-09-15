package org.fleximart.fleximart;

import org.fleximart.fleximart.v1.DTO.product.request.ProductRequest;
import org.fleximart.fleximart.v1.DTO.product.response.ProductResponse;
import org.fleximart.fleximart.v1.entity.product.Brand;
import org.fleximart.fleximart.v1.entity.product.Collection;
import org.fleximart.fleximart.v1.entity.product.Product;
import org.fleximart.fleximart.v1.exception.ProductValidationException;
import org.fleximart.fleximart.v1.exception.ResourceNotFoundException;
import org.fleximart.fleximart.v1.repository.product.BrandRepository;
import org.fleximart.fleximart.v1.repository.product.CollectionRepository;
import org.fleximart.fleximart.v1.repository.product.ProductRepository;
import org.fleximart.fleximart.v1.service.product.ProductService;
import org.fleximart.fleximart.v1.service.product.ProductVariantService;
import org.fleximart.fleximart.v1.utils.validation.ProductValidation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private BrandRepository brandRepository;

    @Mock
    private CollectionRepository collectionRepository;

    @Mock
    private ProductVariantService productVariantService;


    private ProductRequest productRequest;
    private Product product;
    private Brand brand;
    private Collection collection;

    @BeforeEach
    void setUp() {
        // Initialize mock data

        productRequest = ProductRequest.builder()
                .name("Product Name")
                .brandId(1L)
                .collectionId(1L)
                .description("Product Description")
                .modelNumber("Model123")
                .productTypeId(1L)
                .build();

        brand = Brand.builder().id(1L).name("Brand Name").build();
        collection = Collection.builder().id(1L).name("Collection Name").build();
        product = Product.builder()
                .id(1L)
                .name("Product Name")
                .description("Product Description")
                .brand(brand)
                .collection(collection)
                .modelNumber("Model123")
                .build();
    }

    // Test findById when product exists
    @Test
    public void testFindById_ProductExists() {
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        ProductResponse response = productService.findById(1L);

        assertNotNull(response);
        assertEquals("Product Name", response.getName());
        assertEquals("Product Description", response.getDescription());
        verify(productRepository, times(1)).findById(1L);
    }


    // Test findById when product does not exist
    @Test
    public void testFindById_ProductNotFound() {
        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> productService.findById(1L));
        verify(productRepository, times(1)).findById(1L);
    }

    // Test save when data is valid
    @Test
    public void testSaveProduct_Success() {
        when(brandRepository.findById(productRequest.getBrandId())).thenReturn(Optional.of(brand));
        when(collectionRepository.findById(productRequest.getCollectionId())).thenReturn(Optional.of(collection));
        when(productRepository.save(Mockito.any(Product.class))).thenReturn(product);

        ProductResponse response = productService.save(productRequest);

        assertNotNull(response);
        assertEquals("Product Name", response.getName());
        verify(productRepository, times(1)).save(Mockito.any(Product.class));
    }

    // Test save when data is invalid (ProductValidationException)
    @Test
    public void testSave_WithInvalidProductRequest_ShouldThrowValidationException() {
        // arrange
        ProductRequest invalidProductRequest = ProductRequest.builder()
                .name("")  // Invalid name
                .brandId(1L)
                .collectionId(1L)
                .description("")
                .modelNumber("")
                .productTypeId(0L)  // Invalid product type ID
                .build();

        // act and assert
        assertThrows(ProductValidationException.class, () -> productService.save(invalidProductRequest));

    }

    @Test
    public void testSave_WithValidProductRequest_ShouldReturnProductResponse() {
        // arrange
        ProductRequest validProductRequest = ProductRequest.builder()
                .name("Product Name")
                .brandId(1L)
                .collectionId(1L)
                .description("Product Description")
                .modelNumber("Model123")
                .productTypeId(1L)
                .build();

        Brand brand = Brand.builder().id(1L).name("Brand Name").build();
        Collection collection = Collection.builder().id(1L).name("Collection Name").build();
        Product product = Product.builder()
                .id(1L)
                .name("Product Name")
                .description("Product Description")
                .brand(brand)
                .collection(collection)
                .modelNumber("Model123")
                .build();

        when(brandRepository.findById(validProductRequest.getBrandId())).thenReturn(Optional.of(brand));
        when(collectionRepository.findById(validProductRequest.getCollectionId())).thenReturn(Optional.of(collection));
        when(productRepository.save(Mockito.any(Product.class))).thenReturn(product);

        // act
        ProductResponse response = productService.save(validProductRequest);

        // assert`
        assertNotNull(response);
        assertEquals("Product Name", response.getName());
        assertEquals("Product Description", response.getDescription());
        assertEquals("Model123", response.getModelNumber());
        assertEquals(1L, response.getBrand().getId());
        assertEquals("Brand Name", response.getBrand().getName());
        assertEquals(1L, response.getCollection().getId());
        assertEquals("Collection Name", response.getCollection().getName());
        assertEquals(1L, response.getProductType().getId());
    }

    // Test save when brand not found
    @Test
    public void testSaveProduct_BrandNotFound() {
        when(brandRepository.findById(productRequest.getBrandId())).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> productService.save(productRequest));
        verify(brandRepository, times(1)).findById(productRequest.getBrandId());
    }

    // Test save when collection not found
    @Test
    public void testSaveProduct_CollectionNotFound() {
        when(brandRepository.findById(productRequest.getBrandId())).thenReturn(Optional.of(brand));
        when(collectionRepository.findById(productRequest.getCollectionId())).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> productService.save(productRequest));
        verify(collectionRepository, times(1)).findById(productRequest.getCollectionId());
    }

    // Test update when product exists
    @Test
    public void testUpdateProduct_Success() {
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        when(brandRepository.findById(productRequest.getBrandId())).thenReturn(Optional.of(brand));
        when(collectionRepository.findById(productRequest.getCollectionId())).thenReturn(Optional.of(collection));
        when(productRepository.save(Mockito.any(Product.class))).thenReturn(product);

        ProductResponse response = productService.update(1L, productRequest);

        assertNotNull(response);
        assertEquals("Product Name", response.getName());
        verify(productRepository, times(1)).save(Mockito.any(Product.class));
    }

    // Test update when product not found
    @Test
    public void testUpdateProduct_ProductNotFound() {
        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> productService.update(1L, productRequest));
        verify(productRepository, times(1)).findById(1L);
    }

    // Test delete when product exists
    @Test
    public void testDeleteProduct_Success() {
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        doNothing().when(productRepository).delete(product);

        Boolean result = productService.delete(1L);

        assertTrue(result);
        verify(productRepository, times(1)).delete(product);
    }

    // Test delete when product not found
    @Test
    public void testDeleteProduct_ProductNotFound() {
        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> productService.delete(1L));
        verify(productRepository, times(1)).findById(1L);
    }
}
