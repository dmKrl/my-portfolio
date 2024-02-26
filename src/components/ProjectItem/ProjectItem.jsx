import s from './ProjectItem.module.css';
import projectData from '../../../projectData.json';
import ProjectItemBlock from '../UI/ProjectItemBlock/ProjectItemBlock';
import { useParams } from 'react-router-dom';

const ProjectItem = () => {
    const params = useParams();
    console.log(params);
    const projectDataInfo = projectData.filter(
        (projectInfo) => projectInfo.id === Number(params.id)
    );
    return (
        <div className={s.projectWrapper}>
            <ProjectItemBlock project={projectDataInfo[0]} />
        </div>
    );
};

export default ProjectItem;
