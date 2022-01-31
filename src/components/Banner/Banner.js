import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__container}>
                <div className={styles.banner__imageContainer}>
                    <img
                        className={styles.banner__image}
                        src="https://image.tmdb.org/t/p/original/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"
                        alt="Spider-Man: No Way Home"
                    />
                    <div className={styles.banner__boxShadow}></div>
                </div>
                <div className={styles.banner__textContainer}>
                    <div className={styles.banner__text}>
                        <h2 className={styles.banner__title}>Encanto</h2>
                        <p className={styles.banner__overview}>
                        The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
