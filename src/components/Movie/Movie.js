import { useSelector } from "react-redux";
import { movieImagePath } from "../../paths/links";
import styles from './Movie.module.css'

const Movie = ({ movie, firstMovieRef, lastMovieRef, moviesTopicToSearch, isMovieGrid = false }) => {

    const firstMovieId = useSelector(state => state.movies[moviesTopicToSearch]?.firstMovieId);
    const lastMovieId = useSelector(state => state.movies[moviesTopicToSearch]?.lastMovieId);

    const assignReference = () => {
        if (movie.id === firstMovieId && !isMovieGrid) return firstMovieRef;
        else if (movie.id === lastMovieId) return lastMovieRef;
        else return null;
    }

    return (
        
            <img
                ref={assignReference()}
                className={styles.movie__image}
                src={`${movieImagePath}${movie.poster_path}`}
                alt={movie.title}
            />
    )
};

export default Movie;
