import { useState, useEffect } from "react";
import { getMoviesDetails } from "servise/servise";
import { useParams, useLocation } from "react-router-dom";
import { useRef } from 'react';


export const useMovieDetails = () => {
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
return { movie, error, isLoading, backLinkLocationRef, location }

}