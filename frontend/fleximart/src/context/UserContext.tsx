"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UserModel } from "../models/UserModel";
import { LoginRequest } from "@/interface/LoginRequest";
import { UserResponse } from "@/interface/UserResponse";

const UserContext = createContext(null);


// save user data in local storage 

const USER_KEY = "user_data";

function saveUser(user: UserResponse) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
    const user = localStorage.getItem(USER_KEY);
    return JSON.parse(user);
}

function removeUser() {
    localStorage.removeItem(USER_KEY);
}



function UserProvider({ children }) {
    const userModel = new UserModel();
    const [user, setUser] = useState(null);
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
            }
        } else {
            console.log(user);
            setUser(user);
            setUserLoggedIn(true);
            saveUser(user);
            return {
                error: false,
                message: "User authorized"
            }
        }
    }


    const value = useMemo(() => ({
        user,
        userLoggedIn,
        setUser,
        authorizeUser

    }), [user, userLoggedIn]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };