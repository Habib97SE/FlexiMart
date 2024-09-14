interface WishlistItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
}
export interface WishlistResponse {
    id: number;
    name: string;
    description: string;
    items: WishlistItem[];
}
