import { useHome } from "hooks/useHome";
import MovieList from "components/MovieList/MovieList";
import { Loader } from "components/Loader/Loader";


const Home = () => {
    const { movies, error, isLoading } = useHome();

    return (
        <>
        {movies && <MovieList movies={movies} />}
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )
}

export default Home;

