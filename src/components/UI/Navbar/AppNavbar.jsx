import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import classes from './AppNavbar.module.css';
import { useContext } from "react";
import AuthContext from "../../../contexts/auth-context";

const AppNavbar = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Nav className={classes.nav + " ms-auto me-auto fw-bolder fs-4 d-flex gap-3 "}>
          <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
          {authCtx.authToken && <NavLink activeClassName={classes.active} to="/store">Store</NavLink>}
          <NavLink activeClassName={classes.active}  to="/about">About</NavLink>
          {!authCtx.authToken && <NavLink activeClassName={classes.active} to="/login">Login</NavLink>}
          <NavLink activeClassName={classes.active}  to="/contact">Contact</NavLink>
        </Nav>
        {props.children}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
