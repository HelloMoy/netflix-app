import { useEffect, useRef, useState } from 'react';
import { addFirstAndLastElementProperty, filterNullPosterAndBackdropPath, getData } from '../../services/';
import CarouselArrowButton from '../CarouselArrowButton/';
import Loader from '../Loader/';
import Movie from "../Movie/";
import styles from './MovieCarousel.module.css';

const MovieCarousel = ({ moviesCategoryPath, moviesCategory, isNotMobileDevice }) => {

    const [movies, setMovies] = useState(null);
    const [onHoverCarousel, setOnHoverCarousel] = useState(false);

    const movieCarouselRef = useRef();
    const movieCarouselFirstChildRef = useRef();
    const movieCarouselLastChildRef = useRef();

    useEffect(() => {

        const getMovies = async () => {
            const movies = await getData(moviesCategoryPath);
            const moviesFiltered = filterNullPosterAndBackdropPath(movies.results);
            const moviesWithFirstAndLastElementProperty = addFirstAndLastElementProperty(moviesFiltered);
            setMovies(moviesWithFirstAndLastElementProperty);
        };

        getMovies();

    }, [moviesCategoryPath]);

    return (
        <div className={styles.movieCarousel}>
            {movies ?
                <>
                    <p className={styles.movieCarousel__title}>{moviesCategory}</p>
                    <div
                        className={styles.movieCarousel__container}
                        onMouseEnter={() => setOnHoverCarousel(true)}
                        onMouseLeave={() => setOnHoverCarousel(false)}
                    >
                        <CarouselArrowButton
                            onHoverCarousel={onHoverCarousel}
                            isNotMobileDevice={isNotMobileDevice}
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
                                />
                            ))}
                        </ul>
                        <CarouselArrowButton
                            isRightArrow
                            onHoverCarousel={onHoverCarousel}
                            isNotMobileDevice={isNotMobileDevice}
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
