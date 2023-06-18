const { useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");
const { getMoviesDetailsCast } = require("servise/servise");
import { Loader } from "components/Loader/Loader";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        const serchMovieDetailsCast = async () => {
            setIsLoading(true);
            try {
                const cast = await getMoviesDetailsCast(movieId);
                setCast(cast);
            } catch (error) {
                setError(error.massage);
            } finally {
              setIsLoading(false);
            }
        }
        serchMovieDetailsCast();
    }, [movieId])

    return (
        <>
        <ul>
        {cast && cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={original_name}
              />
              <p> Actor: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )

}
export default Cast;