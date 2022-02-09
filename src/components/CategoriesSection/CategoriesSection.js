import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectGenres, selectGenresStatus } from '../../redux/slices/genresSlice';

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
                            <NavLink
                                className={styles.category__textItem}
                                to={`/gender/${gender.genderNameCamelCase}`}
                                onClick={toggleShowCategoriesSection}
                            >
                                {gender.genderName}
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesSection;
