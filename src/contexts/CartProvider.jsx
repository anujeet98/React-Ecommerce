import { useEffect, useState } from "react";
import CartContext from "./cart-context";
import { getCart, postCart } from "../components/UI/Cart/cart-functions";

const addToCartLogic = async (cartItems, item) => {
    try {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            alert('Item already exists in the cart');
            return cartItems; 
        }

        // If the item doesn't exist, proceed with the update
        const cartItem = await postCart({ ...item, quantity: 1 });
        const updatedCart = [...cartItems, { ...cartItem }];
        return updatedCart;
    } catch (err) {
        console.error('Error in addToCartLogic:', err);
        throw err;
    }
};

const CartProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [showCart, setShowCart] = useState(false);

	useEffect(()=>{
		const fetchInitialData = async()=>{
		try{
			const existingCart = await getCart();
			setCartItems(existingCart);
		}
		catch(err){
			console.error(err);
		}
		}
		fetchInitialData();
	},[setCartItems]);

	const addItemToCartHandler = async (item) => {
		try {
			const updatedCart = await addToCartLogic(cartItems, item);
			setCartItems(updatedCart);
		} catch (error) {
			console.error('Error in addItemToCartHandler:', error);
		}
	};

	const deleteItemFromCartHandler = (id) => {
		const existingItem = cartItems.find(cartItem=>cartItem.id===id);
		if(!existingItem){
			return alert("Item does not exist in the cart");
		}
		setCartItems((prevCart) => {
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

	const cartContext = {
		items: cartItems,
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
