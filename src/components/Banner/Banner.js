import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__container}>
                <img
                    className={styles.banner__image}
                    src="https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
                    alt="Spider-Man: No Way Home"
                />
                <div className={styles.banner__boxShadow}>
                    <div className={styles.banner__textContainer}>
                        <h2 className={styles.banner__title}>Spider-Man: No Way Home</h2>
                        <p className={styles.banner__overview}>
                        Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
