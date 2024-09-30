import axios, { AxiosResponse } from "axios";
import { ProductResponse } from "@/models/ProductModel";
import { AddressResponse } from "@/models/AddressModel";
import { LoginRequest } from "@/interface/LoginRequest";
import { BACKEND_DATA } from "@/constants/backenddata";
import { RegisterData, UserResponse } from "@/interface/UserResponse";

export interface Wishlist {
    id: number;
    items: ProductResponse[];
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    suffix: string;
    email: string;
    addresses: AddressResponse[];
    wishlist: Wishlist;
}

class UserModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/users";
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

    setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getUser(id: number): Promise<User> {
        const response: AxiosResponse<User> = await axios.get(
            `${this.baseUrl}/${id}`
        );
        return response.data;
    }

    async updateUser(user: User): Promise<User> {
        const response: AxiosResponse<User> = await axios.put(
            `${this.baseUrl}/${user.id}`,
            user
        );
        return response.data;
    }

    async deleteUser(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    async createUser(user: RegisterData): Promise<User> {
        try {
            const response: AxiosResponse<User> = await axios.post(
                this.baseUrl,
                user
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            return {
                error: true,
                message: "Something went wrong",
            };
        }
    }

    async authorize(loginRequest: LoginRequest) {
        const loginEndpoint: string = "http://localhost:8080/api/v1/auth/user";
        try {
            const response: AxiosResponse<UserResponse> = await axios.post(
                loginEndpoint,
                loginRequest
            );
            return response.data;
        } catch (error) {
            return {
                error: true,
                message: "Invalid credentials",
            };
        }
    }
}

export { UserModel };
