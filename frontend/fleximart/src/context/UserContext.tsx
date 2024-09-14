"use client";
import React, { createContext, useContext, useState } from "react";
import { User } from "../types";
import { UserModel } from "../models/UserModel";

const UserContext = createContext(null);


export function UserProvider({ children }) {
    const [user, setUser] = useState(null);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);