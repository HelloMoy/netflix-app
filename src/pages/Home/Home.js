import { useEffect, useState } from "react";
import Banner from "../../components/Banner/";
import Header from "../../components/Header/";
import MovieCarousel from "../../components/MovieCarousel/";
import { thriller, War, Fantasy, Horror, trendingThisWeek } from "../../paths/links";
import { isMobileDevice } from "../../services";
import styles from "./Home.module.css";

const Home = () => {

    const [isNotMobileDevice, setIsNotMobileDevice] = useState();

    useEffect(() => {
        setIsNotMobileDevice(!isMobileDevice());
    }, []);

    return (
        <div className={styles.home}>
            <Header />
            <Banner />
            <div className={styles.movieCarousels}>
                <MovieCarousel
                    moviesCategoryPath={trendingThisWeek.path}
                    moviesCategory={trendingThisWeek.categoryName}
                    isNotMobileDevice={isNotMobileDevice}
                />
                <MovieCarousel
                    moviesCategoryPath={thriller.path}
                    moviesCategory={thriller.categoryName}
                    isNotMobileDevice={isNotMobileDevice}
                />
                <MovieCarousel
                    moviesCategoryPath={War.path}
                    moviesCategory={War.categoryName}
                    isNotMobileDevice={isNotMobileDevice}
                />
                <MovieCarousel
                    moviesCategoryPath={Horror.path}
                    moviesCategory={Horror.categoryName}
                    isNotMobileDevice={isNotMobileDevice}
                />
                <MovieCarousel
                    moviesCategoryPath={Fantasy.path}
                    moviesCategory={Fantasy.categoryName}
                    isNotMobileDevice={isNotMobileDevice}
                />
            </div>
        </div>
    );
};

export default Home;