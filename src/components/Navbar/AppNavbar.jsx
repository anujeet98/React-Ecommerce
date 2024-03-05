import { Navbar, Container, Nav } from "react-bootstrap";
import Cart from "./Cart";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="justify-content-between">
        <Nav className="mx-auto fw-bolder fs-4 d-flex gap-5 ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Cart className="me-auto"></Cart>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
