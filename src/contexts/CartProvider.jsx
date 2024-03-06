import { useState } from "react";
import CartContext from "./cart-context";

const addToCartLogic = (prevCart, item) => {
    const updatedCart = new Map(prevCart);
    updatedCart.set(item.id, {...item, quantity:1});
    return updatedCart;
}

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(new Map());
  const [showCart, setShowCart] = useState(false);

  const addItemToCartHandler = (item) => {
    setCartItems((prevCart) => {
        if(prevCart.has(item.id)){
            alert('This item is already added to the cart.');
            return prevCart;
        }
        // const prevQty = prevCart.get(item.id) ? Number(prevCart.get(item.id).quantity) : 0;
        // if(Number(item.quantity) + prevQty > 10){
        //     alert('Item quantity in the cart must not exceed 10');
        //     return prevCart;
        // }
        return addToCartLogic(prevCart, item);
    });
  };

  const deleteItemFromCartHandler = (id) => {
    setCartItems((prevCart) => {
      if(!prevCart.has(id))
      {
        alert("Item with id: " + id + " does not exist in the cart");
        return prevCart;
      }
      const updatedCart = new Map(prevCart);
      updatedCart.get(id).quantity > 1 ? updatedCart.get(id).quantity-- : updatedCart.delete(id);
      return updatedCart; 
    });
  };

  const showCartHandler = () =>{
    setShowCart(true)
  }
  const hideCartHandler = () =>{
    setShowCart(false)
  }

  let cartTotal = 0;
  cartItems.forEach((item,key) => {
    cartTotal += Number(item.price) * Number(item.quantity);
  });

  const cartContext = {
    items: cartItems,
    total: cartTotal,
    addItem: addItemToCartHandler,
    removeItem: deleteItemFromCartHandler,
    showCart: showCart,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
