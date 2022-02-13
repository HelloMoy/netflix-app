import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieImagePath } from "../../paths/links";
import { resetScroll } from "../../services";
import styles from './Movie.module.css'

const Movie = ({ movie, firstMovieRef, lastMovieRef, moviesTopicToSearch, isMovieGrid = false }) => {

    const firstMovieId = useSelector(state => state.movies[moviesTopicToSearch]?.firstMovieId);
    const lastMovieId = useSelector(state => state.movies[moviesTopicToSearch]?.lastMovieId);

    let navigate = useNavigate();

    const assignReference = () => {
        if (movie.id === firstMovieId && !isMovieGrid) return firstMovieRef;
        else if (movie.id === lastMovieId) return lastMovieRef;
        else return null;
    }

    const imageHandlerClick = () => {
        navigate(`/movie/${movie.id}`);
        resetScroll();
    }

    return (

        <img
            className={styles.movie__image}
            ref={assignReference()}
            src={movieImagePath('w200', movie.poster_path)}
            alt={movie.title}
            onClick={imageHandlerClick}
        />
    )
};

export default Movie;
