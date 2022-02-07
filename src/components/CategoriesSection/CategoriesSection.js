import { useSelector } from 'react-redux';
import {selectGenres, selectGenresStatus} from '../../redux/slices/genresSlice';

import styles from './CategoriesSection.module.css';

const CategoriesSection = ({ showCategoriesSection, toggleShowCategoriesSection }) => {

    const genders = useSelector(selectGenres);
    const gendersStatus = useSelector(selectGenresStatus);

    const handlerClickOnBackground = (element) => {
        if (element.target.classList.contains(styles.categories)) {
            toggleShowCategoriesSection();
        }
    }

    return (
        <div className={`${styles.categories} ${showCategoriesSection ? styles.categories__show : ''}`}
            onClick={handlerClickOnBackground}
        >
            <div className={styles.category__items}>
                {
                    gendersStatus === 'fulfilled' &&
                    genders.map((gender) => (
                        <div className={styles.category__item} key={gender.id}>
                            <p className={styles.category__textItem}>
                                {gender.genderName}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesSection;
