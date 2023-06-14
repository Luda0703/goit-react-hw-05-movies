import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = `0481b46021a7a1a44f55c7836fc47fbf`;

export async function getMovies(page=1) {
    const responce = await axios.get(   
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&page=${page}&language=en-US`
    );
    return responce.data;
}


export async function getMoviesQuery(query, page=1) {
  const responce = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  console.log(responce.data)
  return responce.data;
}
