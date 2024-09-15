# API endpoints

The backend endpoints are designed to efficiently manage products and their variants, promotions, discounts, and shipping options. The platform is modular, allowing for flexible customization and expansion, making it suitable for a wide variety of online businesses.

Each version of the APIs is prefixed with `/api/v1/` and located in the respective folder in the project directory (e.g. v1, v2 etc).

-   [Content page](#content-page)
-   [Wishlist](#wishlist)
-   [Variant Options](#variant-options)
-   [Variant Group](#variant-group)
-   [User](#user)
-   [Shipping Provider](#shipping-provider)
-   [Review](#review)
-   [Product](#product)
-   [Product Type](#product-type)
-   [Payment Method](#payment-method)
-   [Order](#order)
-   [Collection](#collection)
-   [Brand](#brand)
-   [Tag](#tag)
-   [Blog Post](#blog-post)
-   [Blog Category](#blog-category)
-   [Blog Media](#blog-media)
-   [Authentication](#authentication)
-   [Address](#address)

## Content page:

The following endpoints can be used to create, update, delete and retrieve content pages. A content page is a static page that can be used to display information about the store, products, or any other content, e.g. About Us, Contact Us, etc.

-   GET `/api/v1/content-pages` - Get all content pages
-   GET `/api/v1/content-pages/:id` - Get a single content page
-   POST `/api/v1/content-pages` - Create a new content page
-   PUT `/api/v1/content-pages/:id` - Update a content page
-   DELETE `/api/v1/content-pages/:id` - Delete a content page
-   GET `/api/v1/content-pages/:slug` - Get a single content page by slug
-   GET `/api/v1/content-pages/unpublish/:id` - Unpublish a content page

## Wishlist:

To create, update, delete and retrieve wishlists. A wishlist is a list of products that a user wants to save for later or share with others.

Wishlists data can be retrieved either by user or by wishlist id.

-   GET `/api/v1/wishlists` - Get all wishlists
-   GET `/api/v1/wishlists/:id` - Get a single wishlist
-   POST `/api/v1/wishlists` - Create a new wishlist
-   PUT `/api/v1/wishlists/:id` - Update a wishlist
-   DELETE `/api/v1/wishlists/:id` - Delete a wishlist
-   GET `/api/v1/wishlists/:id/items` - Get all items in a wishlist
-   GET `/api/v1/wishlists/:id/items/:itemId` - Get a single item in a wishlist
-   POST `/api/v1/wishlists/:id/items` - Add an item to a wishlist
-   DELETE `/api/v1/wishlists/:id/items/:itemId` - Remove an item from a wishlist

## Variant Options:

To create, update, delete and retrieve variant options. A variant option is a specific attribute of a product variant, e.g. color, size, etc.

-   GET `/api/v1/variant-options` - Get all variant options
-   GET `/api/v1/variant-options/:id` - Get a single variant option
-   POST `/api/v1/variant-options` - Create a new variant option
-   PUT `/api/v1/variant-options/:id` - Update a variant option
-   DELETE `/api/v1/variant-options/:id` - Delete a variant option

## Variant Group:

Each variant option is part of a variant group. A variant group is a collection of related variant options, e.g. color group, size group, etc.

-   GET `/api/v1/variant-groups` - Get all variant groups
-   GET `/api/v1/variant-groups/:id` - Get a single variant group
-   POST `/api/v1/variant-groups` - Create a new variant group
-   PUT `/api/v1/variant-groups/:id` - Update a variant group
-   DELETE `/api/v1/variant-groups/:id` - Delete a variant group

## User:

-   GET `/api/v1/users` - Get all users
-   GET `/api/v1/users/:id` - Get a single user
-   POST `/api/v1/users` - Create a new user
-   PUT `/api/v1/users/:id` - Update a user
-   DELETE `/api/v1/users/:id` - Delete a user

## Shipping Provider:

-   GET `/api/v1/shipping-providers` - Get all shipping providers
-   GET `/api/v1/shipping-providers/:id` - Get a single shipping provider
-   POST `/api/v1/shipping-providers` - Create a new shipping provider
-   PUT `/api/v1/shipping-providers/:id` - Update a shipping provider
-   DELETE `/api/v1/shipping-providers/:id` - Delete a shipping provider
-   GET `/api/v1/shipping-providers/:id/shipping-methods` - Get all shipping methods of a shipping provider
-   GET `/api/v1/shipping-providers/:id/shipping-methods/:methodId` - Get a single shipping method of a shipping provider
-   POST `/api/v1/shipping-providers/:id/shipping-methods` - Create a new shipping method for a shipping provider
-   PUT `/api/v1/shipping-providers/:id/shipping-methods/:methodId` - Update a shipping method of a shipping provider
-   DELETE `/api/v1/shipping-providers/:id/shipping-methods/:methodId` - Delete a shipping method of a shipping provider

## Review:

You can create, update, delete and retrieve reviews. A review is a user's opinion or feedback on a product.

-   GET `/api/v1/reviews` - Get all reviews
-   GET `/api/v1/reviews/:id` - Get a single review
-   POST `/api/v1/reviews` - Create a new review
-   PUT `/api/v1/reviews/:id` - Update a review
-   DELETE `/api/v1/reviews/:id` - Delete a review
-   GET `/api/v1/reviews/product/:productId` - Get all reviews of a product
-   GET `/api/v1/reviews/user/:userId` - Get all reviews of a user

## Product:

-   GET `/api/v1/products/{productId}` : Retrieve details of a specific product by its ID.

-   PUT `/api/v1/products/{productId}` : Update details of a specific product by its ID.

-   DELETE `/api/v1/products/{productId}` : Delete a specific product by its ID.

-   GET `/api/v1/products/{productId}/product-variants/{productVariantId}` : Retrieve details of a specific product variant by its ID.

-   PUT `/api/v1/products/{productId}/product-variants/{productVariantId}` : Update details of a specific product variant by its ID.

-   DELETE `/api/v1/products/{productId}/product-variants/{productVariantId}` : Delete a specific product variant by its ID.

-   GET `/api/v1/products/{productId}/product-variants/{productVariantId}/inventory` : Retrieve inventory details of a specific product variant.

-   PUT `/api/v1/products/{productId}/product-variants/{productVariantId}/inventory` : Update the inventory details of a specific product variant.

-   POST `/api/v1/products/{productId}/product-variants/{productVariantId}/inventory` : Create or add new inventory details for a specific product variant.

-   DELETE `/api/v1/products/{productId}/product-variants/{productVariantId}/inventory` : Delete inventory details of a specific product variant.

-   GET `/api/v1/products` : Retrieve a list of all products.

-   POST `/api/v1/products` : Create a new product.

-   GET `/api/v1/products/{productId}/product-variants` : Retrieve a list of all product variants for a specific product.

-   POST `/api/v1/products/{productId}/product-variants` : Create a new product variant for a specific product.

-   POST `/api/v1/products/{productId}/product-variants/{productVariantId}/product-media` : Upload new media (e.g., images, videos) for a specific product variant.

-   GET `/api/v1/products/{productId}/product-variants/{productVariantId}/product-media` : Retrieve a list of all media associated with a specific product variant.

-   GET `/api/v1/products/{productId}/product-variants/{productVariantId}/product-media/{productMediaId}` : Retrieve details of a specific media item associated with a product variant.

## Product Type:

-   GET `/api/v1/product-types` : Retrieve a list of all product types.
-   GET `/api/v1/product-types/{productTypeId}` : Retrieve details of a specific product type by its ID.
-   POST `/api/v1/product-types` : Create a new product type.
-   PUT `/api/v1/product-types/{productTypeId}` : Update details of a specific product type by its ID.
-   DELETE `/api/v1/product-types/{productTypeId}` : Delete a specific product type by its ID.

## Payment Method:

-   GET `/api/v1/payment-methods` : Retrieve a list of all payment methods.
-   GET `/api/v1/payment-methods/{paymentMethodId}` : Retrieve details of a specific payment method by its ID.
-   POST `/api/v1/payment-methods` : Create a new payment method.
-   PUT `/api/v1/payment-methods/{paymentMethodId}` : Update details of a specific payment method by its ID.
-   DELETE `/api/v1/payment-methods/{paymentMethodId}` : Delete a specific payment method by its ID.

## Order:

-   GET `/api/v1/orders/{orderId}` : Retrieve details of a specific order by its ID.

-   PUT `/api/v1/orders/{orderId}` : Update details of a specific order by its ID.

-   DELETE `/api/v1/orders/{orderId}` : Delete a specific order by its ID.

-   GET `/api/v1/orders/{orderId}/shipping` : Retrieve shipping information for a specific order.

-   PUT `/api/v1/orders/{orderId}/shipping` : Update shipping information for a specific order.

-   POST `/api/v1/orders/{orderId}/shipping` : Create or add new shipping information for a specific order.

-   DELETE `/api/v1/orders/{orderId}/shipping` : Delete shipping information for a specific order.

-   GET `/api/v1/orders/{orderId}/orderItems/{orderItemId}` : Retrieve details of a specific order item within an order.

-   PUT `/api/v1/orders/{orderId}/orderItems/{orderItemId}` : Update details of a specific order item within an order.

-   DELETE `/api/v1/orders/{orderId}/orderItems/{orderItemId}` : Delete a specific order item from an order.

-   GET `/api/v1/orders` : Retrieve a list of all orders.

-   POST `/api/v1/orders` : Create a new order.

-   GET `/api/v1/orders/{orderId}/orderItems` : Retrieve a list of all order items for a specific order.

-   POST `/api/v1/orders/{orderId}/orderItems` : Add new items to an existing order.

-   GET `/api/v1/orders/user/{userId}` : Retrieve all orders placed by a specific user.

## Collection:

-   GET `/api/v1/collections` : Retrieve a list of all collections.
-   GET `/api/v1/collections/{collectionId}` : Retrieve details of a specific collection by its ID.
-   POST `/api/v1/collections` : Create a new collection.
-   PUT `/api/v1/collections/{collectionId}` : Update details of a specific collection by its ID.
-   DELETE `/api/v1/collections/{collectionId}` : Delete a specific collection by its ID.

## Brand:

-   GET `/api/v1/brands` : Retrieve a list of all brands.
-   GET `/api/v1/brands/{brandId}` : Retrieve details of a specific brand by its ID.
-   POST `/api/v1/brands` : Create a new brand.
-   PUT `/api/v1/brands/{brandId}` : Update details of a specific brand by its ID.
-   DELETE `/api/v1/brands/{brandId}` : Delete a specific brand by its ID.

## Tag:

-   GET `/api/v1/blogs/tags` : Retrieve a list of all tags.
-   GET `/api/v1/blogs/tags/{tagId}` : Retrieve details of a specific tag by its ID.
-   POST `/api/v1/blogs/tags` : Create a new tag.
-   PUT `/api/v1/blogs/tags/{tagId}` : Update details of a specific tag by its ID.
-   DELETE `/api/v1/blogs/tags/{tagId}` : Delete a specific tag by its ID.

## Blog Post:

-   GET `/api/v1/blogs/posts` : Retrieve a list of all blog posts.
-   GET `/api/v1/blogs/posts/{postId}` : Retrieve details of a specific blog post by its ID.
-   GET `/api/v1/blogs/posts/tag/{tagId}` : Retrieve a list of all blog posts associated with a specific tag.
-   GET `/api/v1/blogs/posts/slug/{slug}` : Retrieve details of a specific blog post by its slug.
-   POST `/api/v1/blogs/posts` : Create a new blog post.
-   PUT `/api/v1/blogs/posts/{postId}` : Update details of a specific blog post by its ID.
-   DELETE `/api/v1/blogs/posts/{postId}` : Delete a specific blog post by its ID.

## Blog Category:

-   GET `/api/v1/blogs/categories` : Retrieve a list of all blog categories.
-   GET `/api/v1/blogs/categories/{categoryId}` : Retrieve details of a specific blog category by its ID.
-   POST `/api/v1/blogs/categories` : Create a new blog category.
-   PUT `/api/v1/blogs/categories/{categoryId}` : Update details of a specific blog category by its ID.
-   DELETE `/api/v1/blogs/categories/{categoryId}` : Delete a specific blog category by its ID.

## Blog media:

-   GET `/api/v1/blogs/posts/{postId}/media` : Retrieve a list of all media associated with a specific blog post.
-   GET `/api/v1/blogs/posts/{postId}/media/{mediaId}` : Retrieve details of a specific media item associated with a blog post.
-   POST `/api/v1/blogs/posts/{postId}/media` : Upload new media (e.g., images, videos) for a specific blog post.
-   DELETE `/api/v1/blogs/posts/{postId}/media/{mediaId}` : Delete a specific media item associated with a blog post.
-   PUT `/api/v1/blogs/posts/{postId}/media/{mediaId}` : Update details of a specific media item associated with a blog post.

## Authentication:

-   POST `/api/v1/auth/user` : Authenticate a user.
-   POST `/api/v1/auth/admin` : Authenticate an admin user.

## Address:

-   GET `/api/v1/addresses` : Retrieve a list of all addresses.
-   GET `/api/v1/addresses/{addressId}` : Retrieve details of a specific address by its ID.
-   POST `/api/v1/addresses` : Create a new address.
-   PUT `/api/v1/addresses/{addressId}` : Update details of a specific address by its ID.
-   DELETE `/api/v1/addresses/{addressId}` : Delete a specific address by its ID.
-   GET `/api/v1/addresses/user/{userId}` : Retrieve a list of all addresses associated with a specific user.
-   GET `/api/v1/addresses/types` : Retrieve a list of all address types.
-   GET `/api/v1/addresses/types/{typeId}` : Retrieve details of a specific address type by its ID.
-   POST `/api/v1/addresses/types` : Create a new address type.
-   PUT `/api/v1/addresses/types/{typeId}` : Update details of a specific address type by its ID.
-   DELETE `/api/v1/addresses/types/{typeId}` : Delete a specific address type by its ID.
