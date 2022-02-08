import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addFirstAndLastElementProperty, filterNullPosterAndBackdropPath } from '../../services';
import { getData } from '../../services';

export const getMoviesAsync = createAsyncThunk(
    'movies/fetchMovies',
    async (movieData) => {
        const movies = await getData(movieData.moviesCategoryPath);
        const moviesWithGenre = { ...movies, genre: movieData.moviesCategoryCamelize };
        return moviesWithGenre;
    }
);

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

                const moviesFiltered = filterNullPosterAndBackdropPath(action.payload.results);
                const moviesWithFirstAndLastElementProperty = addFirstAndLastElementProperty(moviesFiltered);

                state.status = 'fulfilled';
                state[`${action.payload.genre}`] = { ...state[`${action.payload.genre}`], movies: moviesWithFirstAndLastElementProperty };
                state[`${action.payload.genre}`] = { ...state[`${action.payload.genre}`], status: 'fulfilled' };
            })
            .addCase(getMoviesAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const selectMovies = (state) => state.movies.value;

export default moviesSlice.reducer;