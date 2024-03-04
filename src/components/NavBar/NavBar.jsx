/* eslint-disable react/prop-types */
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpenNavMenu } from '../../redux/navMenuSlice/navMenuSlice';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import FooterMessager from '../FooterMessagers/FooterMessager';

const NavBar = ({
    theme,
    handleDarkThemeClick,
    handleLightThemeClick,
    location,
    isScreenMob,
}) => {
    const dispatch = useDispatch();

    const changeIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };

    const toggleIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };
    return (
        <div className={s.navBlockContent}>
            <div className={s.navBlockMain}>
                <nav className={s.headerNavBar} onClick={toggleIsOpen}>
                    {location.pathname !== '/' ? (
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/">Tools</Link>
                            <Link to="/" className={s.linkHome}>
                                Projects
                            </Link>
                            <Link to="/">Contacts</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className={s.linkHome}>
                                Home
                            </Link>
                            <LinkScroll
                                to="skills"
                                smooth={true}
                                onClick={changeIsOpen}
                            >
                                Tools
                            </LinkScroll>
                            <LinkScroll
                                to="projects"
                                smooth={true}
                                onClick={changeIsOpen}
                            >
                                Projects
                            </LinkScroll>
                            <LinkScroll
                                to="contacts"
                                smooth={true}
                                onClick={changeIsOpen}
                            >
                                Contacts
                            </LinkScroll>
                        </>
                    )}
                </nav>
                <div className={s.headerOptions}>
                    <div>
                        <div className={s.changeBackColor}>
                            <ChangeTheme
                                theme={theme}
                                handleDarkThemeClick={handleDarkThemeClick}
                                handleLightThemeClick={handleLightThemeClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isScreenMob && <FooterMessager />}
        </div>
    );
};

export default NavBar;
