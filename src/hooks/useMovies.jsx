import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getMoviesQuery } from "servise/servise";

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams(); 

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) return;

        serchMovies(currentQuery)
    }, [searchParams])

    const serchMovies = async (currentQuery) => {
        setIsLoading(true);
        try {
            const data = await getMoviesQuery(currentQuery);
            setMovies(data.results);
        } catch (error) {
            setError(error.massage);
        } finally {
            setIsLoading(false);
        }
    }
    return { movies, error, isLoading, setSearchParams}

}