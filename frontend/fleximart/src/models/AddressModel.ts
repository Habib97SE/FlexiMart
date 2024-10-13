import axios from "axios";

export interface ErrorResponse {
    error: boolean;
    message: string;
    statusCode: number;
}

export interface AddressResponse {
    id: number;
    street: string;
    streetNumber: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
}

export interface AddressRequest {
    name: string;
    houseNumber: string;
    street: string;
    streetNumber: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    phoneNumber: string;
    addressTypeId: number;
    userId: number;
}

class AddressModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/addresses";
    }

    async getAddress(id: number): Promise<AddressResponse | ErrorResponse> {
        try {
            if (isNaN(id) || id < 1) {
                return {
                    error: true,
                    message: "Invalid ID",
                    statusCode: 400,
                };
            }
            const response = await axios.get(`${this.baseUrl}/${id}`);
            console.log(response.data);
            if (response.data.status == 200) {
                return response.data.data;
            } else {
                return {
                    error: response.data.error,
                    message: response.data.message,
                    statusCode: response.data.status,
                };
            }
        } catch (error) {
            return {
                error: true,
                message: "Something went wrong",
                statusCode: 500,
            };
        }
    }

    async updateAddress(
        id: number,
        address: AddressRequest
    ): Promise<AddressResponse> {
        const response = await axios.put(`${this.baseUrl}/${id}`, address);
        return response.data;
    }

    async deleteAddress(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    async createAddress(address: AddressRequest): Promise<AddressResponse> {
        const response = await axios.post(this.baseUrl, address);
        return response.data;
    }
}

export { AddressModel };
