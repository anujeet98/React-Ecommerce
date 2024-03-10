

import React from "react";


const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    showCart: false,
    onShowCart: ()=>{},
    onHideCart: ()=>{},
});

export default CartContext;