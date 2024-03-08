import { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CartContext from "../../../contexts/cart-context";
import { NavLink } from "react-router-dom";



const Product = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHAndler = () => {
        cartCtx.addItem({...props.data, id:props.data.id})
    }
    return (
        <Col key={props.data.id} className="p-0 d-flex align-items-center justify-content-around">
            <Card className="m-4 border-0" style={{ maxWidth: '260px' }}>
                <Card.Title className="mb-3 fs-5 ms-auto me-auto">{props.data.title}</Card.Title>
                <NavLink to={"/products/"+props.data.id}><Card.Img src={props.data.imageUrl} className="" /></NavLink>

                <Card.Footer className="d-flex align-items-center justify-content-between ">
                    <Card.Text className="mt-auto mb-auto">$ {props.data.price}</Card.Text>
                    <Button className="btn btn-info text-light" onClick={addToCartHAndler}>ADD TO CART</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Product;