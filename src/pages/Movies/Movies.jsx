import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import stls from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();
  const movieQ = serchParams.get('q') || '';
  const location = useLocation();

  console.log(movieQ);

  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieQ}&include_adult=false&language=en-US&page=1`;

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ0NDgyOGYwNjk5ZTMzNjcyZDA1MzE5MjZhMWQzOCIsInN1YiI6IjY0ZGZhNDIyYWFlYzcxMDNmYTQ4MWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoq_TkMt1jtJtcXp72OXwP7KSig9Xfej9pwn74DL244',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error('error:' + err));
  }, [url, fetch]);

  function searchMovie(e) {
    e.preventDefault();
    if (!e.currentTarget.searchValue.value) {
      return setSearchParams({});
    }
    setSearchParams({ q: e.currentTarget.searchValue.value });
    e.currentTarget.searchValue.value = '';
  }

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieQ.toLowerCase())
  );

  return (
    <div className={stls.movie}>
      <form action="submit" onSubmit={searchMovie} className={stls.form}>
        <label>
          <input name="searchValue" type="text" className={stls.input} />
        </label>
        <button className={stls.search}>Search</button>
      </form>
      {movies.length ? (
        <ul className={stls.list}>
          {visibleMovies.map(el => (
            <li className={stls.item} key={el.id}>
              <NavLink to={`${el.id}`} state={{ from: location }}>
                <div className={stls.itemThomb}>
                  <div className={stls.placeholderImg}>
                    <img
                      className={stls.img}
                      src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                      alt="poster"
                    />
                  </div>

                  <p className={stls.title}> {el.title}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Not Found</h2>
      )}
    </div>
  );
};

export default Movies;
