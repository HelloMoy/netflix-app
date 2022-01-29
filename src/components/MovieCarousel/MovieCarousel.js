import { useEffect, useState } from 'react';
import styles from './MovieCarousel.module.css';

const MovieCarousel = () => {

    const [movies, setMovies] = useState(null);
    const [movieToSearch, setMovieToSearch] = useState('the land before time');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&query=${movieToSearch}`)
            .then((response) => response.json())
            .then((movies) => {
                setMovies(movies);
            })
            .catch((err) => console.log('Chingó a su madre', { err }));
    }, [movieToSearch]);

    return (
        <div className={styles.movieCarousel}>

            {movies ?
                <>
                    <p className={styles.movieCarousel__title}>Thriller</p>
                    <ul className={styles.movieCarousel__movies}>
                        {movies.results.map((movie) => (
                            movie.poster_path &&
                            <li className={styles.movie} key={movie.id}>
                                <img
                                    className={styles.movie__image}
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </li>
                        ))}
                    </ul>
                </>
                :
                <p className={styles.movieCarousel__loader}>
                    Loading...
                </p>
            }
        </div>
    );
};

export default MovieCarousel;
