import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Lens from '../../assets/icons/svgComponents/Lens';
import MenuBar from '../../assets/icons/svgComponents/MenuBar';
import CategoriesSection from '../CategoriesSection/';
import styles from './Header.module.css';

const Header = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const searchInputRef = useRef();

    const [showCategoriesSection, setShowCategoriesSection] = useState(false);

    const toggleShowCategoriesSection = () => {
        setShowCategoriesSection((previousState) => !previousState);
    }

    const onClearSearchInput = () => {
        searchInputRef.current.value = '';
        searchInputRef.current.focus();
    }

    const onLensIconClick = () => {
        setShowSearchInput(!showSearchInput);
        searchInputRef.current.focus();
    }

    const handleOnSubmitSearchInput = (event) => {
        event.preventDefault();
        console.log(searchInputRef.current.value);
        searchInputRef.current.value = '';
        onLensIconClick();
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
                <div className={`${styles.search} ${(showSearchInput ? styles.search__extend : '')}`}>
                    <div className={styles.searchIcon} onClick={onLensIconClick}>
                        <div className={styles.searchIcon__container}>
                            <Lens className={styles.searchIcon__container__svg} />
                        </div>
                    </div>
                    <div className={styles.search__formContainer}>
                        <form action="submit" className={styles.search__form} onSubmit={handleOnSubmitSearchInput}>
                            <input type="text" ref={searchInputRef} className={styles.search__input} />
                        </form>
                    </div>
                    <div className={styles.search__clearInput} onClick={onClearSearchInput}>
                        <p className={styles.search__clearInputIcon}>x</p>
                    </div>
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