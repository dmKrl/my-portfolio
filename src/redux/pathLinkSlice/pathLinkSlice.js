import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pathLink: '',
};

const pathLinkSlice = createSlice({
    name: 'pathLink',
    initialState,
    reducers: {
        setPathLink(state, action) {
            state.theme = action.payload;
        },
    },
});

export const { setPathLink } = pathLinkSlice.actions;
export const selectPathLink = (state) => state.pathLink.theme;

export const pathLinkReducer = pathLinkSlice.reducer;
