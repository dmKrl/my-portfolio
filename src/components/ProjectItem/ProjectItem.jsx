import { Link } from 'react-router-dom';
import SkillsItem from '../UI/SkillsItem/SkillsItem';
import s from './ProjectItem.module.css';

const ProjectItem = () => {
    return (
        <div className={s.projectWrapper}>
            <div className={s.projectContainer}>
                <div className={s.projectLeft}>
                    <div>
                        <p className={s.projectDescription}>Furniture store</p>
                        <h1 className={s.projectNameProject}>
                            Name of project
                        </h1>
                        <p className={s.projectText}>
                            A frontend developer with passion for learning and
                            creating. I am passionate about new technologies and
                            am constantly expanding my experience with them.
                        </p>
                    </div>
                    <div className={s.projectBlock}>
                        <h2 className={s.projectHeadingTechnologies}>
                            Technologies
                        </h2>
                        <div className={s.projectSkills}>
                            <SkillsItem>HTML</SkillsItem>
                        </div>
                    </div>
                    <div className={s.projectNav}>
                        <Link to="/project">View the code 🠒</Link>
                        <Link to="/project">View the project 🠒</Link>
                    </div>
                </div>
                <div className={s.descriptionRight}>
                    <img src="/src/assets/image/Image-project.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
