/* eslint-disable react/prop-types */
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpenNavMenu } from '../../redux/navMenuSlice/navMenuSlice';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import { setPathLink } from '../../redux/pathLinkSlice/pathLinkSlice';

const NavBar = ({
    theme,
    handleDarkThemeClick,
    handleLightThemeClick,
    location,
}) => {
    const dispatch = useDispatch();

    const changePathLink = (pathlink) => {
        dispatch(setPathLink(pathlink));
    };

    const changeIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };

    const toggleIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };
    return (
        <>
            <nav className={s.headerNavBar} onClick={toggleIsOpen}>
                {location.pathname !== '/' ? (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/" onClick={() => changePathLink('skills')}>
                            Tools
                        </Link>
                        <Link to="/" onClick={() => changePathLink('projects')}>
                            Projects
                        </Link>
                        <Link to="/" onClick={() => changePathLink('contacts')}>
                            Contacts
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/">Home</Link>
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
        </>
    );
};

export default NavBar;
