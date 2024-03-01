/* eslint-disable react/prop-types */
import s from '../Header/Header.module.css';
import imgPath from '../../../config';

const ChangeTheme = ({
    theme,
    handleLightThemeClick,
    handleDarkThemeClick,
}) => {
    return (
        <>
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
        </>
    );
};

export default ChangeTheme;
