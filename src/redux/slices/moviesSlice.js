import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addFirstAndLastElementProperty, concatElementsInArray, filterNullPosterAndBackdropPath, getFirstAndLastElementId } from '../../services';
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
                const [firstMovieId, lastMovieId] = getFirstAndLastElementId(moviesFiltered);
                const moviesWithFirstAndLastElementProperty = addFirstAndLastElementProperty(moviesFiltered);

                

                const movieData = {
                    movies: concatElementsInArray(state[`${action.payload.genre}`]?.movies, moviesWithFirstAndLastElementProperty),
                    status: 'fulfilled',
                    firstMovieId,
                    lastMovieId,
                }

                state.status = 'fulfilled';
                state[`${action.payload.genre}`] = { ...state[`${action.payload.genre}`], ...movieData };
            })
            .addCase(getMoviesAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const selectMovies = (state) => state.movies.value;

export default moviesSlice.reducer;