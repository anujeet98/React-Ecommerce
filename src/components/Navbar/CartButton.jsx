import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Fragment, useState } from "react";

const CartButton = () => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const qty = 0;
    const showCartHandler = () => setCartIsShown(true);
    const hideCartHandler = () => setCartIsShown(false);

    return (
        <Fragment>
            <Button onClick={showCartHandler}>
                Cart {qty}
            </Button>
            {cartIsShown ? <Cart onHideCart={hideCartHandler} /> : ""}
        </Fragment>
    );
};

export default CartButton;
