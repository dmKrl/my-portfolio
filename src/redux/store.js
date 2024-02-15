import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './themeSlice/themeSlice';

export const store = configureStore({
    reducer: { theme: themeReducer },
});
