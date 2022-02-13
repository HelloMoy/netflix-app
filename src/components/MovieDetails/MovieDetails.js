import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailsPath, movieImagePath } from "../../paths/links";
import { getMovieDetailsAsync, selectMovieDetails } from "../../redux/slices/moviesSlice";
import styles from './MovieDetails.module.css';

const MovieDetails = () => {

    const movieIdFromParameters = useParams().movieId;
    const movie = useSelector(selectMovieDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        const movieDetailsPath = getMovieDetailsPath(movieIdFromParameters);
        dispatch(getMovieDetailsAsync(movieDetailsPath));
    }, [])

    console.log(movie);
    return (
        <div className={styles.movieDetails}>
            {
                movie.status === 'fulfilled' ?

                    <>
                        <div className={styles.banner}>
                            <div className={styles.banner__imageContainer}>
                                <img
                                    className={styles.banner__image}
                                    src={movieImagePath('original', movie.details.backdrop_path)}
                                    alt={movie.details.title}
                                />
                                <div className={styles.banner__boxShadow}></div>
                            </div>
                            <div className={styles.banner__textContainer}>
                                <div className={styles.banner__text}>
                                    <h2 className={styles.banner__title}>{movie.details.title}</h2>
                                    <p className={styles.banner__overview}>
                                        {movie.details.overview}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.detailsSection}>
                            <div className={styles.detailsSection__grid}>
                                <div className={styles.detailsSection__imageContainer}>
                                    <img
                                        className={styles.detailsSection__image}
                                        src={movieImagePath('w300', movie.details.poster_path)}
                                        alt={movie.details.title}
                                    />
                                </div>
                                <div className={styles.detailsSection__data}>
                                    <div className={styles.detailsSection__dataContainer}>
                                        <div className={`${styles.detailsSection__item__rankingContainer} ${styles.detailsSection__item}`}>
                                            <p className={`${styles.detailsSection__item__title}`}>
                                                Ranking
                                            </p>
                                            <p className={`${styles.detailsSection__item__description}`}>
                                                {movie.details.vote_average}
                                            </p>
                                        </div>
                                        <div className={`${styles.detailsSection__item__durationContainer} ${styles.detailsSection__item}`}>
                                            <p className={`${styles.detailsSection__item__title}`}>
                                                Duration
                                            </p>
                                            <p className={`${styles.detailsSection__item__description}`}>
                                                {`${movie.details.runtime} min`}
                                            </p>
                                        </div>
                                        <div className={`${styles.detailsSection__item__genreContainer} ${styles.detailsSection__item}`}>
                                            <p className={`${styles.detailsSection__item__title}`}>
                                                Genre
                                            </p>
                                            <p className={`${styles.detailsSection__item__description}`}>
                                                {movie.details.genres[0].name}
                                            </p>
                                        </div>
                                        <div className={`${styles.detailsSection__item__releaseDateContainer} ${styles.detailsSection__item}`}>
                                            <p className={`${styles.detailsSection__item__title}`}>
                                                Release Date
                                            </p>
                                            <p className={`${styles.detailsSection__item__description}`}>
                                                {movie.details.release_date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.castCarousel}`}>
                                    <p className={`${styles.detailsSection__item__title}`}>
                                        Cast Carousel
                                    </p>
                                </div>
                                <div className={styles.detailsSection__overviewContainer} >
                                    <p className={`${styles.detailsSection__overviewTitle} ${styles.detailsSection__item__title}`}>
                                        Overview
                                    </p>
                                    <p className={styles.detailsSection__overview}>
                                        {movie.details.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>

                    : 'Loadion'
            }
        </div >
    );
};

export default MovieDetails;