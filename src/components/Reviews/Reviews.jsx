import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stls from './Reviews.module.css';

const Reviews = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();

  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
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
      .then(json => setState(json.results))
      .catch(err => console.error('error:' + err));
  }, []);

  return state.length ? (
    state.map(el => (
      <div className={stls.reviews} key={el.id}>
        <h3>Author: {el.author_details.username}</h3>
        <p>{el.content}</p>
      </div>
    ))
  ) : (
    <p>We don`t have any reviews for this movie.</p>
  );
};

export default Reviews;
