import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='movies' element={<Movies/>}>
            <Route path='movies/:movieId' element={<div> MovieDetails</div>}/>
            <Route path='movies/:movieId/cast' element={<div> Cast</div>}/>
            <Route path='movies/:movieId/reviews' element={<div> Reviews</div>}/>
            
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
