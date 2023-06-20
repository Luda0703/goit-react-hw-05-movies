import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetailsReviews } from "servise/servise";

export const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        serchMovieDetailsRevievs(movieId);
    }, [movieId])

    const serchMovieDetailsRevievs = async (movieId) => {
        setIsLoading(true);
        try {
            const data = await getMoviesDetailsReviews(movieId);
            setReviews(data.results);
        } catch (error) {
            setError(error.massage);
        } finally {
          setIsLoading(false);
        }
    }
    return { reviews, error, isLoading }
}