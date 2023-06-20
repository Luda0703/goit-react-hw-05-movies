import { useState, useEffect } from "react";
import { getMovies } from "servise/servise";

export const useHome = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  

    useEffect(() => {
        getSearchMovies()
    }, [])
    const getSearchMovies = async () => {
        setIsLoading(true);
        try {
            const data = await getMovies();
            setMovies(data.results);
        } catch (error) {
            setError(error.massage);
        } finally {
            setIsLoading(false);
          }
    }
    return { movies, error, isLoading}
}