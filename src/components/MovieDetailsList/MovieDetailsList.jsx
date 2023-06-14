import { Link, useLocation, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from 'components/Loader/Loader';

const MovieDetailsList = ({ original_title, overview, genres, poster_path, vote_average }) => {
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/');

    // const { original_title, overview, genres, poster_path, vote_average } = movie;

    return (
        <>
        <main>
            <Link to={backLinkRef.current}>
              <button >Назад</button>
            </Link>
            <img src={poster_path}/>
            <div>
                <h1>{original_title}</h1>
                <span>{vote_average}</span>
                <p>{overview}</p>
                <ul>
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
                </ul>
            </div>
            <ul>
            <li>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
        </main>
        </>
    )

}
export default MovieDetailsList;