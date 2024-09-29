"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { UserModel } from "../models/UserModel";

// Define a type for the context
interface CartContextType {
    cart: any[];
    setCart: (cart: any[]) => void;
    addItemToCart: (item: any) => void;
    removeItemFromCart: (index: number) => void;
    clearCart: () => void;
}

function saveCartToLocalStorage(cart: any[]): boolean {
    try {
        // Save cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        return true;
    } catch (error) {
        console.error("Failed to save cart:", error);
        return false;
    }
}

function removeCartFromLocalStorage() {
    localStorage.removeItem("cart");
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<any[]>([]);

    // Load cart from local storage when the component is mounted
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const addItemToCart = (item: any) => {
        const newCart = [...cart, item];
        setCart(newCart);
        saveCartToLocalStorage(newCart);
    };

    const removeItemFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        saveCartToLocalStorage(newCart);
    };

    const clearCart = () => {
        setCart([]);
        removeCartFromLocalStorage();
    };

    const value = useMemo(() => {
        return {
            cart,
            setCart,
            addItemToCart,
            removeItemFromCart,
            clearCart,
        };
    }, [cart]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartProvider, useCart };
