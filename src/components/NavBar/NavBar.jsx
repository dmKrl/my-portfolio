/* eslint-disable react/prop-types */
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpenNavMenu } from '../../redux/navMenuSlice/navMenuSlice';
import ChangeTheme from '../ChangeTheme/ChangeTheme';

const NavBar = ({ theme, handleDarkThemeClick, handleLightThemeClick }) => {
    const dispatch = useDispatch();

    const toggleIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };
    return (
        <>
            <nav className={s.headerNavBar} onClick={toggleIsOpen}>
                <Link to="/">Home</Link>
                <LinkScroll to="skills" smooth={true}>
                    Tools
                </LinkScroll>
                <LinkScroll to="project" smooth={true}>
                    Projects
                </LinkScroll>
                <LinkScroll to="contact" smooth={true}>
                    Contacts
                </LinkScroll>
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
