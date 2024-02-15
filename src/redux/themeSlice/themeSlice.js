import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: '',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeStore(state, action) {
            state.theme = action.payload;
        },
    },
});

export const { setThemeStore } = themeSlice.actions;
export const selectThemeStore = (state) => state.theme;

export const themeReducer = themeSlice.reducer;
