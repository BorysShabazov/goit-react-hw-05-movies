import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();
  const movieId = serchParams.get('id') || '';
  const location = useLocation();

  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1`;
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
      .then(json => setMovies(json.results))
      .catch(err => console.error('error:' + err));
  }, [movies]);

  function searchMovie(e) {
    e.preventDefault();
    if (!e.currentTarget.searchValue.value) {
      return setSearchParams({});
    }
    setSearchParams({ id: e.currentTarget.searchValue.value });
    e.currentTarget.searchValue.value = '';
  }

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieId)
  );

  return (
    <>
      <form action="submit" onSubmit={searchMovie}>
        <label>
          <input name="searchValue" type="text" />
        </label>
        <button>search</button>
      </form>
      {movies.length ? (
        <ul>
          {visibleMovies.map(el => (
            <li key={el.id}>
              {' '}
              <NavLink to={`${el.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                  alt="poster"
                />
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

export default Movies;
