import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import { useTheme } from '../../hooks/use-theme';
import { Link as LinkScroll } from 'react-scroll';
const Header = () => {
    const location = useLocation();
    const { theme, setTheme } = useTheme();
    const handleLightThemeClick = () => {
        setTheme('light');
    };
    const handleDarkThemeClick = () => {
        setTheme('dark');
    };
    return (
        <header
            className={`${s.header} ${
                location.pathname === '/'
                    ? s.headerNone
                    : theme === 'dark'
                    ? s.headerDark
                    : s.headerLight
            }`}
            name="header"
        >
            <div className={s.headerWrapper}>
                <div className={s.headerLogo}>
                    <Link to="/">
                        <svg style={{ width: '97px', height: '31px' }}>
                            {theme === 'dark' ? (
                                <use xlinkHref="/src/assets/image/icon/sprite.svg#logo-white" />
                            ) : (
                                <use xlinkHref="/src/assets/image/icon/sprite.svg#logo-black" />
                            )}
                        </svg>
                    </Link>
                </div>
                <div className={s.headerRight}>
                    <nav className={s.headerNavBar}>
                        <Link to="/">Home</Link>
                        <LinkScroll to="skills">Tools</LinkScroll>
                        <Link to="/project">Project</Link>
                        <LinkScroll to="contact" smooth={true}>
                            Contact
                        </LinkScroll>
                    </nav>
                    <div className={s.headerOptions}>
                        {/* В дальнейшем добавится смена языка в приложении */}
                        {/* <select>
                            <option>En</option>
                            <option value="En">En</option>
                            <option value="Ru">Ru</option>
                        </select> */}
                        <div>
                            <div className={s.changeBackColor}>
                                {/* <input type="radio" id="light" name="mode" />
                                <label htmlFor="light">
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    >
                                        {theme === 'dark' ? (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#sun-white" />
                                        ) : (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#sun-white" />
                                        )}
                                    </svg>
                                </label>
                                <input type="radio" id="dark" name="mode" />
                                <label htmlFor="dark">
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    >
                                        {theme === 'dark' ? (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#moon-black" />
                                        ) : (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#moon-black" />
                                        )}
                                    </svg>
                                </label> */}
                                <button
                                    className={s.changeButtonLight}
                                    onClick={handleLightThemeClick}
                                >
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    >
                                        {theme === 'dark' ? (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#sun-white" />
                                        ) : (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#sun-white" />
                                        )}
                                    </svg>
                                </button>
                                <button
                                    className={s.changeButtonDark}
                                    onClick={handleDarkThemeClick}
                                >
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    >
                                        {theme === 'dark' ? (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#moon-black" />
                                        ) : (
                                            <use xlinkHref="/src/assets/image/icon/sprite.svg#moon-black" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
