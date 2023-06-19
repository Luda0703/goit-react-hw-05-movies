import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetailsCast } from "servise/servise";
import { 
    CastList,
    CastImg,
    CastP
 } from "./Cast.styled";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
       
        serchMovieDetailsCast(movieId);
    }, [movieId])
    const serchMovieDetailsCast = async (movieId) => {
        setIsLoading(true);
        try {
            const data = await getMoviesDetailsCast(movieId);
            setCast(data.cast);
        } catch (error) {
            setError(error.massage);
        } finally {
          setIsLoading(false);
        }
    }

    return (
        <>
        <CastList>
        {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <CastImg
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `https://www.suryalaya.org/images/no_image.jpg`
                    }
                    alt={original_name}   
                  />
              <CastP> Actor: {original_name}</CastP>
              <CastP>Character: {character}</CastP>
            </li>
          ))}
        </CastList>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )

}
export default Cast;