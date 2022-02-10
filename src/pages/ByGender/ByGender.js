import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import MoviesGrid from '../../components/MoviesGrid';
import { selectGenres, selectGenresStatus } from '../../redux/slices/genresSlice';
import styles from './ByGender.module.css';

const ByGender = () => {

    const genderIdFromParameters = useParams().genderId;

    const genders = useSelector(selectGenres);
    const [gender] = genders.filter(gender => gender.genderNameCamelCase === genderIdFromParameters);
    const gendersStatus = useSelector(selectGenresStatus);
    return (
        <div className={styles.byGender}>
            {gendersStatus === 'fulfilled' ?
                <>
                    <p className={styles.byGender__title}>{gender.genderName}</p>
                    <MoviesGrid
                        moviesPath={gender.moviesLink}
                        moviesTopicToSearch={gender.genderNameCamelCase}
                        isByGender
                    />
                </>
                : <Loader />
            }
        </div>
    );
};

export default ByGender;