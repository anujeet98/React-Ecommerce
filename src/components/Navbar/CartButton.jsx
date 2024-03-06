import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Fragment, useContext } from "react";
import CartContext from "../../contexts/cart-context";

const CartButton = () => {
    const cartCtx = useContext(CartContext);
    const qty = cartCtx.items.size;

    return (
        <Fragment>
            <Button onClick={cartCtx.onShowCart}>
                Cart {qty}
            </Button>
            {cartCtx.showCart ? <Cart onHideCart={cartCtx.onHideCart} /> : ""}
        </Fragment>
    );
};

export default CartButton;
