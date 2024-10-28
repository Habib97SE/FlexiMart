import axios from "axios";

export interface WishlistItemRequest {
    wishlistId: number;
    productId: number;
}

export interface wishlistItemResponse {
    productName: string;
    productId: number;
}

export interface WishlistRequest {
    userId: number;
}

export interface WishlistResponse {
    id: number;
    userId: number;
    items: wishlistItemResponse[];
}

class WishlistModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/wishlists/";
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

    setBaseUrl(baseUrl: string): void {
        this.baseUrl = baseUrl;
    }

    async getWishlistByUserId(
        userId: number
    ): Promise<WishlistResponse | Error> {
        try {
            const response = await axios.get(`${this.baseUrl}/user/${userId}`);
            if (response.status === 200) {
                const data: WishlistResponse = {
                    id: response.data.data.id,
                    userId: response.data.data.userId,
                    items: response.data.data.items,
                };
                return data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error("An error occurred while fetching the wishlist");
        }
    }

    async getWishlistById(
        wishlistId: number
    ): Promise<WishlistResponse | Error> {
        try {
            const response = await axios.get(`${this.baseUrl}/${wishlistId}`);
            if (response.status === 200) {
                const data: WishlistResponse = {
                    id: response.data.data.id,
                    userId: response.data.data.userId,
                    items: response.data.data.items,
                };
                return data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error("An error occurred while fetching the wishlist");
        }
    }

    async getItemsInWishlist(
        wishlistId: number
    ): Promise<WishlistResponse | Error> {
        try {
            const response = await axios.get(
                `${this.baseUrl}/${wishlistId}/items`
            );
            if (response.status === 200) {
                const data: WishlistResponse = {
                    id: response.data.data.id,
                    userId: response.data.data.userId,
                    items: response.data.data.items,
                };
                return data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error("An error occurred while fetching the wishlist");
        }
    }

    async addItemToWishlist(
        item: WishlistItemRequest,
        wishlistId: number
    ): Promise<WishlistResponse | Error> {
        try {
            const response = await axios.post(
                `${this.baseUrl}/${wishlistId}`,
                item
            );
            if (response.status === 200) {
                const data: WishlistResponse = {
                    id: response.data.data.id,
                    userId: response.data.data.userId,
                    items: response.data.data.items,
                };
                return data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error(
                "An error occurred while adding an item to the wishlist"
            );
        }
    }

    async removeItemFromWishlist(
        productId: number,
        wishlistId: number
    ): Promise<WishlistResponse | Error> {
        try {
            const response = await axios.delete(
                `${this.baseUrl}/${wishlistId}/${productId}`
            );
            if (response.status === 200) {
                const data: WishlistResponse = {
                    id: response.data.data.id,
                    userId: response.data.data.userId,
                    items: response.data.data.items,
                };
                return data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error(
                "An error occurred while removing an item from the wishlist"
            );
        }
    }

    async createWishlist(userId: number): Promise<WishlistResponse | Error> {
        try {
            const response = await axios.post(this.baseUrl, { userId });
            if (response.status === 201) {
                const data: WishlistResponse = {
                    id: response.data.data.id,
                    userId: response.data.data.userId,
                    items: response.data.data.items,
                };
                return data;
            }
            return new Error(response.data.message);
        } catch (error) {
            return new Error("An error occurred while creating a wishlist");
        }
    }
}

export default WishlistModel;
