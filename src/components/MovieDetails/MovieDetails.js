import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    return (
        <div className={styles.movieDetails}>
            <div className={styles.banner}>
                <div className={styles.banner__imageContainer}>
                    <img
                        className={styles.banner__image}
                        src="https://image.tmdb.org/t/p/original/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"
                        alt="Encanto"
                    />
                    <div className={styles.banner__boxShadow}></div>
                </div>
                <div className={styles.banner__textContainer}>
                    <div className={styles.banner__text}>
                        <h2 className={styles.banner__title}>Spiderman: No way Home</h2>
                        {/* <h2 className={styles.banner__title}>Encanto</h2> */}
                        <p className={styles.banner__overview}>
                            The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.detailsSection}>
                <div className={styles.detailsSection__grid}>
                    <div className={styles.detailsSection__imageContainer}>
                        <img className={styles.detailsSection__image} src="https://image.tmdb.org/t/p/w300/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" alt="Encanto" />
                    </div>
                    <div className={styles.detailsSection__data}>
                        <div className={styles.detailsSection__dataContainer}>
                            <div className={`${styles.detailsSection__item__rankingContainer} ${styles.detailsSection__item}`}>
                                <p className={`${styles.detailsSection__item__title}`}>
                                    Ranking
                                </p>
                                <p className={`${styles.detailsSection__item__description}`}>
                                    &#9734;&#9734;&#9734;&#9734;&#9734;
                                </p>
                            </div>
                            <div className={`${styles.detailsSection__item__durationContainer} ${styles.detailsSection__item}`}>
                                <p className={`${styles.detailsSection__item__title}`}>
                                    Duration
                                </p>
                                <p className={`${styles.detailsSection__item__description}`}>
                                    1:20
                                </p>
                            </div>
                            <div className={`${styles.detailsSection__item__genreContainer} ${styles.detailsSection__item}`}>
                                <p className={`${styles.detailsSection__item__title}`}>
                                    Genre
                                </p>
                                <p className={`${styles.detailsSection__item__description}`}>
                                    Action
                                </p>
                            </div>
                            <div className={`${styles.detailsSection__item__releaseDateContainer} ${styles.detailsSection__item}`}>
                                <p className={`${styles.detailsSection__item__title}`}>
                                    ReleaseDate
                                </p>
                                <p className={`${styles.detailsSection__item__description}`}>
                                    2021-12-15
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.castCarousel}`}>
                        Cast Carousel
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MovieDetails;