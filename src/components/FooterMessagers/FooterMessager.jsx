import { Link } from 'react-router-dom';
import s from '../Footer/Footer.module.css';
import { useSelector } from 'react-redux';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import imgPath from '../../../config';

const FooterMessager = () => {
    const { theme } = useSelector(selectThemeStore);
    return (
        <>
            <div className={s.footerDownCenterMessage} name="contacts">
                <Link to="mailto:dm_krl@mail.ru" target="_blank">
                    <img
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/icon/mail.svg`
                                : `${imgPath.imagePath}/image/icon/mail-light.svg`
                        }
                        style={{ width: '32px', height: '32px' }}
                        alt="messenger-mail"
                    />
                </Link>
                <Link to="https://t.me/Grogupa" target="_blank">
                    <img
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/icon/tg.svg`
                                : `${imgPath.imagePath}/image/icon/tg-light.svg`
                        }
                        style={{ width: '32px', height: '32px' }}
                        alt="messenger-telegram"
                    />
                </Link>
                <Link to="https://wa.me/qr/HPYENM3JE5YYH1" target="_blank">
                    <img
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/icon/whatsapp.svg`
                                : `${imgPath.imagePath}/image/icon/whatsapp-light.svg`
                        }
                        style={{ width: '32px', height: '32px' }}
                        alt="messenger-telegram"
                    />
                </Link>
                <Link to="https://github.com/dmKrl" target="_blank">
                    <img
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/icon/git.svg`
                                : `${imgPath.imagePath}/image/icon/git-light.svg`
                        }
                        style={{ width: '32px', height: '32px' }}
                        alt="messenger-git"
                    />
                </Link>
                <Link to="https://linkedin.com/in/krldmitrya" target="_blank">
                    <img
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/icon/linkedin.svg`
                                : `${imgPath.imagePath}/image/icon/linkedin-light.svg`
                        }
                        style={{ width: '32px', height: '32px' }}
                        alt="messenger-linkedin"
                    />
                </Link>
            </div>
        </>
    );
};

export default FooterMessager;
