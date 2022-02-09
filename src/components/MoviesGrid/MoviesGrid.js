import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import Movie from '../Movie';
import styles from './MoviesGrid.module.css';

const MoviesGrid = ({ moviesCategoryPath, moviesCategoryCamelize }) => {

    const lastElementRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies[moviesCategoryCamelize]?.movies);
    const moviesStatus = useSelector(state => state.movies.status);
    const lastPageFetched = useSelector(state => state.movies[moviesCategoryCamelize]?.lastPageFetched);
    const totalPages = useSelector(state => state.movies[moviesCategoryCamelize]?.totalPages);

    const useElementOnScreenOptions = {
        threshold: .01
    };

    const lastElementIsVisible = useElementOnScreen(useElementOnScreenOptions, lastElementRef);

    const linkAndGenre = {
        moviesCategoryPath,
        moviesCategoryCamelize
    }

    useEffect(() => {
        if (lastPageFetched) return;
        dispatch(getMoviesAsync(linkAndGenre));
        console.log('first fetching');
    }, [moviesCategoryCamelize]);

    useEffect(() => {
        if (lastElementIsVisible && lastPageFetched < totalPages) {
            console.log('fetching page: ' + ((lastPageFetched) + 1));
            linkAndGenre.moviesCategoryPath = `${moviesCategoryPath}&page=${Number(lastPageFetched) + 1}`;
            dispatch(getMoviesAsync(linkAndGenre));
        }
    }, [lastElementIsVisible]);

    return (
        <div className={styles.moviesGrid}>
            {
                movies &&
                <ul className={styles.moviesGrid__list}>
                    {movies.map(movie => (
                        <div className={styles.movie} key={movie.id}>
                            <Movie
                                movie={movie}
                                lastMovieRef={lastElementRef}
                                moviesCategoryCamelize={moviesCategoryCamelize}
                                isMovieGrid
                            />
                        </div>
                    ))}
                </ul>
            }
            {moviesStatus === 'loading' ? 'loading' : null}
        </div>
    );
};

export default MoviesGrid;
