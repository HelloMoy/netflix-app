import { API_KEY } from "./keys";

export const trendingThisWeek = {
    path: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    categoryName: 'Trending This Week'
};
export const thriller = {
    path: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate`,
    categoryName: 'Thriller'
};
export const War = {
    path: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752&with_watch_monetization_types=flatrate`,
    categoryName: 'War'
};
export const Horror = {
    path: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    categoryName: 'Horror'
};
export const Fantasy = {
    path: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`,
    categoryName: 'Fantasy'
};

export const movieImagePath = `https://image.tmdb.org/t/p/w200`;

export const genresLink = 'https://api.themoviedb.org/3/genre/movie/list?api_key=df9ac6d353bf12ec1a980d483f2ac60d&language=en-US';

export const getRouteByGenre = (idGenre) => (
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${idGenre}&language=en-US&sort_by=popularity.desc&include_adult=false`
);

export const getRouteByTitle = (title) => (
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`
);

