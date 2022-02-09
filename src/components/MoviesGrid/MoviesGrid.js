import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { movieImagePath } from '../../paths/links';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import styles from './MoviesGrid.module.css';

const MoviesGrid = ({ moviesCategoryPath, moviesCategoryCamelize }) => {

    const lastElementRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies[moviesCategoryCamelize]?.movies);
    const moviesStatus = useSelector(state => state.movies.status);
    const lastMovieId = useSelector(state => state.movies[moviesCategoryCamelize]?.lastMovieId);
    const lastPageFetched = useSelector(state => state.movies[moviesCategoryCamelize]?.lastPageFetched);
    const totalPages = useSelector(state => state.movies[moviesCategoryCamelize]?.totalPages);


    const useElementOnScreenOptions = {
        threshold: .1
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
                movies.map(movie => (
                    <div key={movie.id} ref={lastMovieId === movie.id ? lastElementRef : null}>
                        <img className={styles.moviesGrid__image} alt={movie.title} src={`${movieImagePath}${movie.poster_path}`} />
                    </div>))
            }
            {moviesStatus === 'loading' ? 'loading' : null}
        </div>
    );
};

export default MoviesGrid;
