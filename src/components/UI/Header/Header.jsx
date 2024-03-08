import { Container } from "react-bootstrap";


const Header = (props) => {
    return (
        <Container fluid className="bg-secondary  p-5 d-flex flex-column align-items-center justify-content-center ">
          <h1 className="p-3 fw-bolder text-light" style={{fontFamily: "Times New Roman", fontSize: '7rem'}}>The Generics</h1>
          {props.children}
      </Container>
    )
}

export default Header;