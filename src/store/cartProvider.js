import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const [items, setItems] = useState([])
    const addItemHandler = (item)=> {
        setItems([...items, item]);
        console.log('Inside AddItems', cartContext);
    };
    const removeItemHandler = (id)=> {};

    const cartContext={
        items: items,
        totalAmount:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
    {console.log('return statement', cartContext)}
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;