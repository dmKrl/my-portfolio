import Marquee from 'react-double-marquee';
import s from './MarqueeFrontDev.module.css';

export default function MarqueeContact() {
    return (
        <div
            className={s.tickerContact}
            style={{
                width: '1600px',
                padding: '16px 0px',
                whiteSpace: 'nowrap',
                color: 'white',
                scrollWhen: 'overflow',
                speed: 0,
            }}
        >
            <Marquee>
                CONTACT * CONTACT * CONTACT * CONTACT * CONTACT * CONTACT *
                CONTACT * CONTACT * CONTACT * CONTACT * CONTACT * CONTACT *
                CONTACT * CONTACT * CONTACT * CONTACT * CONTACT * CONTACT *
                CONTACT * CONTACT * CONTACT * CONTACT *
            </Marquee>
        </div>
    );
}
