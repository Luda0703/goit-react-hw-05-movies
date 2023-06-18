import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path='movies/:movieId' element={<MovieDetails/>}>
            <Route path='movies/:movieId/cast' element={<div> Cast</div>}/>
            <Route path='movies/:movieId/reviews' element={<div> Reviews</div>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
