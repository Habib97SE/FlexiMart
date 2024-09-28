export interface ProductVariant {
    barCode: ReactNode;
    variantOptions: any;
    id: string;
    name: string;
    price: number;
    stock: number;
    sku: string;
    productMedia: {
        id: string;
        mediaUrl: string;
        mediaAlt: string;
    }[];
    inventory: {
        price: number;
        discountPrice: number;
        costPrice: number;
        currency: string;
        minOrderQuantity: number;
        maxOrderQuantity: number;
        inventoryTracking: string;
        reOrderLevel: number;
        stockQuantity: number;
    };
}

export interface ProductResponse {
    id: string;
    name: string;
    slug: string;
    description: string;
    brand: {
        id: string;
        name: string;
    };
    productVariants: ProductVariant[];
}
