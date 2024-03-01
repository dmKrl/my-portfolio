/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import s from './Welcome.module.css';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import { Link } from 'react-scroll';
import imgPath from '../../../config';

const Welcome = () => {
    const { theme } = useSelector(selectThemeStore);

    return (
        <div className={s.welcome}>
            <div className={s.welcomeUp}>
                <div className={s.welcomeBox}>
                    <img
                        className={s.mainBackImg}
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/image-back.png`
                                : `${imgPath.imagePath}/image/image-back-white.png`
                        }
                        alt=""
                    />
                </div>
                <h1 className={s.welcomeHeading}>
                    Hello, <br />
                    I'm Dmitry
                </h1>
            </div>
            <div className={s.welcomeDown}>
                <p className={s.welcomeDownText}>
                    A <span>frontend developer</span> with passion for learning
                    and creating. I am passionate about new technologies and am
                    constantly expanding my experience with them.
                </p>
                <Link
                    className={s.anchor}
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <svg style={{ width: '48px', height: '48px' }}>
                        {theme === 'dark' ? (
                            <use
                                xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#scroll-black`}
                            />
                        ) : (
                            <use
                                xlinkHref={`${imgPath.imagePath}/image/icon/sprite.svg#scroll-white`}
                            />
                        )}
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
