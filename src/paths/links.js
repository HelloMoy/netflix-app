import { API_KEY } from "./keys";

export const trendingThisWeek = {
    path: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    categoryName: 'Trending This Week'
};

export const movieImagePath = (width, ImagePath) => (`https://image.tmdb.org/t/p/${width + ImagePath}`);

export const genresLink = 'https://api.themoviedb.org/3/genre/movie/list?api_key=df9ac6d353bf12ec1a980d483f2ac60d&language=en-US';

export const getRouteByGenre = (idGenre) => (
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${idGenre}&language=en-US&sort_by=popularity.desc&include_adult=false`
);

export const getRouteByTitle = (title) => (
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`
);

export const getMovieDetailsPath = (movieId) => (
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
);

