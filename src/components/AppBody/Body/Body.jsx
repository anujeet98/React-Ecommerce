import { Button, Container, Row } from "react-bootstrap";
import Product from "./Product";
import { useContext } from "react";
import CartContext from "../../../contexts/cart-context";
// import classes from './Body.module.css';

const Body = () => {
  const cartCtx = useContext(CartContext);
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const products = productsArr.map((product) => {
    return (<Product key={product.id} data={product}/>);
  })

  return (
    <Container className="p-3">
        <header className="p-3 d-flex justify-content-center "><h1 className="m-0 fw-bolder " style={{fontFamily: 'Metal Maniac'}}>MUSIC</h1></header>
        <Row xs={1} md={2} className="d-flex align-items-center justify-content-around">
            {products}
        </Row>
        <div className="d-flex justify-content-center ">
          <Button className=" btn-secondary fs-3" onClick={cartCtx.onShowCart}>See the cart</Button>
        </div>
    </Container>
  );
};

export default Body;
