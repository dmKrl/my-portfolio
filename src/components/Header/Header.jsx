import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { useTheme } from '../../hooks/use-theme';
const Header = () => {
    const { theme, setTheme } = useTheme();
    const handleLightThemeClick = () => {
        setTheme('light');
    };
    const handleDarkThemeClick = () => {
        setTheme('dark');
    };
    return (
        <header className={s.header}>
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
                        <Link to="/">Tools</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/">Contact</Link>
                    </nav>
                    <div className={s.headerOptions}>
                        <select name="En" id="">
                            <option value="En"></option>
                            <option value="Ru"></option>
                        </select>
                        <div>
                            <div className={s.changeBackColor}>
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
