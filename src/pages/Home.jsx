import { useState, useEffect, useRef} from "react";
import { getMovies } from "servise/servise";
import MovieList from "components/MovieList/MovieList";
import { Loader } from "components/Loader/Loader";


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const isFirstRender = useRef(true);
    

    useEffect(() => {
        if(isFirstRender.current) {
           isFirstRender.current = false;
           return ;
        }

        const getSearchMovies = async () => {
            setIsLoading(true);
            try {
                const data = await getMovies();
                setMovies(data.results);
            } catch (error) {
                setError(error.massage);
            } finally {
                setIsLoading(false);
              }
        }
        getSearchMovies()
    }, [])

    return (
        <>
        {movies.length > 0 && <MovieList movies={movies} />}
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )
}

export default Home;
