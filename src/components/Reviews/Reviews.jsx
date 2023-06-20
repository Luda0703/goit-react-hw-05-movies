import { getMoviesDetailsReviews } from "servise/servise";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
    ReviewsList,
    Autor,
    Content

 } from "./Reviews.styled";

const Reviews = () => {
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

    return (
        <>
        <ReviewsList>
        {reviews.length > 0
          &&  reviews.map(({ author, content, id }) => (
              <li key={id}>
                <Autor>{author}</Autor>
                <Content>{content}</Content>
              </li>
        ))}
        </ReviewsList>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )

}
export default Reviews;