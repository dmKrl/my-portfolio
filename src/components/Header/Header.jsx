import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import { useTheme } from '../../hooks/useTheme';
import imgPath from '../../../config';
import { useResize } from '../../hooks/useResize';
import BurgerMenu from './../BurgerMenu/BurgerMenu';
import { selectIsOpenNavMenu } from '../../redux/navMenuSlice/navMenuSlice';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    const location = useLocation();
    const { theme, setTheme } = useTheme();
    const { isScreenMob } = useResize();
    const isOpen = useSelector(selectIsOpenNavMenu);

    const handleLightThemeClick = () => {
        setTheme('light');
    };

    const handleDarkThemeClick = () => {
        setTheme('dark');
    };

    return (
        <header
            className={`${s.header} ${
                location.pathname === '/' ? s.headerNone : s.headerTheme
            }`}
            name="header"
        >
            <div className={s.headerWrapper}>
                <div
                    className={`${s.headerLogo} ${isOpen && s.headerLogoFixed}`}
                >
                    <Link to="/">
                        <svg style={{ width: '97px', height: '31px' }}>
                            {theme === 'dark' ? (
                                <use
                                    xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#logo-white`}
                                />
                            ) : (
                                <use
                                    xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#logo-black`}
                                />
                            )}
                        </svg>
                    </Link>
                </div>
                <div className={s.headerRight}>
                    {isScreenMob ? (
                        <BurgerMenu />
                    ) : (
                        <NavBar
                            location={location}
                            theme={theme}
                            handleDarkThemeClick={handleDarkThemeClick}
                            handleLightThemeClick={handleLightThemeClick}
                        />
                    )}
                    {isOpen && isScreenMob && (
                        <div className={s.navBlock}>
                            <NavBar
                                location={location}
                                theme={theme}
                                handleDarkThemeClick={handleDarkThemeClick}
                                handleLightThemeClick={handleLightThemeClick}
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
