import { Loader } from "components/Loader/Loader";
// import { useCast } from '../../hooks/useCast'
import { 
    CastList,
    CastImg,
    CastP
 } from "./Cast.styled";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetailsCast } from "../../servise/servise";

const Cast = () => {
    // const { cast, error, isLoading } = useCast
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
                        : `https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg`
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