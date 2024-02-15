import { useSelector } from 'react-redux';
import s from './Info.module.css';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import Skills from '../Skills/Skills';

const Info = () => {
    const { theme } = useSelector(selectThemeStore);
    console.log(theme);
    return (
        <div
            className={`${s.info} ${
                theme === 'dark' ? s.infoDark : s.infoLight
            }`}
        >
            <div className={s.infoContainer}>
                <Skills />
            </div>
        </div>
    );
};

export default Info;
