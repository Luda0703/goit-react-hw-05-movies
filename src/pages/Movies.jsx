import Form from "components/Form/Form";
import MovieList from "components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getMoviesQuery } from "servise/servise";
import { Loader } from "components/Loader/Loader";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        const currentQuery = search.get('query');
        // console.log({currentQuery})
        if (!currentQuery) return;

        const serchMovies = async () => {
            setIsLoading (true);
            try {
                const data = await getMoviesQuery(currentQuery);
                setMovies(data.results);
            } catch (error) {
                setError(error.massage);
            } finally {
                setIsLoading(false);
            }
        }
        serchMovies()
    }, [search])



    return (
        <>
        <Form setSearch={setSearch}/>
        {movies && <MovieList movies={movies}/>}
        {isLoading && <Loader/>}
        {error && <div>{error}</div>}
        </>
    )
}

export default Movies;