import { useState, useEffect, useRef} from "react";
import { getMovies } from "servise/servise";
import MovieList from "components/MovieList/MovieList";


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const isFirstRender = useRef(true);
    

    useEffect(() => {
        if(isFirstRender.current) {
           isFirstRender.current = false;
           return ;
        }

        const getSearchMovies = async () => {
            try {
                const data = await getMovies();
                setMovies(data.results);
            } catch (error) {
                setError(error.massage);
            } 
        }
        getSearchMovies()
    }, [])

    return (
        <>
        {movies && <MovieList movies={movies} />}
        {error && <div>{error}</div>}
        </>
    )
}

export default Home;

