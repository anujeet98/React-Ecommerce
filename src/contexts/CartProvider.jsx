import { useState } from "react";
import CartContext from "./cart-context";

const addToCartLogic = (prevCart, item) => {
    const updatedCart = [...prevCart, {...item, quantity:1}];
    return updatedCart;
}

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addItemToCartHandler = (item) => {
    setCartItems((prevCart) => {
        const existingItem = prevCart.find(cartItem=>cartItem.id===item.id);
        if(existingItem){
          alert('This item is already added to the cart.');
          return prevCart;
        }
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
      let updatedCart = [...prevCart];
      updatedCart = updatedCart.filter(cartItem => cartItem.id!==id);
      // const existingItem = prevCart.find(cartItem=>cartItem.id===item.id);
      // if(existingItem && )
      // updatedCart.get(id).quantity > 1 ? updatedCart.get(id).quantity-- : updatedCart.delete(id);
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
  cartItems.forEach(item => {
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
