import { genresLink, getRouteByGenre } from '../../paths/links';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../services';

export const getGenresAsync = createAsyncThunk(
    'genres/fetchGenres',
    async () => {
        const values = await getData(genresLink);
        return values.genres;
    }
);


export const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        value: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGenresAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGenresAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const dataWithMoviesLink = [];
                action.payload.forEach((element) => {
                    dataWithMoviesLink.push(
                        {
                            id: element.id,
                            genderName: element.name,
                            moviesLink: getRouteByGenre(element.id),
                            movies: [],
                        }
                    );
                });
                state.value = dataWithMoviesLink;
            })
            .addCase(getGenresAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const selectGenres = (state) => state.genres.value;
export const selectGenresStatus = (state) => state.genres.status;

export default genresSlice.reducer;