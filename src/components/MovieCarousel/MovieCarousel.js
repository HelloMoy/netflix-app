import { useEffect, useRef, useState } from 'react';
import Arrow from '../../assets/icons/svgComponents/Arrow';
import useElementOnScreen from '../../customHooks/useElementOnScreen';
import { movieImagePath } from '../../paths/links';
import { addFirstAndLastElementProperty, filterNullPosterAndBackdropPath, getData, moveScrollHorizontal } from '../../services/';
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
            const movies = await getData(moviesCategoryPath);
            const moviesFiltered = filterNullPosterAndBackdropPath(movies.results);
            const moviesWithFirstAndLastElementProperty = addFirstAndLastElementProperty(moviesFiltered);
            setMovies(moviesWithFirstAndLastElementProperty);
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
        const forwardClass = 'movieCarousel__scrollButtonFrontLayer__forward';
        const backClass = 'movieCarousel__scrollButtonFrontLayer__back';
        const offsetPixels = 800;
        moveScrollHorizontal(elementClassList, movieCarouselRef, forwardClass, backClass, offsetPixels);
    }

    const hanlerShowScrollBackButton = () => {
        return (isNotMobileDevice && carouselFirstItemIsHidden && onHoverCarousel)
    };

    const hanlerShowScrollForwardButton = () => {
        return (isNotMobileDevice && carouselLastItemIsHidden && onHoverCarousel)
    };


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
                                `${styles.movieCarousel__scrollButton} ${(hanlerShowScrollBackButton()) ? styles.movieCarousel__showScrollButton : ''}`
                            }
                            onClick={handlerMoveHorizaontalScrolling}
                        >
                            <div className={`${styles.movieCarousel__scrollButtonIconContainer}`}>
                                <Arrow
                                    className={`${styles.movieCarousel__scrollButtonIcon} ${styles.movieCarousel__scrollButtonIcon__back}`}
                                />
                            </div>
                            <div className={`${styles.movieCarousel__scrollButtonFrontLayer} movieCarousel__scrollButtonFrontLayer__back`}></div>
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
                                `${styles.movieCarousel__scrollButton} ${styles.movieCarousel__scrollButton__forward}  ${(hanlerShowScrollForwardButton()) ? styles.movieCarousel__showScrollButton : ''}`
                            }
                            onClick={handlerMoveHorizaontalScrolling}
                        >
                            <div className={`${styles.movieCarousel__scrollButtonIconContainer} `}>
                                <Arrow
                                    className={`${styles.movieCarousel__scrollButtonIcon} `}
                                />
                            </div>
                            <div className={`${styles.movieCarousel__scrollButtonFrontLayer} movieCarousel__scrollButtonFrontLayer__forward`}></div>
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
