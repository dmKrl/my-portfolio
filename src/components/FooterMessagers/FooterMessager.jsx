import { Link } from 'react-router-dom';
import s from '../Footer/Footer.module.css';

const FooterMessager = () => {
    return (
        <>
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
        </>
    );
};

export default FooterMessager;
