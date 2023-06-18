import Form from "components/Form/Form";
import MovieList from "components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getMoviesQuery } from "servise/servise";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null); 

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        // console.log({currentQuery})
        if (!currentQuery) return;

        const serchMovies = async () => {
            try {
                const data = await getMoviesQuery(currentQuery);
                setMovies(data.results);
            } catch (error) {
                setError(error.massage);
            } 
        }
        serchMovies()
    }, [searchParams])



    return (
        <>
        <Form setSearchParams={setSearchParams}/>
        {movies.length > 0 && <MovieList movies={movies}/>}
        {error && <div>{error}</div>}
        </>
    )
}

export default Movies;