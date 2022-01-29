import Lens from '../../assets/icons/svgComponents/Lens';
import MenuBar from '../../assets/icons/svgComponents/MenuBar';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__leftSection}>
                <div className={styles.header__menuBarIconContainer}>
                    <MenuBar className={styles.header__menuBarIcon} />
                </div>
                <div className={styles.header__netflixIconContainer}>
                    <img
                        className={styles.header__netflixIcon}
                        src={'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'} />
                </div>
            </div>
            <div className={styles.header__rightSection}>
                <div className={styles.header__lensIconContainer}>
                    <Lens className={styles.header__lensIcon} />
                </div>
            </div>
        </div>
    );
};

export default Header;