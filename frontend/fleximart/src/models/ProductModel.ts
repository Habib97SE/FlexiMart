import axios from "axios";

export interface ProductResponse {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

class ProductModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/products";
    }

    // Get all
}
