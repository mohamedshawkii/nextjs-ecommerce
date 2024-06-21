"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItems = {
    id: number | string,

    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    getTotalPrice: (total: number) => void
    cartQuantity: number
    cartItems: cartItems[]
    total:number,
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<cartItems[]>([]);
    const [total, setTotal] = useState<number>(0);

    function getTotalPrice (total: number){
        setTotal(total)
    }
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,0
    )
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity: items.quantity + 1 }
                    } else {
                        return items
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity: items.quantity - 1 }
                    } else {
                        return items
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,cartItems,cartQuantity,total,getTotalPrice }}>

            {children}
        </ShoppingCartContext.Provider>
    )
}