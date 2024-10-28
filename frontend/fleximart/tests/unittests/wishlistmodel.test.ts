import axios from "axios";
import { WishlistResponse, wishlistItemResponse } from "@/models/WishlistModel";
import WishlistModel from "@/models/WishlistModel";

const wishlistModel = new WishlistModel();

describe("Wishlist Model", () => {
    it("Should create a new wishlist and return wishlist response", async () => {
        const userId = 1;
        const response = await wishlistModel.createWishlist(userId);
        if (response instanceof Error) {
            console.log("Error: ", response.message);
        } else {
            console.log("Wishlist created successfully: ", response);
            expect(response.userId).toBe(userId);
        }
    });
});
