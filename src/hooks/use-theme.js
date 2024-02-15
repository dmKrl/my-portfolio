import { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setThemeStore } from '../redux/themeSlice/themeSlice';

export const useTheme = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(
        localStorage.getItem('app-theme') || 'dark'
    );

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
        dispatch(setThemeStore(theme));
    }, [theme]);

    return { theme, setTheme };
};
