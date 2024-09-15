# FlexiMart - E-Commerce Platform

FlexiMart is a comprehensive, scalable e-commerce platform built using **Spring Boot** and **Next.JS**.

FlexiMart is a powerful, flexible, and easy-to-use e-commerce platform that can help you build and grow your online business. It is designed to be fast, secure, and user-friendly, with a focus on performance and accessibility.

The backend is designed to efficiently manage products and their variants, promotions, discounts, and shipping options. The platform is modular, allowing for flexible customization and expansion, making it suitable for a wide variety of online businesses.

The frontend is built using Next.JS, a React framework that provides server-side rendering and a great developer experience. The frontend is designed to be fast, responsive, and user-friendly, with a focus on performance and accessibility.

You can see all endpoints in the [API Documentation](./backend/API.md)

## Backend Features

-   Product Management:
    -   Add, Edit, Delete Products
    -   Add, Edit, Delete Product Variants
    -   Add, Edit, Delete Product Images
    -   Add, Edit, Delete Product Categories
    -   Add, Edit, Delete Product Tags
    -   Add, Edit, Delete Product Reviews
-   Variant Management:
    -   Add, Edit, Delete Variants
    -   Add, Edit, Delete Variant Images
-   User Management:
    -   Add, Edit, Delete Users
    -   Add, Edit, Delete User Roles
-   Admin Management:
    -   Add, Edit, Delete Admins
    -   Add, Edit, Delete Admin Roles
-   Promotion Management:
    -   Add, Edit, Delete Promotions
    -   Add, Edit, Delete Promotion Codes
-   Discount Management:
    -   Add, Edit, Delete Discounts
    -   Add, Edit, Delete Discount Codes
-   Shipping Management:
    -   Add, Edit, Delete Shipping Methods
    -   Add, Edit, Delete Shipping Providers
-   Order Management:
    -   Add, Edit, Delete Orders
    -   Add, Edit, Delete Order Items
    -   Add, Edit, Delete Order Statuses
-   Payment Gateway Integration:
    -   Add, Edit, Delete Payment Providers
    -   Add, Edit, Delete Payment Methods
-   Wishlist Management:
    -   Add, Edit, Delete Wishlist Items
    -   Add, Edit, Delete wishlists
-   Cart Management:
    -   Add, Edit, Delete Cart Items
    -   Add, Edit, Delete Carts
-   Review Management:
    -   Add, Edit, Delete Reviews
-   Blog Management:
    -   Add, Edit, Delete Blog Posts
    -   Add, Edit, Delete Blog Categories
    -   Add, Edit, Delete Blog Tags

## Frontend Features

-   Home Page
-   Product Listing Page
-   Product Details Page
-   Cart Page
-   Checkout Page
-   User Account Page
-   Wishlist Page
-   Blog Page
-   Contact Page
-   About Page

User can create custom-made pages and add them to the navigation menu. The platform is designed to be easy to use and customize, with a focus on performance and accessibility.

## Backend Technologies

-   Java
-   Spring Boot
-   Spring Security
-   Spring Data JPA
-   Hibernate
-   MySQL
-   Maven

## Frontend Technologies

-   Next.JS
-   React
-   Tailwind CSS
-   Axios
-   TypeScript

## Installation

1. Clone the repository

```git
git clone https://github.com/Habib97SE/FlexiMart.git
```

2. Import the backend project into your IDE (IntelliJ IDEA, Eclipse, etc.)
3. Import the frontend project into your code editor (VS Code, WebStorm, etc.)
4. Install the dependencies for the backend project using Maven

```maven
mvn clean install
```

5. Install the dependencies for the frontend project using npm

```npm
npm install
```

6. Make sure you have MySQL installed on your machine and provide the database credentials in the application.properties file

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fleximart
spring.datasource.username=root
spring.datasource.password=root
```

7. Run the backend project
8. Run the frontend project

```npm
npm run dev
```

9. Open your browser and navigate to http://localhost:3010

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   [Spring Boot](https://spring.io/projects/spring-boot)
-   [Next.JS](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [React](https://reactjs.org/)
-   [MySQL](https://www.mysql.com/)
-   [Maven](https://maven.apache.org/)
-   [npm](https://www.npmjs.com/)
-   [Axios](https://axios-http.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Hibernate](https://hibernate.org/)
-   [JWT](https://jwt.io/)
-   [BCrypt](https://www.mindrot.org/projects/jBCrypt/)
-   [React Icons](https://react-icons.github.io/react-icons/)
-   [React Hook Form](https://react-hook-form.com/)
