import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './slices/genresSlice';
import moviesReducer from './slices/moviesSlice.';

export default configureStore({
    reducer: {
        genres: genresReducer,
        movies: moviesReducer,
    },
})