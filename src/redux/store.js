import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './slices/genresSlice';

export default configureStore({
    reducer: {
        genres: genresReducer,
    },
})