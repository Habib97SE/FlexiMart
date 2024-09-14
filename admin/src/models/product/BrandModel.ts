import axios, { AxiosResponse } from "axios";

interface BrandRequest {
    name: string;
    description: string;
}

interface BrandResponse {
    id: number;
    name: string;
    description: string;
}

// create a class that will be used to interact with the API for brands
class BrandModel {
    endpoint: string = "http://localhost:8080/api/v1/brands";

    // get all brands

    async getBrands(): Promise<BrandResponse[]> {
        const response: AxiosResponse<BrandResponse[]> = await axios.get(
            this.endpoint
        );
        return response.data.data;
    }

    // get a brand by id
    async getBrand(id: number): Promise<BrandResponse> {
        const response: AxiosResponse<BrandResponse> = await axios.get(
            `${this.endpoint}/${id}`
        );
        return response.data;
    }

    // create a brand
    async createBrand(brand: BrandRequest): Promise<BrandResponse> {
        console.log(brand);
        const response: AxiosResponse<BrandResponse> = await axios.post(
            this.endpoint,
            brand
        );
        return response.data;
    }

    // update a brand
    async updateBrand(id: number, brand: BrandRequest): Promise<BrandResponse> {
        const response: AxiosResponse<BrandResponse> = await axios.put(
            `${this.endpoint}/${id}`,
            brand
        );
        return response.data;
    }

    // delete a brand
    async deleteBrand(id: number): Promise<void> {
        await axios.delete(`${this.endpoint}/${id}`);
    }

    // autocomplete brands
    async autocompleteBrands(query: string): Promise<BrandResponse[]> {
        const response: AxiosResponse<BrandResponse[]> = await axios.get(
            `${this.endpoint}/autocomplete/${query}`
        );
        return response.data;
    }
}

export default BrandModel;
