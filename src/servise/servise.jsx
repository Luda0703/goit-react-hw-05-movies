import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = `0481b46021a7a1a44f55c7836fc47fbf`;
// const page = 1;

// const END_POINTS = {
//     trending: '/trending/movie/week',
    // querySearch: '/search/movie',
    // movieDetails: '/movie',
    // movieCredits: '/credits',
    // movieReviews: '/reviews',
//   };

 async function getMovies(page=1) {
    const responce = await axios.get(   
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&page=${page}&language=en-US`
    );
    return responce.data;
  
 
}

export default getMovies;