import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Nav className="ms-auto me-auto fw-bolder fs-4 d-flex gap-3 ">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/">Store</NavLink>
          <NavLink to="/about">About</NavLink>
        </Nav>
        <CartButton></CartButton>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
