import { AddressResponse } from "./AddressResponse";
import { WishlistResponse } from "./WishlistResponse";

export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    suffix: string;
    email: string;
    addresses: AddressResponse[];
    wishlist: WishlistResponse;
}
export interface UserResponse {
    error: boolean;
    message: string;
    data: UserData;
}

export interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}
