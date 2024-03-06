import { Button, Col, Container, Row } from "react-bootstrap";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItems = [];
    cartCtx.items.forEach(prod => {
        cartItems.push(
            <Row key={prod.id} className="pt-2 pb-2 align-items-center border-bottom border-5">
                <Col>
                    <span className="d-flex">
                        <img src={prod.imageUrl} alt="prod-img" className="w-50"/>
                        <span>{prod.title}</span>
                    </span>
                </Col>
                <Col><span>$ {prod.price}</span></Col>
                <Col>
                    <span className="d-flex gap-1">
                        <input type="text" value={prod.quantity} className={classes.cartInput} />
                        <Button className="btn-danger">REMOVE</Button>
                    </span>
                </Col>
            </Row>
        )
    })
  return (
    <Modal className={"position-fixed bg-light shadow p-3 " + classes.cart}>

      <div className="d-flex align-items-center justify-content-between w-100 mb-4 ">
        <div className="display-6 ms-auto me-auto">Cart</div>
        <Button onClick={props.onHideCart}> X </Button>
      </div>

      <Container>
        <Row className=" fs-5 fw-bolder border-bottom border-5 mt-2 mb-2">
            <Col>ITEM</Col>
            <Col>PRICE</Col>
            <Col>QUANTITY</Col>
        </Row>
        {cartItems}
      </Container>

      <div className="d-flex align-items-center justify-content-end mt-3 mb-3  ">
          <span className="fw-bolder fs-5">Total</span> <span>$ {cartCtx.total}</span>
      </div>

      <div className="d-flex justify-content-center">
        <Button className="btn-info text-light fs-5">PURCHASE</Button>
      </div>
    </Modal>
  );
};

export default Cart;
