import { useEffect, useState } from 'react';
import { movieImagePath } from '../../paths/links';
import { getData } from '../../services/';
import Loader from '../Loader/';
import styles from './MovieCarousel.module.css';

const MovieCarousel = ({ moviesCategoryPath, moviesCategory }) => {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        const getMovies = async () => {
            const response = await getData(moviesCategoryPath);
            setMovies(response);
        };

        getMovies();
    }, []);

    return (
        <div className={styles.movieCarousel}>
            {movies ?
                <>
                    <p className={styles.movieCarousel__title}>{moviesCategory}</p>
                    <ul className={styles.movieCarousel__movies}>
                        {movies.results.map((movie) => (
                            movie.poster_path &&
                            <li className={styles.movie} key={movie.id}>
                                <img
                                    className={styles.movie__image}
                                    src={`${movieImagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </li>
                        ))}
                    </ul>
                </>
                :
                <div className={styles.movieCarousel__loader}>
                    <Loader />
                </div>
            }
        </div>
    );
};

export default MovieCarousel;
