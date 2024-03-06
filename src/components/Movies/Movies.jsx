import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";
import classes from './Movies.module.css'; 




const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchMoviesHandler = async() => {
        try{
            setIsLoading(true);
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
            setIsLoading(false);
        }
        catch(err){
            console.error(err);
        }
    }
    return (
        <Container>
        <section className="d-flex align-items-center  justify-content-center mt-5"><Button onClick={fetchMoviesHandler}>Fetch Movies</Button></section>
        <section>
            <ul>
                {isLoading ? <div className={classes.loader}></div> : movies.map(movie => <MovieItem key={movie.id} data={movie}></MovieItem>)}
            </ul>
        </section>
    </Container>
    )
}

export default Movies