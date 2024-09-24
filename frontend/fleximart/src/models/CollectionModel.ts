import axios from "axios";

class CollectionModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/collections";
    }

    /**
     * Get all collections from the API
     * @returns Promise<CollectionResponse[]> : Returns a promise that resolves to an array of CollectionResponse objects
     */
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

    /**
     * Get a collection by its slug
     * @param slug string : The slug of the collection to get
     * @returns Promise<CollectionResponse> : Returns a promise that resolves to a CollectionResponse object
     */
    public async getCollectionBySlug(
        slug: string
    ): Promise<CollectionResponse> {
        try {
            const response = await axios.get(`${this.baseUrl}/slug/${slug}`);
            if (response.data.error === true) {
                throw new Error(response.data.message);
            }
            return response.data.data;
        } catch (error) {
            return "Something went wrong";
        }
    }

    public async getProductsByCollectionId(
        collectionId: string
    ): Promise<ProductResponse[]> {
        try {
            const response = await axios.get(
                `${this.baseUrl}/${collectionId}/products`
            );
            if (response.data.error === true) {
                throw new Error(response.data.message);
            }
            return response.data.data;
        } catch (error) {
            return "Something went wrong";
        }
    }
}

export default CollectionModel;
