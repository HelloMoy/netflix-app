import Header from "../../components/Header/";
import MovieCarousel from "../../components/MovieCarousel/";

const Home = () => {
    return (
        <>
            <Header>I´m a Header</Header>
            <h1>peliculas</h1>
            <MovieCarousel />
            <MovieCarousel />
            <MovieCarousel />
            
        </>
    );
};

export default Home;