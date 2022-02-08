import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './slices/genresSlice';
import moviesReducer from './slices/moviesSlice';
import initialStatusReducer from './slices/initialStatusSlice';

export default configureStore({
    reducer: {
        genres: genresReducer,
        movies: moviesReducer,
        initialStatus: initialStatusReducer,
    },
})