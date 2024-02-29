import { useSelector } from 'react-redux';
import s from './Info.module.css';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import Skills from '../Skills/Skills';
import ProjectCards from '../ProjectCards/ProjectCards';

const Info = () => {
    const { theme } = useSelector(selectThemeStore);
    return (
        <div
            className={`${s.info} ${
                theme === 'dark' ? s.infoDark : s.infoLight
            }`}
        >
            <div className={s.infoContainer}>
                <Skills />
                <ProjectCards />
            </div>
        </div>
    );
};

export default Info;
