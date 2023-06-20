import { Loader } from "components/Loader/Loader";
import { useReviews } from "hooks/useReviews";

import { 
    ReviewsList,
    Autor,
    Content,
    P
 } from "./Reviews.styled";

const Reviews = () => {
    const { reviews, error, isLoading } = useReviews()

    return (
        <>
        <ReviewsList>
        {reviews.length > 0
          ?  reviews.map(({ author, content, id }) => (
              <li key={id}>
                <Autor>{author}</Autor>
                <Content>{content}</Content>
              </li> 
        )) : <P>No reviews</P>}
        </ReviewsList>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )

}
export default Reviews;