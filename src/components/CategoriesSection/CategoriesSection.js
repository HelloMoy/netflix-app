import styles from './CategoriesSection.module.css';

const CategoriesSection = ({ showCategoriesSection, toggleShowCategoriesSection }) => {

    const handlerClickOnBackground = (element) => {
        if(element.target.classList.contains(styles.categories)){
            toggleShowCategoriesSection();
        }
    }

    return (
        <div className={`${styles.categories} ${showCategoriesSection ? styles.categories__show : ''}`}
            onClick={handlerClickOnBackground}
        >
            <div className={styles.category__items}>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
                <div className={styles.category__item}>
                    <p className={styles.category__textItem}>
                        Horror
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;
