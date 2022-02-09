import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lens from '../../assets/icons/svgComponents/Lens';
import MenuBar from '../../assets/icons/svgComponents/MenuBar';
import CategoriesSection from '../CategoriesSection/';
import styles from './Header.module.css';

const Header = () => {

    const [showCategoriesSection, setShowCategoriesSection] = useState(false);

    const toggleShowCategoriesSection = () => {
        setShowCategoriesSection((previousState) => !previousState);
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__leftSection}>
                <div className={styles.header__menuBarIconContainerPadding}
                    onClick={toggleShowCategoriesSection}
                >
                    <div
                        className={styles.header__menuBarIconContainer}>
                        <MenuBar className={styles.header__menuBarIcon} />
                    </div>
                </div>
                <Link to="/">
                    <div className={styles.header__netflixIconContainer}>
                        <img
                            className={styles.header__netflixIcon}
                            src={'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'}
                            alt="Netflix Icon"
                        />
                    </div>
                </Link>
            </div>
            <div className={styles.header__rightSection}>
                <div className={styles.header__lensIconContainer}>
                    <Lens className={styles.header__lensIcon} />
                </div>
            </div>
            <CategoriesSection
                showCategoriesSection={showCategoriesSection}
                toggleShowCategoriesSection={toggleShowCategoriesSection}
            />
        </div>
    );
};

export default Header;