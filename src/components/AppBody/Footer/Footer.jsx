import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <Container fluid className="bg-info pt-3 pb-3">
            <Row className="align-items-center ">
                <Col>
                    <div className="display-5 fw-bolder text-light font-monospace  ">The Generics</div>
                </Col>
                <Col className="">
                    <ul className="w-50 list-unstyled d-flex align-items-center justify-content-center mt-auto mb-auto">
                        <li><a href="www.youtube.com" className="btn text-danger fs-1 pt-0 pb-0"><i className="ri-youtube-fill "></i></a></li>
                        <li><a href="www.spotify.com" className="btn text-success fs-1 pt-0 pb-0"><i className="ri-spotify-fill"></i></a></li>
                        <li><a href="www.facebook.com" className="btn text-primary fs-1 pt-0 pb-0"><i className="ri-facebook-box-fill"></i></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;