import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";
import classes from './Movies.module.css'; 




const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const fetchMoviesHandler = async() => {
        setIsLoading(true);
        setFetchError(null);
        try{
            const resp = await fetch('https://swapi.dev/api/films/');
            if(!resp.ok){
                throw new Error('Something went wrong ....Retrying');
            }
            console.log('hhh    ')
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
            setFetchError(err.message);  
            setIsLoading(false);
        }

        // let content = <p>No Movies Found</p>
    }
    console.log(movies.length, isLoading, fetchError)
    return (
        <Container>
        <section className="d-flex align-items-center  justify-content-center mt-5"><Button onClick={fetchMoviesHandler}>Fetch Movies</Button></section>
        <section>
            <ul>
                {!isLoading && movies.length>0 && movies.map(movie => <MovieItem key={movie.id} data={movie}></MovieItem>)}
                {!isLoading && movies.length===0 && !fetchError && <p>No Movies Found</p>}
                {!isLoading && fetchError && <span>{fetchError}</span>}
                {isLoading && <div className={classes.loader}></div>}
            </ul>
        </section>
    </Container>
    )
}

export default Movies