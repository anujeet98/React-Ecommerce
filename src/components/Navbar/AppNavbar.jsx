import { Navbar, Container, Nav } from "react-bootstrap";
import CartButton from "./CartButton";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Nav className="ms-auto me-auto fw-bolder fs-4 d-flex gap-3 ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <CartButton></CartButton>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
