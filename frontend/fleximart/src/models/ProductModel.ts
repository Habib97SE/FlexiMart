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
    async getProducts(): Promise<ProductResponse[]> {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }

    // Get by id
    async getProductById(id: number): Promise<ProductResponse> {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    // Get by slug
    async getProductBySlug(slug: string): Promise<ProductResponse> {
        try {
            const response = await axios.get(`${this.baseUrl}/slug/${slug}`);
            if (response.data.error === true) {
                return null;
            }
            return response.data.data;
        } catch (error) {
            return null;
        }
    }
}

export default ProductModel;
