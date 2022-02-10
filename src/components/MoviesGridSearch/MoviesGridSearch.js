import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import Movie from '../Movie';
import styles from './MoviesGridSearch.module.css';

const MoviesGridSearch = ({ moviesCategoryPath, moviesCategoryCamelize, isByGender = false }) => {

    const titleToSearchFromParameters = useParams().title;
    // const titleToSearchFromParameters = 'spider';

    const lastElementRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.searchByName?.movies);
    const moviesStatus = useSelector(state => state.movies.status);
    const lastPageFetched = useSelector(state => state.movies.searchByName?.lastPageFetched);
    const totalPages = useSelector(state => state.movies.searchByName?.totalPages);

    const useElementOnScreenOptions = {
        threshold: .01
    };

    const lastElementIsVisible = useElementOnScreen(useElementOnScreenOptions, lastElementRef);

    const link = `https://api.themoviedb.org/3/search/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&query=${titleToSearchFromParameters}`;

    const linkAndGenre = {
        moviesCategoryPath: link,
        moviesCategoryCamelize:'searchByName',
        isByGender
    }


    useEffect(() => {
        if (lastPageFetched && isByGender) return;
        dispatch(getMoviesAsync(linkAndGenre));
        // dispatch(getMoviesAsync(linkAndGenre));
        console.log('first fetching');
    }, [titleToSearchFromParameters]);

    useEffect(() => {
        if (lastElementIsVisible && lastPageFetched < totalPages) {
            console.log('fetching page: ' + ((lastPageFetched) + 1));
            linkAndGenre.moviesCategoryPath = `${link}&page=${Number(lastPageFetched) + 1}`;
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
                                moviesCategoryCamelize={linkAndGenre.moviesCategoryCamelize}
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

export default MoviesGridSearch;
