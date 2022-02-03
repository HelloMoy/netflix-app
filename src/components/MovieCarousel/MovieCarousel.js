import { useEffect, useRef, useState } from 'react';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { movieImagePath } from '../../paths/links';
import { getData, moveScrollHorizontal } from '../../services/';
import Loader from '../Loader/';
import styles from './MovieCarousel.module.css';

const MovieCarousel = ({ moviesCategoryPath, moviesCategory, isNotMobileDevice }) => {

    const [movies, setMovies] = useState(null);
    const [onHoverCarousel, setOnHoverCarousel] = useState(false);

    const movieCarouselRef = useRef();
    const movieCarouselFirstChildRef = useRef();
    const movieCarouselLastChildRef = useRef();

    useEffect(() => {

        const getMovies = async () => {
            const response = await getData(moviesCategoryPath);
            const filteredResponse = response.results.filter((movie) => (movie.poster_path && movie.backdrop_path));
            const firstElement = filteredResponse[0];
            const firstArrayElement = { firstElement: true, ...firstElement };
            const lastElement = filteredResponse[filteredResponse.length - 1];
            const lastArrayElement = { lastElement: true, ...lastElement };
            filteredResponse[0] = firstArrayElement;
            filteredResponse[response.results.length - 1] = lastArrayElement;
            setMovies(filteredResponse);
        };

        getMovies();
    }, []);

    const useElementOnScreenOptions = {
        threshold: 1
    };

    const carouselFirstItemIsHidden = !useElementOnScreen(useElementOnScreenOptions, movieCarouselFirstChildRef);
    const carouselLastItemIsHidden = !useElementOnScreen(useElementOnScreenOptions, movieCarouselLastChildRef);

    const handlerMoveHorizaontalScrolling = (event) => {
        const elementClassList = event.target.classList;
        const forwardClass = 'forward';
        const backClass = 'back';
        const offsetPixels = 1000;
        moveScrollHorizontal(elementClassList, movieCarouselRef, forwardClass, backClass, offsetPixels);
    }


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
                        <div
                            className={
                                `${styles.movieCarousel__scrollButton} back ${(isNotMobileDevice && carouselFirstItemIsHidden && onHoverCarousel) ? styles.movieCarousel__showScrollButton : ''}`
                            }
                            onClick={handlerMoveHorizaontalScrolling}
                        >
                            <div
                                className={`${styles.movieCarousel__scrollButtonText} back`}
                            >Previous
                            </div>
                        </div>
                        <ul className={styles.movieCarousel__movies} ref={movieCarouselRef}
                        >
                            {movies.map((movie) => {
                                if (movie.firstElement) {
                                    return (
                                        <li className={styles.movie} key={movie.id} ref={movieCarouselFirstChildRef}>
                                            <img
                                                className={styles.movie__image}
                                                src={`${movieImagePath}${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                        </li>
                                    )
                                } else if (movie.lastElement) {
                                    return (
                                        <li className={styles.movie} key={movie.id} ref={movieCarouselLastChildRef}>
                                            <img
                                                className={styles.movie__image}
                                                src={`${movieImagePath}${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li className={styles.movie} key={movie.id}>
                                            <img
                                                className={styles.movie__image}
                                                src={`${movieImagePath}${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <div
                            className={
                                `${styles.movieCarousel__scrollButton} ${styles.movieCarousel__scrollButton__forward} forward ${(isNotMobileDevice && carouselLastItemIsHidden && onHoverCarousel) ? styles.movieCarousel__showScrollButton : ''}`
                            }
                            onClick={handlerMoveHorizaontalScrolling}
                        >
                            <div className={`${styles.movieCarousel__scrollButtonText} forward`}>Next</div>
                        </div>
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
