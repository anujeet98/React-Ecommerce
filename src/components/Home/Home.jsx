import { Fragment, useState } from "react";
import Footer from "../AppBody/Footer/Footer";
import Header from "../AppBody/Header/Header";
import { Button, Container, Row, Table } from "react-bootstrap";
import './Home.css';



const Home = () => {
    const [movies, setMovies] = useState([]);
    const fetchMoviesHandler = async() => {
        try{
            const resp = await fetch('https://swapi.dev/api/films/');
            const data = await resp.json();
            const transformedMovies = data.results.map(movie => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    openingText: movie.opening_crawl,
                    releaseDate: movie.release_date,
                }
            })
            setMovies(transformedMovies);
        }
        catch(err){
            console.error(err);
        }
    }


    const tours = [{date:'JUL16', location:'DETROIT, MI', place:'DTE ENERGY MUSIC THEATRE'},{date:'JUL19', location:'TORONTO,ON', place:'BUDWEISER STAGE'},{date:'JUL 22', location:'BRISTOW, VA', place:'JIGGY LUBE LIVE'},{date:'JUL 29', location:'PHOENIX, AZ', place:'AK-CHIN PAVILION'},{date:'AUG 2', location:'LAS VEGAS, NV', place:'T-MOBILE ARENA'},{date:'AUG 7', location:'CONCORD, CA', place:'CONCORD PAVILION'}]
    
    const tourInfo = tours.map(tour=>{
        return (
            <div className="d-flex align-items-center justify-content-between  border-bottom  border-black pb-2 pt-2 ">
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
                    <Table className="text-center fs-5">
                        {tourInfo}
                    </Table>
                </Row>
            </Container>

            <Container>
                <section><Button onClick={fetchMoviesHandler}>Fetch Movies</Button></section>
                <section>
                    <ul>
                        {console.log(movies)}
                    </ul>
                </section>
            </Container>


            <Footer/>
        </Fragment>
    );
}

export default Home;