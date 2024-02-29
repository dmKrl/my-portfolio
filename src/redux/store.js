import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './themeSlice/themeSlice';
import { navMenuReducer } from './navMenuSlice/navMenuSlice';

export const store = configureStore({
    reducer: { theme: themeReducer, navMenu: navMenuReducer },
});
