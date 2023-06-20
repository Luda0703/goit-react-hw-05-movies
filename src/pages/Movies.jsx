import Form from "components/Form/Form";
import MovieList from "components/MovieList/MovieList";
import { useMovies } from "hooks/useMovies";
import { Loader } from "components/Loader/Loader";


const Movies = () => {
    const { movies, error, isLoading, setSearchParams } = useMovies();
   
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