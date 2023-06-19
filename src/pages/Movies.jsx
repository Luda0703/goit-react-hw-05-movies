import Form from "components/Form/Form";
import MovieList from "components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getMoviesQuery } from "servise/servise";
import { Loader } from "components/Loader/Loader";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        // console.log({currentQuery})
        if (!currentQuery) return;

        
        serchMovies(currentQuery)
    }, [searchParams])
    const serchMovies = async (currentQuery) => {
        setIsLoading(true);
        try {
            const data = await getMoviesQuery(currentQuery);
            setMovies(data.results);
        } catch (error) {
            setError(error.massage);
        } finally {
            setIsLoading(false);
          }
    }



    return (
        <>
        <Form setSearchParams={setSearchParams}/>
        {movies.length > 0 && <MovieList movies={movies}/>}
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )
}

export default Movies;