import { useSelector } from 'react-redux';
import s from './Welcome.module.css';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
/* eslint-disable react/no-unescaped-entities */
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
                                ? '/src/assets/image/image-back.png'
                                : '/src/assets/image/image-back-white.png'
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
                <button className={s.anchor}>
                    {theme === 'dark' ? (
                        <svg style={{ width: '48px', height: '48px' }}>
                            <use xlinkHref="/src/assets/image/icon/sprite.svg#scroll-black" />
                        </svg>
                    ) : (
                        <svg style={{ width: '48px', height: '48px' }}>
                            <use xlinkHref="/src/assets/image/icon/sprite.svg#scroll-white" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Welcome;
