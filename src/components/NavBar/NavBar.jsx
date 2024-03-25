/* eslint-disable react/prop-types */
import { Link as LinkScroll, scroller } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpenNavMenu } from '../../redux/navMenuSlice/navMenuSlice';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import FooterMessager from '../FooterMessagers/FooterMessager';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = ({
    theme,
    handleDarkThemeClick,
    handleLightThemeClick,
    isScreenMob,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const changeIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };

    const toggleIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };

    useEffect(() => {
        const scrollId = localStorage.getItem('scrollId');
        if (scrollId) {
            localStorage.removeItem('scrollId');
            scroller.scrollTo(scrollId, {
                delay: 0,
                smooth: true,
                offset: 0,
            });
        }
    }, [location]);

    const handleScrollTo = (id) => {
        navigate('/');
        changeIsOpen();
        localStorage.setItem('scrollId', id);
    };

    return (
        <div className={s.navBlockContent}>
            <div className={s.navBlockMain}>
                <nav className={s.headerNavBar} onClick={toggleIsOpen}>
                    <>
                        <Link to="/" className={s.linkHome}>
                            Home
                        </Link>
                        <LinkScroll
                            to="skills"
                            smooth={true}
                            onClick={() => handleScrollTo('skills')}
                            offset={-50}
                        >
                            Tools
                        </LinkScroll>
                        <LinkScroll
                            to="projects"
                            smooth={true}
                            onClick={() => handleScrollTo('projects')}
                            offset={-50}
                        >
                            Projects
                        </LinkScroll>
                        <LinkScroll
                            to="contacts"
                            smooth={true}
                            onClick={() => handleScrollTo('contacts')}
                            offset={-50}
                        >
                            Contacts
                        </LinkScroll>
                    </>
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
