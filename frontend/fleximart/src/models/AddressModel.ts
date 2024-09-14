import axios from "axios";

export interface AddressResponse {
    id: number;
    street: string;
    streetNumber: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
}

class AddressModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:3000/addresses";
    }

    async getAddress(id: number): Promise<AddressResponse> {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    async updateAddress(address: AddressResponse): Promise<AddressResponse> {
        const response = await axios.put(`${this.baseUrl}/${address.id}`, address);
        return response.data;
    }

    async deleteAddress(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    async createAddress(address: AddressResponse): Promise<AddressResponse> {
        const response = await axios.post(this.baseUrl, address);
        return response.data;
    }
}