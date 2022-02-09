import { useEffect, useRef, useState } from 'react';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import CarouselArrowButton from '../CarouselArrowButton/';
import Loader from '../Loader/';
import Movie from "../Movie/";
import { useDispatch, useSelector } from 'react-redux';
import styles from './MovieCarousel.module.css';

const MovieCarousel = ({ moviesCategoryPath, moviesCategory, moviesCategoryCamelize }) => {

    const [onHoverCarousel, setOnHoverCarousel] = useState(false);

    const movieCarouselRef = useRef();
    const movieCarouselFirstChildRef = useRef();
    const movieCarouselLastChildRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies[moviesCategoryCamelize]?.movies);
    const moviesStatus = useSelector(state => state.movies[moviesCategoryCamelize]?.status);
    const lastPageFetched = useSelector(state => state.movies[moviesCategoryCamelize]?.lastPageFetched);

    useEffect(() => {
        if(lastPageFetched) return;
        dispatch(getMoviesAsync({ moviesCategoryPath, moviesCategoryCamelize }));
    }, []);

    return (
        <div className={styles.movieCarousel}>
            {moviesStatus === 'fulfilled' ?
                <>
                    <p className={styles.movieCarousel__title}>{moviesCategory}</p>
                    <div
                        className={styles.movieCarousel__container}
                        onMouseEnter={() => setOnHoverCarousel(true)}
                        onMouseLeave={() => setOnHoverCarousel(false)}
                    >
                        <CarouselArrowButton
                            onHoverCarousel={onHoverCarousel}
                            carouselRef={movieCarouselRef}
                            carouselChildRef={movieCarouselFirstChildRef}
                        />
                        <ul className={styles.movieCarousel__movies} ref={movieCarouselRef}
                        >
                            {movies.map((movie) => (
                                <Movie
                                    movie={movie}
                                    key={movie.id}
                                    firstMovieRef={movieCarouselFirstChildRef}
                                    lastMovieRef={movieCarouselLastChildRef}
                                    moviesCategoryCamelize={moviesCategoryCamelize}
                                />
                            ))}
                        </ul>
                        <CarouselArrowButton
                            isRightArrow
                            onHoverCarousel={onHoverCarousel}
                            carouselRef={movieCarouselRef}
                            carouselChildRef={movieCarouselLastChildRef}
                        />
                    </div>
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
