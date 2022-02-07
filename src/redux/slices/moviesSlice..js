import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../services';

export const getMoviesAsync = createAsyncThunk(
    'movies/fetchMovies',
    async (movieData) => {
        const movies = await getData(movieData.moviesCategoryPath);
        const moviesWithGenre = { ...movies, genre: movieData.moviesCategoryCamelize };
        return moviesWithGenre;
    }
);

// initialState = [
//     {
//         "id": 28,
//         "genderName": "Action",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 12,
//         "genderName": "Adventure",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=12&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 16,
//         "genderName": "Animation",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=16&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 35,
//         "genderName": "Comedy",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=35&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 80,
//         "genderName": "Crime",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=80&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 99,
//         "genderName": "Documentary",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=99&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 18,
//         "genderName": "Drama",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=18&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 10751,
//         "genderName": "Family",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=10751&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 14,
//         "genderName": "Fantasy",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=14&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 36,
//         "genderName": "History",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=36&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 27,
//         "genderName": "Horror",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=27&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 10402,
//         "genderName": "Music",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=10402&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 9648,
//         "genderName": "Mystery",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=9648&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 10749,
//         "genderName": "Romance",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=10749&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 878,
//         "genderName": "Science Fiction",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=878&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 10770,
//         "genderName": "TV Movie",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=10770&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 53,
//         "genderName": "Thriller",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=53&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 10752,
//         "genderName": "War",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=10752&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     },
//     {
//         "id": 37,
//         "genderName": "Western",
//         "moviesLink": "https://api.themoviedb.org/3/discover/movie?api_key=df9ac6d353bf12ec1a980d483f2ac60d&with_genres=37&language=en-US&sort_by=popularity.desc&include_adult=true",
//         "movies": []
//     }
// ];

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        status: 'idle',
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMoviesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMoviesAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state[`${action.payload.genre}`] = { ...state[`${action.payload.genre}`], movies: action.payload.results };
                state[`${action.payload.genre}`] = { ...state[`${action.payload.genre}`], state: 'fulfilled' };
            })
            .addCase(getMoviesAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const selectMovies = (state) => state.movies.value;

// export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;