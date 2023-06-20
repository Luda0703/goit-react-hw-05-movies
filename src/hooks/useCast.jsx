import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetailsCast } from "../servise/servise";

export const useCast = () => {
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
    return { cast, error, isLoading }
}