import { useEffect, useRef, useState } from 'react';
import { getMoviesAsync } from '../../redux/slices/moviesSlice';
import CarouselArrowButton from '../CarouselArrowButton/';
import Loader from '../Loader/';
import Movie from "../Movie/";
import { useDispatch, useSelector } from 'react-redux';
import styles from './MovieCarousel.module.css';

const MovieCarousel = ({ moviesPath, moviesCategory, moviesTopicToSearch }) => {

    const [onHoverCarousel, setOnHoverCarousel] = useState(false);

    const movieCarouselRef = useRef();
    const movieCarouselFirstChildRef = useRef();
    const movieCarouselLastChildRef = useRef();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies[moviesTopicToSearch]?.movies);
    const moviesStatus = useSelector(state => state.movies[moviesTopicToSearch]?.status);
    const lastPageFetched = useSelector(state => state.movies[moviesTopicToSearch]?.lastPageFetched);

    useEffect(() => {
        if (lastPageFetched) return;
        dispatch(getMoviesAsync({ moviesPath, moviesTopicToSearch }));
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
                                <li className={styles.movie} key={movie.id}>
                                    <Movie
                                        movie={movie}
                                        firstMovieRef={movieCarouselFirstChildRef}
                                        lastMovieRef={movieCarouselLastChildRef}
                                        moviesTopicToSearch={moviesTopicToSearch}
                                    />
                                </li>
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
