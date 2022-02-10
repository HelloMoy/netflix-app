import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/';
import MoviesGrid from '../../components/MoviesGrid/';
import { selectGenres, selectGenresStatus } from '../../redux/slices/genresSlice';
import styles from './MoviesGridPage.module.css';

const MoviesGridPage = () => {

    const genderIdFromParameters = useParams().genderId;

    const genders = useSelector(selectGenres);
    const [gender] = genders.filter(gender => gender.genderNameCamelCase === genderIdFromParameters);
    const gendersStatus = useSelector(selectGenresStatus);
    return (
        <div className={styles.moviesGridPage}>
            {gendersStatus === 'fulfilled' ?
                <>
                    <p className={styles.moviesGridPage__title}>{gender.genderName}</p>
                    <MoviesGrid
                        moviesCategoryPath={gender.moviesLink}
                        moviesCategoryCamelize={gender.genderNameCamelCase}
                        isByGender
                    />
                </>
                : <Loader />
            }
        </div>
    );
};

export default MoviesGridPage;