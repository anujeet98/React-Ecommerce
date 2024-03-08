import { Fragment } from "react";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import { Button, Container, Row } from "react-bootstrap";
import './Home.css';



const Home = () => {
    const tours = [{date:'JUL16', location:'DETROIT, MI', place:'DTE ENERGY MUSIC THEATRE'},{date:'JUL19', location:'TORONTO,ON', place:'BUDWEISER STAGE'},{date:'JUL 22', location:'BRISTOW, VA', place:'JIGGY LUBE LIVE'},{date:'JUL 29', location:'PHOENIX, AZ', place:'AK-CHIN PAVILION'},{date:'AUG 2', location:'LAS VEGAS, NV', place:'T-MOBILE ARENA'},{date:'AUG 7', location:'CONCORD, CA', place:'CONCORD PAVILION'}]
    
    const tourInfo = tours.map(tour=>{
        return (
            <div className="d-flex align-items-center justify-content-between  border-bottom  border-black pb-2 pt-2 " key={tour.date+tour.location}>
                <span className="tour-date">{tour.date}</span>
                <span className="tour-location">{tour.location}</span>
                <span className="tour-place">{tour.place}</span>
                <span className="tour-button"><Button className="btn-info bg-info text-light fs-6">BUY TICKETS</Button></span>
            </div>
        )
    })
    
    return (
        <Fragment>
            <Header>
                    <Button className="bg-secondary btn-info text-light fs-3 mb-4 mt-5 p-3">Get our Latest Album</Button>
                    <Button className="bg-secondary btn-info text-light mb-4 rounded-circle" style={{width:'5rem', height:'5rem' }}><i className="fa fa-play text-info fs-1"></i></Button>
            </Header>
            <Container className="p-3 mb-5">
                <Row>
                    <h1 className="d-flex align-items-center justify-content-center p-3 m-0 fw-bolder " style={{fontFamily: "Metal Mania"}}>Tours</h1>
                </Row>
                <Row>
                    <div className="text-center fs-5">
                        {tourInfo}
                    </div>
                </Row>
            </Container>

            <Footer/>
        </Fragment>
    );
}

export default Home;