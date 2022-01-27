import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState(null);
  const [movieToSearch, setMovieToSearch] = useState('titanic');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&query=${movieToSearch}`)
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies)
        console.log(movies)
      })
      .catch((err) => console.log('Chingó a su madre', { err }));
  }, [movieToSearch]);

  return (
    <div className="App">
      <h1>peliculas</h1>
      {movies &&
        <ul>
          {movies.results.map((movie) => (
            <li key={movie.id}>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default App;