import { useState, useEffect, useRef} from "react";
import getMovies from "servise/servise";
import { Loader } from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);

    const isFirstRender = useRef(true);
    

    useEffect(() => {
        if(isFirstRender.current) {
           isFirstRender.current = false;
           return ;
        }

        const getSearchMovies = async () => {
            setIsLoading (true);
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
        {movies && <MovieList movies={movies} />}
        {isLoading && <Loader/>}
        {error && <div>{error}</div>}
        </>
    )
}

export default Home;

