export interface CollectionRequest {
    name: string;
    description: string;
    collectionImage: string;
    slug: string;
}

export interface CollectionResponse {
    id: number;
    name: string;
    description: string;
    collectionImage: string;
    slug: string;
}
