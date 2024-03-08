import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";
import classes from './Movies.module.css'; 
import AddForm from "./AddForm";




const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [intervalId, setIntervalId] = useState(null);
    const [userContent, setUserContent] = useState([]);

    const stopFetchRetry = () => {
        clearInterval(intervalId);
        setIsLoading(false);
        setFetchError(null);
    }


    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        try{
            const resp = await fetch('https://react-http-85467-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');
            if(!resp.ok)
                throw new Error('Something went wrong ....Retrying');
            const data = await resp.json();

            const transformedMovies = [];
            for(const key in data){
                transformedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                })
            }
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

    const addMovieHandler = useCallback(async(newMovie) => {
        try{
            const resp = await fetch('https://react-http-85467-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',{
                method: 'POST',
                body: JSON.stringify(newMovie),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await resp.json();
            fetchMoviesHandler();
            // setUserContent(userContent => {
            //     return [...userContent, <MovieItem key={newMovie.id} data={newMovie}></MovieItem>];
            // })
        }
        catch(err){
            console.log(err);
        }
    }, []);

    const deleteMovieHandler = async (id) => {
        try{
            const resp = await fetch(`https://react-http-85467-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,{method: 'DELETE'});
            if(!resp.ok)
                throw new Error('something went wrong...');
            else
                fetchMoviesHandler();
        }
        catch(err){
            console.log(err);
        }
    }
 

    let content = <p>No Movies Found</p>;
    if(movies.length>0)
        content = movies.map(movie => <div className="pb-2 border-botttom border-2" key={movie.id}><MovieItem key={movie.id} data={movie}></MovieItem><Button onClick={()=>deleteMovieHandler(movie.id)} className="btn btn-danger">Delete</Button></div>);
    else if(fetchError)
        content = <Container><div>{fetchError}</div><div className={classes.loader}></div><Button onClick={stopFetchRetry}>STOP</Button></Container>;
    else if(isLoading)
        content = <div className={classes.loader}></div>;


    // useEffect(()=>{
    //     fetchMoviesHandler();
    // },[fetchMoviesHandler]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);   

    return (
        <Container className="text-center">
            <section className="mt-5 mb-5 p-5 border border-3 border bg-light rounded-4">
                <AddForm onSubmit={addMovieHandler}/>
            </section>
            <section className="p-5 border border-3 border mb-5 bg-light rounded-4 "><Button onClick={fetchMoviesHandler}>Fetch Movies</Button></section>
            <section className="p-5 mb-5 list-unstyled border border-3 border bg-light rounded-4">
                {userContent}
                {content}
            </section>
        </Container>
    )
}

export default Movies