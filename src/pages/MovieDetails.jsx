import { useState, useEffect, useRef } from "react";
import { Link, useLocation, NavLink } from 'react-router-dom';
import { getMoviesDetails } from "servise/servise";
// import MovieDetailsList from "components/MovieDetailsList/MovieDetailsList";
import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null); 
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        const serchMovieDetails = async () => {
            try {
                const data = await getMoviesDetails(movieId);
                setMovies(data.results);
            } catch (error) {
                setError(error.massage);
            } 
        }
        serchMovieDetails()

    }, [movieId])

    const {original_title, overview, genres, poster_path, vote_average} = movies;

    return (
        <>
        {/* <MovieDetailsList /> */}
        <main>
            <Link to={backLinkLocationRef.current}>
              <button >Назад</button>
            </Link>
            {movies && (
            <div> 
                <img src={poster_path} alt={original_title}/>
                <h1>{original_title}</h1>
                <span>{vote_average}</span>
                <p>{overview}</p>
                <ul>
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
                </ul>
            </div>)}
            <ul>
            <li>
            <NavLink to="cast" state={location.state}>Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>Reviews</NavLink>
          </li>
        </ul>
        {error && <div>{error}</div>}
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        </main>
        </>
    )

}

export default MovieDetails;