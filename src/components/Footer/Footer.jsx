import MarqueeContact from '../Marquee/MarqueeContact';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <MarqueeContact />
            <div className={s.footerContainer}>
                <div className={s.footerDown}>
                    <div className={s.footerDownLeft}>
                        <p className={s.footerDownLeftText}>
                            Are interested in me or you have a job offer?{' '}
                        </p>
                        <h1 className={s.footerDownLeftHeading}>Let’s talk</h1>
                    </div>
                    <div className={s.footerDownCenter}>
                        <p className={s.footerDownCenterText}>
                            Contact me in any way convenient for you and I will
                            answer you today
                        </p>
                        <div className={s.footerDownCenterMessage}>
                            <Link>
                                <svg style={{ width: '32px', height: '32px' }}>
                                    <use xlinkHref="/src/assets/image/icon/sprite.svg#mail" />
                                </svg>
                            </Link>
                            <Link>
                                <svg style={{ width: '32px', height: '32px' }}>
                                    <use xlinkHref="/src/assets/image/icon/sprite.svg#tg" />
                                </svg>
                            </Link>
                            <Link>
                                <svg style={{ width: '28px', height: '28px' }}>
                                    <use xlinkHref="/src/assets/image/icon/sprite.svg#whatsapp" />
                                </svg>
                            </Link>
                            <Link>
                                <svg style={{ width: '32px', height: '32px' }}>
                                    <use xlinkHref="/src/assets/image/icon/sprite.svg#git" />
                                </svg>
                            </Link>
                            <Link>
                                <svg style={{ width: '32px', height: '32px' }}>
                                    <use xlinkHref="/src/assets/image/icon/sprite.svg#linkedin" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={s.footerAnchor}>
                    {' '}
                    <Link>
                        <svg style={{ width: '48px', height: '48px' }}>
                            <use xlinkHref="/src/assets/image/icon/sprite.svg#scroll-black-up" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className={s.footerCreatedBy}>
                <span>© Dmitry Kralichkin 2023</span>
            </div>
        </div>
    );
};

export default Footer;
