import React, { useState, useContext, createContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the product is already in the cart
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // If the product is not in the cart, add it with a quantity of 1
            return [...prevCart, { ...product, quantity: 1 }];
        });

    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart }}
        >{children}</CartContext.Provider>
    )
}