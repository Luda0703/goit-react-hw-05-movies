import { useState, useEffect } from "react";
import { getMoviesDetails } from "servise/servise";
import { useParams } from "react-router-dom";

export const useMovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    

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
return { movie, error, isLoading }

}