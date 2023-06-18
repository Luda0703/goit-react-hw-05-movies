import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
   const location = useLocation();
   
  // console.log({movies})
  return (
    <>
      <ul>
        {movies && movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location}}>
              <h3>{original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default MovieList;