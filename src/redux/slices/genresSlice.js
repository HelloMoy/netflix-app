import { genresLink, getRouteByGenre} from '../../paths/links';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getData} from '../../services';

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
                state.value = action.payload;
                const genesrObject = {};
                action.payload.forEach((element) => (
                    Object.defineProperty(genesrObject, element.name
                        , {
                            value: {
                                id: element.id,
                                nameElement: element.name,
                                link: getRouteByGenre(element.id),
                                movies: undefined,
                            }
                        })

                ));
                console.log({ genesrObject });
            })
            .addCase(getGenresAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const selectGenres = (state) => state.genres.value;
export const selectGenresStatus = (state) => state.genres.status;

export default genresSlice.reducer;