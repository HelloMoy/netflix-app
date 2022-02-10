import Banner from "../../components/Banner/";
import MovieCarousel from "../../components/MovieCarousel/";
import { useSelector } from "react-redux";
import { selectGenres, selectGenresStatus } from "../../redux/slices/genresSlice";
import styles from "./Home.module.css";

const Home = () => {
    const genders = useSelector(selectGenres);
    const gendersStatus = useSelector(selectGenresStatus);

    return (
        <div className={styles.home}>
            <Banner />
            {gendersStatus === 'fulfilled' &&
                genders.map((gender) => (
                    <div className={styles.movieCarousels} key={gender.id}>
                        <MovieCarousel
                            moviesPath={gender.moviesLink}
                            moviesCategory={gender.genderName}
                            moviesTopicToSearch={gender.genderNameCamelCase}
                        />
                    </div >)
                )
            }
        </div>
    );
};

export default Home;