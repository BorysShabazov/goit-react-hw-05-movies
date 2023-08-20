import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import stls from './Home.module.css';

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
      <ul className={stls.list}>
        {state.length
          ? state.map(el => {
              return (
                <li className={stls.item} key={el.id}>
                  <NavLink to={`movies/${el.id}`} state={{ from: location }}>
                    <div className={stls.itemThomb}>
                      <div className={stls.placeholderImg}>
                        <img
                          className={stls.img}
                          src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                          alt="poster"
                        />
                      </div>

                      <p className={stls.title}>{el.title}</p>
                    </div>
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
