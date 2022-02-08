import { useSelector } from "react-redux";
import { movieImagePath } from "../../paths/links";
import styles from './Movie.module.css'

const Movie = ({ movie, firstMovieRef, lastMovieRef }) => {

    const firstMovieId = useSelector(state => state.movies.action?.firstMovieId);
    const lastMovieId = useSelector(state => state.movies.action?.lastMovieId);

    const assignReference = () => {
        if (movie.id === firstMovieId)
            return firstMovieRef;
        else if (movie.id === lastMovieId)
            return lastMovieRef;
        else
            return null;
    }

    return (
        <li className={styles.movie} ref={assignReference()}>
            <img
                className={styles.movie__image}
                src={`${movieImagePath}${movie.poster_path}`}
                alt={movie.title}
            />
        </li>
    )
};

export default Movie;
