import axios from "axios";

export interface ProductResponse {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

