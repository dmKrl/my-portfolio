/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import s from '../../ProjectItem/ProjectItem.module.css';
import SkillsItem from '../SkillsItem/SkillsItem';

const ProjectItemBlock = ({ project }) => {
    return (
        <div className={s.projectContainer} key={project.id}>
            <div className={s.projectLeft}>
                <div className={s.projectLeftUp}>
                    <p className={s.projectDescription}>
                        {project.typeProject}
                    </p>
                    <h1 className={s.projectNameProject}>
                        {project.nameProject}
                    </h1>
                    <p className={s.projectText}>
                        {project.descriptionProject}
                    </p>
                </div>
                <div className={s.projectBlock}>
                    <h2 className={s.projectHeadingTechnologies}>
                        Technologies
                    </h2>
                    <div className={s.projectSkills}>
                        {project.Tools.map((tool) => {
                            return (
                                <SkillsItem key={project.id + 1}>
                                    {tool}
                                </SkillsItem>
                            );
                        })}
                    </div>
                </div>
                <div className={s.projectNav}>
                    <Link to={project.linkToCode} target="_blank">
                        View the code 🠒
                    </Link>
                    {project.linkToSite && (
                        <Link to={project.linkToSite} target="_blank">
                            View the project 🠒
                        </Link>
                    )}
                </div>
            </div>
            <div className={s.descriptionRight}>
                <img src={project.imageLaptop} alt="" />
            </div>
        </div>
    );
};

export default ProjectItemBlock;
