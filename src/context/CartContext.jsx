import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    
    const [cart, setCart] = useState([]);

    const addCartProduct = (newProduct) => {
        const exists = cart.some(item => item.id === newProduct.id);

        if (exists) {
            const updatedCart = cart.map(item => {
                if (item.id === newProduct.id) {
                    return {
                        ...item,
                        quantity: item.quantity + newProduct.quantity
                    };
                }
                return item;
            });

            setCart(updatedCart);
            return;
        }

        setCart([...cart, newProduct]);
    };

    const deleteCartProduct = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const editCartProduct = (id, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });    
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addCartProduct, deleteCartProduct, editCartProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
