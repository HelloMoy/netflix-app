import Banner from "../../components/Banner/";
import Header from "../../components/Header/";
import MovieCarousel from "../../components/MovieCarousel/";
import MoviesGrid from "../../components/MoviesGrid/";
import { useSelector } from "react-redux";
import { selectGenres, selectGenresStatus } from "../../redux/slices/genresSlice";
import styles from "./Home.module.css";

const Home = () => {
    const genders = useSelector(selectGenres);
    const gendersStatus = useSelector(selectGenresStatus);

    return (
        <div className={styles.home}>
            <Header />
            {/* <Banner />
            {gendersStatus === 'fulfilled' &&
                genders.map((gender) => (
                    <div className={styles.movieCarousels} key={gender.id}>
                        <MovieCarousel
                            moviesCategoryPath={gender.moviesLink}
                            moviesCategory={gender.genderName}
                            moviesCategoryCamelize={gender.genderNameCamelCase}
                        />
                    </div >)
                )
            } */}
            <MoviesGrid
                moviesCategoryPath='https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=true'
                moviesCategory='Action'
                moviesCategoryCamelize='action'
            />
        </div>
    );
};

export default Home;