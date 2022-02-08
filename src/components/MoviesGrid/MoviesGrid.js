import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { movieImagePath } from '../../paths/links';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import styles from './MoviesGrid.module.css';

const MoviesGrid = ({ moviesCategory, moviesCategoryPath, moviesCategoryCamelize }) => {

    const [pageNumber, setPageNumber] = useState(1);
    const lastElementRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies[moviesCategoryCamelize]?.movies);
    const moviesStatus = useSelector(state => state.movies.status);
    const lastMovieId = useSelector(state => state.movies[moviesCategoryCamelize]?.lastMovieId);

    const useElementOnScreenOptions = {
        threshold: .1
    };

    const lastElement = useElementOnScreen(useElementOnScreenOptions, lastElementRef);

    const linkAndGenre = {
        moviesCategoryPath,
        moviesCategoryCamelize
    }

    useEffect(() => {
        if (moviesStatus !== 'fulfilled') {
            console.log('first fetching');
            dispatch(getMoviesAsync(linkAndGenre));
        }
    }, []);

    useEffect(() => {
        if (lastElement) {
            console.log('fetching');
            const prevPageNumber = pageNumber;
            setPageNumber(prevPageNumber + 1);
            linkAndGenre.moviesCategoryPath = `${moviesCategoryPath}&page=${prevPageNumber + 1}`;
            dispatch(getMoviesAsync(linkAndGenre));
        }
    }, [lastElement]);

    return (
        <div className={styles.moviesGrid}>
            <div>{moviesCategory}</div>
            {
                movies &&
                movies.map(movie => (
                    <div key={movie.id} ref={lastMovieId === movie.id ? lastElementRef : null}>
                        <img className={styles.moviesGrid__image} alt={movie.title} src={`${movieImagePath}${movie.backdrop_path}`} />
                    </div>))
            }
            {moviesStatus === 'loading' ? 'loading' : null}
        </div>
    );
};

export default MoviesGrid;
