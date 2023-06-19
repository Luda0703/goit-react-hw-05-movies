import { useState, useEffect, useRef } from "react";
import { Link, useLocation, NavLink } from 'react-router-dom';
import { getMoviesDetails } from "servise/servise";
import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { 
  Button, 
  Container, 
  DivImg, 
  Title, 
  Raiting, 
  Overview, 
  Img, 
  List, 
  ListItem,
  Ul, 
  Li

} from "./MovieDetails.styled";

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
                const data = await getMoviesDetails(movieId);
                setMovie(data);
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
        <main>
            <Link to={backLinkLocationRef.current}>
              <Button >Go back</Button>
            </Link>
            {movie && (
              <Container>
             <DivImg>
                <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : `https://www.suryalaya.org/images/no_image.jpg`
              }
              alt={movie.title}
            />
            </DivImg>
            <div>
                <Title>{movie.original_title}</Title>
                <Raiting>Rating: {movie.vote_average}</Raiting>
                <Overview>{movie.overview}</Overview>
                <List>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => <ListItem key={id}>{name}</ListItem>
                  )}
                </List>
            </div>
            </Container>
             )} 
            <Ul>
            <Li>
            <NavLink to="cast" state={backLinkLocationRef.current} >Cast</NavLink>
          </Li>
          <Li>
            <NavLink to='reviews' state={backLinkLocationRef.current}>Reviews</NavLink>
          </Li>
        </Ul>
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