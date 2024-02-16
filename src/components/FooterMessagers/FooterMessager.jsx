import { Link } from 'react-router-dom';
import s from '../Footer/Footer.module.css';
import { useSelector } from 'react-redux';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';

const FooterMessager = () => {
    const { theme } = useSelector(selectThemeStore);

    return (
        <>
            <div className={s.footerDownCenterMessage}>
                <Link>
                    {theme === 'dark' ? (
                        <img
                            src="/src/assets/image/icon/mail.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src="/src/assets/image/icon/mail-light.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
                <Link>
                    {theme === 'dark' ? (
                        <img
                            src="/src/assets/image/icon/tg.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src="/src/assets/image/icon/tg-light.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
                <Link>
                    {theme === 'dark' ? (
                        <img
                            src="/src/assets/image/icon/whatsapp.svg"
                            style={{ width: '24px', height: '24px' }}
                        />
                    ) : (
                        <img
                            src="/src/assets/image/icon/whatsapp-light.svg"
                            style={{ width: '24px', height: '24px' }}
                        />
                    )}
                </Link>
                <Link>
                    {theme === 'dark' ? (
                        <img
                            src="/src/assets/image/icon/git.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src="/src/assets/image/icon/git-light.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
                <Link>
                    {theme === 'dark' ? (
                        <img
                            src="/src/assets/image/icon/linkedin.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src="/src/assets/image/icon/linkedin-light.svg"
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
            </div>
        </>
    );
};

export default FooterMessager;
