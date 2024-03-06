

import React from "react";


const CartContext = React.createContext({
    items: {},
    total: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    showCart: false,
    onShowCart: ()=>{},
    onHideCart: ()=>{},
});

export default CartContext;