import axios from "axios";

export interface ErrorResponse {
    error: boolean;
    message: string;
    statusCode: number;
}

export interface AddressTypeResponse {
    id: number;
    name: string;
    description: string;
    icon: string;
}

/**
 * Response body for an address, and it's properties are:
 * - id: number
 * - name: string
 * - houseNumber: string
 * - street: string
 * - streetNumber: string
 * - city: string
 * - state: string
 * - country: string
 * - postalCode: string
 * - phoneNumber: string
 * - addressType: AddressTypeResponse
 */
export interface AddressResponse {
    id: number;
    name: string;
    houseNumber: string;
    street: string;
    streetNumber: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    phoneNumber: string;
    addressType: AddressTypeResponse;
}

/**
 * Request body for creating an address, and it's properties are:
 * - name: string
 * - houseNumber: string
 * - street: string
 * - streetNumber: string
 * - city: string
 * - state: string
 * - country: string
 * - postalCode: string
 * - phoneNumber: string
 * - addressTypeId: number (address type id)
 * - userId: number (user id)
 */
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

/**
 * Model for handling address related operations
 */
class AddressModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/addresses";
    }

    /**
     *
     * @param userId :
     * @returns
     */
    async getAddressesByUserId(
        userId: number
    ): Promise<AddressResponse[] | Error> {
        try {
            if (isNaN(userId) || userId < 1) {
                return new Error("Invalid user ID");
            }
            const response = await axios.get(`${this.baseUrl}/user/${userId}`);

            if (response.data.status == 200) {
                return response.data.data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error("Something went wrong");
        }
    }

    async getAddress(id: number): Promise<AddressResponse | Error> {
        try {
            if (isNaN(id) || id < 1) {
                return new Error("Invalid address ID");
            }
            const response = await axios.get(`${this.baseUrl}/${id}`);
            if (response.data.status == 200) {
                return response.data.data;
            } else {
                return new Error(response.data.message);
            }
        } catch (error) {
            return new Error("Something went wrong");
        }
    }

    async updateAddress(
        id: number,
        address: AddressRequest
    ): Promise<AddressResponse> {
        const response = await axios.put(`${this.baseUrl}/${id}`, address);
        return response.data;
    }

    async deleteAddress(id: number): Promise<boolean | Error> {
        try {
            const response = await axios.delete(`${this.baseUrl}/${id}`);
            console.log(response.data);
            if (response.data.status != 200) {
                return new Error(response.data.message);
            }
            return true;
        } catch (error) {
            return new Error("Something went wrong");
        }
    }

    async createAddress(address: AddressRequest): Promise<AddressResponse> {
        const response = await axios.post(this.baseUrl, address);
        return response.data;
    }

    async getAddressTypes(): Promise<AddressTypeResponse[] | Error> {
        try {
            const response = await axios.get(this.baseUrl + "/types");
            if (response.data.status != 200) {
                return new Error("Error fetching address types");
            }
            return response.data.data;
        } catch (error) {
            return new Error("Something went wrong");
        }
    }

    async getAddressType(id: number): Promise<AddressTypeResponse | Error> {
        try {
            const response = await axios.get(this.baseUrl + "/types/" + id);
            if (response.data.status != 200) {
                return new Error("Error fetching address type");
            }
            return response.data.data;
        } catch (error) {
            return new Error("Something went wrong");
        }
    }
}

export { AddressModel };
