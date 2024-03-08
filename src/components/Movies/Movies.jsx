import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";
import classes from './Movies.module.css'; 




const Movies = () => {
    let content = <p>No Movies Found</p>;

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    const [intervalId, setIntervalId] = useState(null);

    const stopFetchRetry = () => {
        clearInterval(intervalId);
        setIsLoading(false);
        setFetchError(null);
    }


    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        try{
            const resp = await fetch('https://swapi-node.now.sh/api/films');
            if(!resp.ok)
                throw new Error('Something went wrong ....Retrying');
            const data = await resp.json();

            const transformedMovies = data.results.map(movie => {
                return {
                    id: movie.fields.episode_id,
                    title: movie.fields.title,
                    openingText: movie.fields.opening_crawl,
                    releaseDate: movie.fields.release_date,
                }
            });
            setMovies(transformedMovies);
            setIsLoading(false);
            setFetchError(null);
        }
        catch(err){
            setFetchError(err.message);  
            setIsLoading(false);
            setIntervalId(setInterval(()=>{
                fetchMoviesHandler();
            },5000));
        }
    }, []);

    useEffect(()=>{
        fetchMoviesHandler();
    },[fetchMoviesHandler]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);   
    
    if(movies.length>0)
        content = movies.map(movie => <MovieItem key={movie.id} data={movie}></MovieItem>);
    else if(fetchError)
        content = <Container><div>{fetchError}</div><div className={classes.loader}></div><Button onClick={stopFetchRetry}>STOP</Button></Container>;
    else if(isLoading)
        content = <div className={classes.loader}></div>;

    return (
        <Container>
        <section className="p-0 text-center pt-5 list-unstyled ">
                {content}
        </section>
    </Container>
    )
}

export default Movies