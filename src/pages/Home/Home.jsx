import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const fetch = require('node-fetch');
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ0NDgyOGYwNjk5ZTMzNjcyZDA1MzE5MjZhMWQzOCIsInN1YiI6IjY0ZGZhNDIyYWFlYzcxMDNmYTQ4MWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoq_TkMt1jtJtcXp72OXwP7KSig9Xfej9pwn74DL244',
  },
};

const Home = () => {
  const [state, setState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setState(json.results))
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <div>
      <ul>
        {state.length
          ? state.map(el => {
              return (
                <li key={el.id}>
                  <NavLink to={`movies/${el.id}`} state={{ from: location }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                      alt="poster"
                    />
                    {el.title}
                  </NavLink>
                </li>
              );
            })
          : []}
      </ul>
    </div>
  );
};

export default Home;
