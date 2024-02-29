import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: '',
};

const navMenuSlice = createSlice({
    name: 'navMenu',
    initialState,
    reducers: {
        setIsOpenNavMenu(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { setIsOpenNavMenu } = navMenuSlice.actions;
export const selectIsOpenNavMenu = (state) => state.navMenu.isOpen;

export const navMenuReducer = navMenuSlice.reducer;
