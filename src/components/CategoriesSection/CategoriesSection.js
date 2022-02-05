import { useEffect, useState } from 'react';
import { genders as gendersLink } from '../../paths/links';
import { getData } from '../../services';

import styles from './CategoriesSection.module.css';

const CategoriesSection = ({ showCategoriesSection, toggleShowCategoriesSection }) => {

    const [genders, setGenders] = useState();

    useEffect(() => {
        const getGenders = async () => {
            const gendersList = await getData(gendersLink);
            setGenders(gendersList.genres);
        };

        getGenders();

    }, []);


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
                    genders &&
                    genders.map((gender) => (
                        <div className={styles.category__item} key={gender.id}>
                            <p className={styles.category__textItem}>
                                {gender.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesSection;
