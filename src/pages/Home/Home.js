import Banner from "../../components/Banner/";
import Header from "../../components/Header/";
import MovieCarousel from "../../components/MovieCarousel/";
import { thriller, War, Fantasy, Horror, trendingThisWeek } from "../../paths/links";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Banner/>
            <div className={styles.movieCarousels}>
                <MovieCarousel
                    moviesCategoryPath={trendingThisWeek.path}
                    moviesCategory={trendingThisWeek.categoryName}
                />
                <MovieCarousel
                    moviesCategoryPath={thriller.path}
                    moviesCategory={thriller.categoryName}
                />
                <MovieCarousel
                    moviesCategoryPath={War.path}
                    moviesCategory={War.categoryName}
                />
                <MovieCarousel
                    moviesCategoryPath={Horror.path}
                    moviesCategory={Horror.categoryName}
                />
                <MovieCarousel
                    moviesCategoryPath={Fantasy.path}
                    moviesCategory={Fantasy.categoryName}
                />
            </div>
        </div>
    );
};

export default Home;