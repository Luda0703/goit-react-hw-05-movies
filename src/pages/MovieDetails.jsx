import { useState, useEffect } from "react";
import { getMoviesDetails } from "servise/servise";
import MovieDetailsList from "components/MovieDetailsList/MovieDetailsList";
import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 
    const { movieId } = useParams();

    useEffect(() => {
        const serchMovieDetails = async () => {
            setIsLoading (true);
            try {
                const data = await getMoviesDetails(movieId);
                setMovies(data.results);
            } catch (error) {
                setError(error.massage);
            } finally {
                setIsLoading(false);
            }
        }
        serchMovieDetails()

    }, [movieId])

    return (
        <>
        <MovieDetailsList/>
        {isLoading && <Loader/>}
        {error && <div>{error}</div>}
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        </>
    )

}

export default MovieDetails;