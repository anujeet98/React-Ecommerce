import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";

const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      rating: 4.5,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      rating: 3.5,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      rating: 4.7,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      rating: 2.2,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
const Product = () => {
    const params = useParams();
    const id = params.productid;

    const product = productsArr.filter((product) => product.id === +id);
    console.log(product)

    return (
        <Container fluid className="p-5 border-3 border top-25 d-inline-block w-75 bg-light shadow" style={{margin: '5rem 14rem'}}>
            <Row>
                <Col className="shadow ">
                    <Card.Img src={product[0].imageUrl} alt="prod-img" />
                </Col>
                <Col className="border border-2 ms-5 shadow">
                    <Row className="border border-2 pt-5 pb-5 bg-secondary ">
                        <div><h1 className="display-4 fw-bold ">{product[0].title}</h1></div>
                        <div><h1 className="display-5">Price: $ {product[0].price}</h1></div>
                        <div><h1 className="fs-3 text-warning ">Rating: {product[0].rating}/5</h1></div>
                    </Row>
                    <Row className="border border-2 ">
                        <div className="fs-2 border border-1 ">Reviews</div>
                        <ul className="list-list-unstyled overflow-y-scroll" style={{height: '21rem'}}>
                            <Reviews/>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;