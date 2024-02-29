/* eslint-disable react/prop-types */
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import imgPath from '../../../config';
import s from '../Header/Header.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpenNavMenu } from '../../redux/navMenuSlice/navMenuSlice';

const NavBar = ({ theme, handleDarkThemeClick, handleLightThemeClick }) => {
    const dispatch = useDispatch();

    const toggleIsOpen = () => {
        dispatch(setIsOpenNavMenu());
    };
    console.log(theme);
    return (
        <>
            <nav className={s.headerNavBar} onClick={toggleIsOpen}>
                <Link to="/">Home</Link>
                <LinkScroll to="skills" smooth={true}>
                    Tools
                </LinkScroll>
                <LinkScroll to="project" smooth={true}>
                    Project
                </LinkScroll>
                <LinkScroll to="contact" smooth={true}>
                    Contact
                </LinkScroll>
            </nav>
            <div className={s.headerOptions}>
                <div>
                    <div className={s.changeBackColor}>
                        <button
                            className={s.changeButton}
                            onClick={() => handleLightThemeClick()}
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
                            onClick={() => handleDarkThemeClick()}
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
        </>
    );
};

export default NavBar;
