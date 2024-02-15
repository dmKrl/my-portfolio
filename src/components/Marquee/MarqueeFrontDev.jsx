import Marquee from 'react-double-marquee';
import s from './MarqueeFrontDev.module.css';

export default function MarqueeFrontDev() {
    return (
        <div
            className={s.ticker}
            style={{
                width: '1600px',
                padding: '16px 0px',
                whiteSpace: 'nowrap',
                color: 'white',
                speed: 0.2,
            }}
        >
            <Marquee>
                FRONTEND * DEVELOPER * FRONTEND * DEVELOPER * FRONTEND *
                DEVELOPER * FRONTEND * DEVELOPER * FRONTEND * DEVELOPER *
                FRONTEND * DEVELOPER * FRONTEND * DEVELOPER * FRONTEND *
                DEVELOPER * FRONTEND * DEVELOPER * FRONTEND * DEVELOPER *
                FRONTEND * DEVELOPER * FRONTEND * DEVELOPER * FRONTEND *
                DEVELOPER * FRONTEND * DEVELOPER * FRONTEND * DEVELOPER *
                FRONTEND * DEVELOPER
            </Marquee>
        </div>
    );
}
