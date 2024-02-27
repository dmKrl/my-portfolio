import { Link } from 'react-router-dom';
import s from '../Footer/Footer.module.css';
import { useSelector } from 'react-redux';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import imgPath from '../../../config';

const FooterMessager = () => {
    const { theme } = useSelector(selectThemeStore);
    return (
        <>
            <div className={s.footerDownCenterMessage} name="contact">
                <Link to="mailto:dm_krl@mail.ru" target="_blank">
                    {theme === 'dark' ? (
                        <img
                            src={`${imgPath.imagePath}/image/icon/mail.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src={`${imgPath.imagePath}/image/icon/mail-light.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
                <Link to="https://t.me/Grogupa" target="_blank">
                    {theme === 'dark' ? (
                        <img
                            src={`${imgPath.imagePath}/image/icon/tg.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src={`${imgPath.imagePath}/image/icon/tg-light.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
                <Link to="https://wa.me/qr/HPYENM3JE5YYH1" target="_blank">
                    {theme === 'dark' ? (
                        <img
                            src={`${imgPath.imagePath}/image/icon/whatsapp.svg`}
                            style={{ width: '24px', height: '24px' }}
                        />
                    ) : (
                        <img
                            src={`${imgPath.imagePath}/image/icon/whatsapp-light.svg`}
                            style={{ width: '24px', height: '24px' }}
                        />
                    )}
                </Link>
                <Link to="https://github.com/dmKrl" target="_blank">
                    {theme === 'dark' ? (
                        <img
                            src={`${imgPath.imagePath}/image/icon/git.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src={`${imgPath.imagePath}/image/icon/git-light.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
                <Link to="https://linkedin.com/in/krldmitrya" target="_blank">
                    {theme === 'dark' ? (
                        <img
                            src={`${imgPath.imagePath}/image/icon/linkedin.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    ) : (
                        <img
                            src={`${imgPath.imagePath}/image/icon/linkedin-light.svg`}
                            style={{ width: '32px', height: '32px' }}
                        />
                    )}
                </Link>
            </div>
        </>
    );
};

export default FooterMessager;