import Marquee from 'react-double-marquee';
import s from './MarqueeFrontDev.module.css';

export default function MarqueeFrontDev() {
    return (
        <div
            className={s.tickerFront}
            style={{
                maxWidth: '1600px',
                padding: '16px 0px',
                whiteSpace: 'nowrap',
                color: 'white',
                scrollWhen: 'overflow',
                speed: 0,
            }}
        >
            <Marquee>
                FRONTEND · DEVELOPER · FRONTEND · DEVELOPER · FRONTEND ·
                DEVELOPER · FRONTEND · DEVELOPER · FRONTEND · DEVELOPER ·
                FRONTEND · DEVELOPER · FRONTEND · DEVELOPER · FRONTEND ·
                DEVELOPER · FRONTEND · DEVELOPER · FRONTEND · DEVELOPER ·
                FRONTEND · DEVELOPER · FRONTEND · DEVELOPER · FRONTEND ·
                DEVELOPER · FRONTEND · DEVELOPER · FRONTEND · DEVELOPER ·
                FRONTEND · DEVELOPER
            </Marquee>
        </div>
    );
}
