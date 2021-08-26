import { createContext, useCallback, useContext, useState } from 'react';


export const CartContext = createContext(
  {}
);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const cart = localStorage.getItem('@magabi:cart');
        if(cart){
            return JSON.parse(cart);
        }  
        return [];
    })

    const addToCart = useCallback((product)=>{
        product.quantity = 1;
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('@magabi:cart', JSON.stringify(newCart));
    },[cart]);

    const deleteToCart = useCallback((sku)=>{
        const newCart = cart.filter(item=> item.sku !== sku);
        setCart([...newCart])
        localStorage.setItem('@magabi:cart', JSON.stringify(newCart));
    },[cart]);

    const updateCart = useCallback((sku, quantity)=>{
        const productCartIndex = cart.findIndex(item=> item.sku === sku);
        const newCart = cart;
        const itemToUpgrade = cart[productCartIndex];

        itemToUpgrade.quantity = Number(quantity);
        newCart[productCartIndex] = itemToUpgrade;

        setCart([...newCart]);
        localStorage.setItem('@magabi:cart', JSON.stringify(cart));
    },[cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteToCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(){
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}
