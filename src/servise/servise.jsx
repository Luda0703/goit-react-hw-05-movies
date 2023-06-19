import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = `0481b46021a7a1a44f55c7836fc47fbf`;

export async function getMovies(page=1) {
    const responce = await axios.get(   
      `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`
    )
    return responce.data;
}


export async function getMoviesQuery(query) {
  const responce = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  )
  return responce.data;
}

export async function getMoviesDetails(id) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${KEY}`
  )
  return responce.data;
}

export async function getMoviesDetailsCast(movie_id) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`
  )
  return responce.data;
}

export async function getMoviesDetailsReviews(movieId) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return responce.data;
}
