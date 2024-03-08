import { Button } from "react-bootstrap";

import { Fragment, useContext } from "react";
import CartContext from "../../../contexts/cart-context";
import Cart from "../Cart/Cart";

const CartButton = () => {
    const cartCtx = useContext(CartContext);
    const qty = cartCtx.items.size;

    return (
        <Fragment>
            <Button className="" onClick={cartCtx.onShowCart}>
                Cart {qty}
            </Button>
            {cartCtx.showCart ? <Cart onHideCart={cartCtx.onHideCart} /> : ""}
        </Fragment>
    );
};

export default CartButton;
