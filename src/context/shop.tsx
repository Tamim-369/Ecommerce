"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
type ShopContextProviderProps = {
  children: ReactNode;
};
const ShopContext = createContext({});

export function useShoppingContext() {
  return useContext(ShopContext);
}
type CartItem = {
  id: string;
  quantity: number;
};
export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: string) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: string) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: string) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }
  const value = {
    getItemQuantity,
    increaseCartQuantity,
    cartItems,
    decreaseCartQuantity,
    removeFromCart,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
