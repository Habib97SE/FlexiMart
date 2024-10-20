"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode, use } from "react";
import { UserModel, UserRequest } from "../models/UserModel";
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
        let user = getUser();
        console.log("User above if statement");
        console.log(user);
        const fetchUserData = async (id: number): void => {
            const data = await userModel.getUser(user.id);
            console.log("User inside fetchUserData()");
            console.log(data.data);
            setUser(data.data);
        }
        if (user) {
            fetchUserData(user.id);
            setUserLoggedIn(true);
        } else {
            setUserLoggedIn(false);
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
        removeUser();
    }

    const registerUser = async (user: UserRequest): UserResponse | Error => {
        // Implement user registration here
        const response = await userModel.createUser(user);
        if (response instanceof Error) {
            return response;
        }
        setUser(response);
        setUserLoggedIn(true);
        addUserToLocalStorage(response);
        return {
            error: false,
            message: "User registered successfully",
        }
    }

    const createAddress = async (address: AddressRequest) => {
        const response = await addressModel.createAddress(address);
        console.log("createAddress() response: ", response);
        if (response.error) {
            return {
                error: true,
                message: "Something went wrong",
            }
        }
        user?.addresses.push(response);
        setAddresses([...addresses, response]);
        return {
            error: false,
            message: "Address created successfully",
        }
    }

    const deleteAddress = async (id: number) => {
        console.log("deleteAddress() gets called with ID: " + id);
        const response = await addressModel.deleteAddress(id);
        console.log("deleteAddress() response: ", response);
        if (response.error) {
            return {
                error: true,
                message: "Something went wrong",
            }
        }
        user.addresses = user?.addresses.filter((address) => address.id !== id);
        setAddresses(addresses.filter((address) => address.id !== id));
        return {
            error: false,
            message: "Address deleted successfully",
        }
    }


    const value = useMemo(
        () => ({
            user,
            addresses,
            userLoggedIn,
            loading,  // <-- Pass the loading state down
            setUser,
            authorizeUser,
            registerUser,
            logoutUser,
            createAddress,
            deleteAddress,
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
