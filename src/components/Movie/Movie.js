import { movieImagePath } from "../../paths/links";
import styles from './Movie.module.css'

const Movie = ({ movie, firstMovieRef, lastMovieRef }) => {

    const assignReference = () => {
        if (movie.firstElement)
            return firstMovieRef;
        else if (movie.lastElement)
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
