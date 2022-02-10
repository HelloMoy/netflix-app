import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import Movie from '../Movie';
import styles from './MoviesGrid.module.css';

const MoviesGrid = ({ moviesPath, moviesTopicToSearch, isByGender = false }) => {

    const lastElementRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies[moviesTopicToSearch]?.movies);
    const moviesStatus = useSelector(state => state.movies.status);
    const lastPageFetched = useSelector(state => state.movies[moviesTopicToSearch]?.lastPageFetched);
    const totalPages = useSelector(state => state.movies[moviesTopicToSearch]?.totalPages);

    const useElementOnScreenOptions = {
        threshold: .01
    };

    const lastElementIsVisible = useElementOnScreen(useElementOnScreenOptions, lastElementRef);

    const linkAndGenre = {
        moviesPath,
        moviesTopicToSearch, 
        isByGender
    }

    useEffect(() => {
        if (lastPageFetched && isByGender) return;
        dispatch(getMoviesAsync(linkAndGenre));
        console.log('first fetching');
    }, [moviesTopicToSearch]);

    useEffect(() => {
        if (lastElementIsVisible && lastPageFetched < totalPages) {
            console.log('fetching page: ' + ((lastPageFetched) + 1));
            linkAndGenre.moviesPath = `${moviesPath}&page=${Number(lastPageFetched) + 1}`;
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
                                moviesTopicToSearch={moviesTopicToSearch}
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
