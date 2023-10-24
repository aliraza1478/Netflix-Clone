import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: { q: 'game of thr' },
  headers: {
    'X-RapidAPI-Key': '5481715bbfmshe3e867b0b41c033p1d070cjsn042642386218',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

const Home = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.request(options);
        setMovies(response.data.d);
        console.log(response.data.d);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <div className="element">
          {Movies.map((movie, index) => (
            <div key={index}>
              {movie.i && movie.i.imageUrl && (
                <img src={movie.i.imageUrl} alt={movie.l} />
              )}
              <li>{movie.l}</li>
              {movie.rank && <p>Rank: {movie.rank}</p>}
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Home;
