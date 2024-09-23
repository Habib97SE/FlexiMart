import axios from "axios";

class CollectionModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/collections";
    }

    public async getCollections(): Promise<CollectionResponse[]> {
        try {
            const response = await axios.get(this.baseUrl);

            if (response.data.data.error === true) {
                throw new Error(response.data.data.message);
            }
            return response.data;
        } catch (error) {
            return "Something went wrong";
        }
    }

    public async getCollectionBySlug(
        slug: string
    ): Promise<CollectionResponse> {
        try {
            const response = await axios.get(`${this.baseUrl}/slug/${slug}`);
            console.log(response);
            if (response.data.data.error === true) {
                throw new Error(response.data.data.message);
            }
            return response.data;
        } catch (error) {
            return "Something went wrong";
        }
    }
}

export default CollectionModel;
