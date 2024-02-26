import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import { useTheme } from '../../hooks/use-theme';
import { Link as LinkScroll } from 'react-scroll';
import imgPath from '../../../config';

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
                    <nav className={s.headerNavBar}>
                        <Link to="/">Home</Link>
                        <LinkScroll to="skills">Tools</LinkScroll>
                        <Link to="/project">Project</Link>
                        <LinkScroll to="contact" smooth={true}>
                            Contact
                        </LinkScroll>
                    </nav>
                    <div className={s.headerOptions}>
                        <div>
                            <div className={s.changeBackColor}>
                                <button
                                    className={s.changeButton}
                                    onClick={handleLightThemeClick}
                                >
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    >
                                        {theme === 'dark' ? (
                                            <use
                                                xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#sun-white`}
                                            />
                                        ) : (
                                            <use
                                                xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#sun-white`}
                                            />
                                        )}
                                    </svg>
                                </button>
                                {theme === 'dark' ? (
                                    <div className={s.changeButtonDark}></div>
                                ) : (
                                    <div className={s.changeButtonLight}></div>
                                )}

                                <button
                                    className={s.changeButton}
                                    onClick={handleDarkThemeClick}
                                >
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    >
                                        {theme === 'dark' ? (
                                            <use
                                                xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#moon-black`}
                                            />
                                        ) : (
                                            <use
                                                xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#moon-black`}
                                            />
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
