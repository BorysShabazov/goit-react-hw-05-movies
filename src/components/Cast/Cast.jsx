import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();

  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
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
      .then(json => setState(json.cast))
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <ul>
      {state.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
            alt=""
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
