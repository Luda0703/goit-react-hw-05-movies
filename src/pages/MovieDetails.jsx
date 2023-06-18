import { useState, useEffect, useRef } from "react";
import { Link, useLocation, NavLink } from 'react-router-dom';
import { getMoviesDetails } from "servise/servise";
// import MovieDetailsList from "components/MovieDetailsList/MovieDetailsList";
import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        const serchMovieDetails = async () => {
          setIsLoading(true);
            try {
              // console.log(movieId)
                const data = await getMoviesDetails(movieId);
                setMovie(data.results);
            } catch (error) {
                setError(error.massage);
            } finally {
              setIsLoading(false);
            }
        }
        serchMovieDetails()

    }, [movieId])

    // const {original_title, overview, genres, poster_path, vote_average} = movie;

    return (
        <>
        {/* <MovieDetailsList /> */}
        <main>
            <Link to={backLinkLocationRef.current}>
              <button >Go back</button>
            </Link>
            {movie && (
            <div> 
                <img src={movie.poster_path} alt={movie.original_title}/>
                <h1>{movie.original_title}</h1>
                <span>{movie.vote_average}</span>
                <p>{movie.overview}</p>
                <ul>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => <li key={id}>{name}</li>
                  )}
                </ul>
            </div>
             )} 
            <ul>
            <li>
            <NavLink to="cast" state={location.state}>Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>Reviews</NavLink>
          </li>
        </ul>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        </main>
        </>
    )

}

export default MovieDetails;