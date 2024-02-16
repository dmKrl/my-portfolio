import { useSelector } from 'react-redux';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { selectThemeStore } from '../../redux/themeSlice/themeSlice';
import s from './ProjectPage.module.css';

const ProjectPage = () => {
    const { theme } = useSelector(selectThemeStore);

    return (
        <div
            className={`${s.projectPageContainer} ${
                theme === 'dark'
                    ? s.projectPageContainerDark
                    : s.projectPageContainerLight
            }`}
        >
            <ProjectItem />
        </div>
    );
};

export default ProjectPage;
