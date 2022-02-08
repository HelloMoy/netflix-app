import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { movieImagePath } from '../../paths/links';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import styles from './MoviesGrid.module.css';

const MoviesGrid = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const lastElementRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.action?.movies);
    const lastMovieId = useSelector(state => state.movies.action?.lastMovieId);

    const link = 'https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=true';

    const useElementOnScreenOptions = {
        threshold: .5
    };

    const lastElement = useElementOnScreen(useElementOnScreenOptions, lastElementRef);

    const linkAndGenre = {
        moviesCategoryPath: link,
        moviesCategoryCamelize: 'action'
    }

    console.log(lastElement);

    useEffect(() => {
        dispatch(getMoviesAsync(linkAndGenre));
    }, []);

    useEffect(() => {
        if (lastElement) {
            console.log('fetching');
            const prevPageNumber = pageNumber;
            setPageNumber(prevPageNumber + 1);
            linkAndGenre.moviesCategoryPath = `${link}&page=${prevPageNumber + 1}`;
            dispatch(getMoviesAsync(linkAndGenre));
        }
    }, [lastElement]);



    return (
        <div className={styles.moviesGrid}>
            {movies &&
                movies.map(movie => (
                    <div key={movie.id} ref={lastMovieId === movie.id ? lastElementRef : null}>
                        {lastMovieId === movie.id ? console.log(lastElementRef.current) : null}
                        <img className={styles.moviesGrid__image} alt={movie.title} src={`${movieImagePath}${movie.backdrop_path}`} />
                    </div>))
            }
        </div>
    );
};

export default MoviesGrid;
