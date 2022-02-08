import { createSlice } from '@reduxjs/toolkit';
import { isMobileDevice } from "../../services";

export const initialStatusSlice = createSlice({
    name: 'initialStatus',
    initialState: {
        isMobileDevice: false,
    },
    reducers: {
        checkIfItIsAMobileDevice: (state) => {
            state.isMobileDevice = isMobileDevice();
        },
    },
});

export const selectIsMobileDevice = (state) => state.initialStatus.isMobileDevice;

export const { checkIfItIsAMobileDevice } = initialStatusSlice.actions;

export default initialStatusSlice.reducer;