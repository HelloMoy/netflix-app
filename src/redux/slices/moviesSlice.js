import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { concatElementsInArray, filterNullPosterAndBackdropPath, getFirstAndLastElementId } from '../../services';
import { getData } from '../../services';

export const getMoviesAsync = createAsyncThunk(
    'movies/fetchMovies',
    async (movieData) => {
        const movies = await getData(movieData.moviesPath);
        const moviesWithTopic = { ...movies, topic: movieData.moviesTopicToSearch };
        return moviesWithTopic;
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

                const previousFirstMovieId = state[action.payload.topic]?.firstMovieId;

                const movieData = {
                    movies: (concatElementsInArray(state[action.payload.topic]?.movies, moviesFiltered)),
                    status: 'fulfilled',
                    lastPageFetched: action.payload.page,
                    totalPages: action.payload.total_pages,
                    firstMovieId: (previousFirstMovieId ? previousFirstMovieId : firstMovieId),
                    lastMovieId,
                }

                state.status = 'fulfilled';
                state[action.payload.topic] = { ...state[action.payload.topic], ...movieData };
            })
            .addCase(getMoviesAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const selectMovies = (state) => state.movies.value;

export default moviesSlice.reducer;