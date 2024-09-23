"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { UserModel } from "../models/UserModel";
import { LoginRequest } from "@/interface/LoginRequest";
import { UserResponse } from "@/interface/UserResponse";

// Define a type for the context
interface UserContextType {
    user: UserResponse | null;
    userLoggedIn: boolean;
    setUser: (user: UserResponse | null) => void;
    authorizeUser: (loginRequest: LoginRequest) => Promise<{ error: boolean; message: string }>;
}

// Create context with default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Save user data in local storage
const USER_KEY = "user_data";

function saveUser(user: UserResponse) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
}

function removeUser() {
    localStorage.removeItem(USER_KEY);
}

// Define the UserProvider component
interface UserProviderProps {
    children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
    const userModel = new UserModel();
    const [user, setUser] = useState<UserResponse | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const user = getUser();
        if (user) {
            setUser(user);
            setUserLoggedIn(true);
        }
    }, []);

    const authorizeUser = async (loginRequest: LoginRequest) => {
        const user: UserResponse = await userModel.authorize(loginRequest);
        if (user.error) {
            console.log(user.message);
            return {
                error: user.error,
                message: user.message
            };
        } else {
            console.log(user);
            setUser(user);
            setUserLoggedIn(true);
            saveUser(user);
            return {
                error: false,
                message: "User authorized"
            };
        }
    };

    const value = useMemo(
        () => ({
            user,
            userLoggedIn,
            setUser,
            authorizeUser
        }),
        [user, userLoggedIn]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Hook to use the UserContext
function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export { UserContext, UserProvider, useUser };
