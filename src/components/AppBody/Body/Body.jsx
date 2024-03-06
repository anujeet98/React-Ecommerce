import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import classes from './Body.module.css';

const Body = () => {
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
  const products = productsArr.map((product, index) => {
    return (
        <Col key={index} className="p-0 d-flex align-items-center justify-content-around">
            <Card className="m-4 border-0" style={{ maxWidth: '260px' }}>
                <Card.Title className="mb-3 fs-5">{product.title}</Card.Title>
                <Card.Img src={product.imageUrl} className="" />

                <Card.Footer className="d-flex align-items-center justify-content-between ">
                    <Card.Text className="mt-auto mb-auto">$ {product.price}</Card.Text>
                    <Button className="btn btn-info text-light">ADD TO CART</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
  })

  return (
    <Container className="p-3">
        <header className="p-3"><h1 className="m-0">MUSIC</h1></header>
        <Row xs={1} md={2} className="d-flex align-items-center justify-content-around">
            {products}
        </Row>
        <div>
          <Button className=" btn-secondary">See the cart</Button>
        </div>
    </Container>
  );
};

export default Body;
