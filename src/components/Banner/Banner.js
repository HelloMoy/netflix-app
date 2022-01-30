import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__container}>
                <img
                    className={styles.banner__image}
                    // src="https://site.groupe-psa.com/content/uploads/sites/3/2016/12/white-background-2.jpg"
                    src="https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
                    alt="Spider-Man: No Way Home"
                />

                <div className={styles.banner__textContainer}>
                    Text Banner
                </div>
            </div>
        </div>
    );
};

export default Banner;
