import { useParams } from 'react-router-dom';
import MoviesGrid from '../../components/MoviesGrid';
import { getRouteByTitle } from '../../paths/links';
import styles from './BySearch.module.css';

const BySearch = () => {

    const titleFromParameters = useParams().title;

    return (
        <div className={styles.bySearch}>
            <p className={styles.bySearch__title}>Search: {titleFromParameters}</p>
            <MoviesGrid
                moviesPath={getRouteByTitle(titleFromParameters)}
                moviesTopicToSearch={titleFromParameters}
            />
        </div>
    );
};

export default BySearch;