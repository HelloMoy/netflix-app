import { useEffect, useState } from "react";
import Banner from "../../components/Banner/";
import Header from "../../components/Header/";
import MovieCarousel from "../../components/MovieCarousel/";
import { isMobileDevice } from "../../services";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import { selectGenres, selectGenresStatus } from "../../redux/slices/genresSlice";

const Home = () => {
    const genders = useSelector(selectGenres);
    const gendersStatus = useSelector(selectGenresStatus);

    const [isNotMobileDevice, setIsNotMobileDevice] = useState();

    useEffect(() => {
        setIsNotMobileDevice(!isMobileDevice());
    }, []);

    return (
        <div className={styles.home}>
            <Header />
            <Banner />
            {gendersStatus === 'fulfilled' &&
                genders.map((gender) => (
                    <div className={styles.movieCarousels} key={gender.id}>
                        <MovieCarousel
                            moviesCategoryPath={gender.moviesLink}
                            moviesCategory={gender.genderName}
                            isNotMobileDevice={isNotMobileDevice}
                        />
                    </div >)
                )

            }
        </div>
    );
};

export default Home;