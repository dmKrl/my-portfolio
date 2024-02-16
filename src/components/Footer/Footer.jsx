import MarqueeContact from '../Marquee/MarqueeContact';
import s from './Footer.module.css';
import FooterMessager from './../FooterMessagers/FooterMessager';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

const Footer = () => {
    const { theme } = useSelector(selectThemeStore);

    return (
        <div className={s.footer} name="footer">
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
                        <FooterMessager />
                    </div>
                </div>
                <div className={s.footerAnchor}>
                    <Link
                        className={s.anchor}
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <img
                            src={`${
                                theme === 'dark'
                                    ? '/src/assets/image/icon/scroll-black-up.svg'
                                    : '/src/assets/image/icon/scroll-light-up.svg'
                            }`}
                            alt=""
                        />
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
