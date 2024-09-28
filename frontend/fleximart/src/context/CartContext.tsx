"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { UserModel } from "../models/UserModel";

// Define a type for the context
interface CartContextType {
    cart: any[];
    setCart: (cart: any[]) => void;
}

function saveCartToLocalStorage(cart: any[]): boolean {
    try {
        // Save cart to local storage for 30 days
        localStorage.setItem("cart", JSON.stringify(cart));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function removeCartFromLocalStorage() {
    localStorage.removeItem("cart");
}


const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
    const userModel = new UserModel();
    const [cart, setCart] = useState<any[]>([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        const localStorageCartData = localStorage.getItem("cart");
        if (localStorageCartData) {
            setCart(JSON.parse(localStorageCartData));
        }

        setCart([]);

    }, [])

    const addItemToCart = (item: any) => {
        const newCart = [...cart, item];
        setCart(newCart);
        saveCartToLocalStorage(newCart);
    }

    const removeItemFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        const result: boolean = saveCartToLocalStorage(newCart);
        if (!result) {
            console.log("Error saving cart to local storage");
            return result;
        }
        return result;
    }

    const clearCart = () => {
        setCart([]);
        removeCartFromLocalStorage();
    }

    const value = useMemo(() => {
        return {
            cart,
            setCart,
            addItemToCart,
            removeItemFromCart,
            clearCart
        }
    }, [cart]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartContext, CartProvider, useCart };
