import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from "components/Loader/Loader";
// import { useMovieDetails } from 'hooks/useMovieDetails';
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
  Li,
  StyledLink

} from "./MovieDetails.styled";

import { useState, useEffect } from "react";
import { getMoviesDetails } from "servise/servise";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
   // const { movie, error, isLoading } = useMovieDetails;
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    serchMovieDetails(movieId)
}, [movieId])

const serchMovieDetails = async (movieId) => {
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
                  : `https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg`
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
            <StyledLink to="cast" state={location.state} >Cast</StyledLink>
          </Li>
          <Li>
            <StyledLink to='reviews' state={location.state}>Reviews</StyledLink>
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