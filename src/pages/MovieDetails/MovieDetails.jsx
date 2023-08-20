import { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  const location = useLocation();

  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ0NDgyOGYwNjk5ZTMzNjcyZDA1MzE5MjZhMWQzOCIsInN1YiI6IjY0ZGZhNDIyYWFlYzcxMDNmYTQ4MWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoq_TkMt1jtJtcXp72OXwP7KSig9Xfej9pwn74DL244',
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setState(json))
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <>
      <div>
        <NavLink to={location.state?.from || '/'}>back</NavLink>
        <img
          src={`https://image.tmdb.org/t/p/w200/${state.poster_path}`}
          alt="poster"
        />
        <h2>
          {state.title} ({new Date(state.release_date).getFullYear()})
        </h2>
        <p>
          User score:
          {state.vote_average ? state.vote_average.toFixed(1) * 10 : ''}%
        </p>
        <h3>Overview</h3>
        <p>{state.overview}</p>
        <h3>Genres</h3>
        <p>{state.genres && state.genres.map(el => el.name).join(' ')}</p>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              to={`/movies/${id}/cast`}
              state={{ from: location.state?.from } || ''}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${id}/reviews`}
              state={{ from: location.state?.from } || ''}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
