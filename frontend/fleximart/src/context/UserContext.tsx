"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { UserModel } from "../models/UserModel";
import { AddressModel, AddressRequest } from "@/models/AddressModel";
import { LoginRequest } from "@/interface/LoginRequest";
import { UserData, UserResponse } from "@/interface/UserResponse";
import { AddressResponse } from "@/interface/AddressResponse";

// Add User to Local Storage
const addUserToLocalStorage = (user: UserResponse) => {
    localStorage.setItem("user", JSON.stringify(user));
};

// Get User from Local Storage
const getUser = (): UserData | null => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

// Remove User from Local Storage
const removeUser = () => {
    localStorage.removeItem("user");
};

// Define a type for the context
interface UserContextType {
    user: UserData | null;
    userLoggedIn: boolean;
    addresses: AddressResponse[];  // <-- Add addresses here
    loading: boolean; // <-- Add loading state here
    setUser: (user: UserResponse | null) => void;
    authorizeUser: (loginRequest: LoginRequest) => Promise<{ error: boolean; message: string }>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the UserProvider component
interface UserProviderProps {
    children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
    const userModel = new UserModel();
    const addressModel = new AddressModel();
    const [user, setUser] = useState<UserData | null>(null);
    const [addresses, setAddresses] = useState<AddressResponse[]>([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);  // <-- Add loading state

    useEffect(() => {
        const fetchAddressData = async (userId: number) => {
            try {
                const addresses = await addressModel.getAddressesByUserId(userId);
                console.log("Addresses:", addresses);
                setAddresses(addresses);
            } catch (error) {
                console.error("Error fetching addresses:", error);
            } finally {
                setLoading(false);  // <-- Set loading to false when data is fetched
            }
        };

        const user = getUser();
        if (user) {
            setUser(user);
            console.log("User:", user);
            // const userId = user.data.id;
            // fetchAddressData(userId);
            setUserLoggedIn(true);
        } else {
            setLoading(false);  // <-- Set loading to false if no user is found
        }
    }, []);

    const authorizeUser = async (loginRequest: LoginRequest) => {
        const response = await userModel.authorize(loginRequest);
        if (!response.error) {
            setUser(response.data);
            setUserLoggedIn(true);
            addUserToLocalStorage(response.data);
        }
        return response;
    }


    const logoutUser = () => {
        removeUser();
        setUser(null);
        setUserLoggedIn(false);
        setUserInLocalStorage(null);
    }

    const registerUser = () => {
        // Implement user registration here

    }


    const value = useMemo(
        () => ({
            user,
            addresses,
            userLoggedIn,
            loading,  // <-- Pass the loading state down
            setUser,
            authorizeUser
        }),
        [user, addresses, userLoggedIn, loading]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export { UserContext, UserProvider, useUser };
