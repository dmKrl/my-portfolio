import { Link } from 'react-router-dom';
import s from '../../ProjectCards/ProjectCards.module.css';

const ProjectCardItem = () => {
    return (
        <div className={s.projectCardsItem}>
            <div className={s.projectCardsImgBox}>
                <img src="/src/assets/image/image-project-item.png" alt="" />
            </div>
            <div className={s.projectCardsBottomBox}>
                <h3 className={s.projectCardsBottomHeading}>Name of project</h3>
                <Link className={s.projectCardsLink} to="/project">
                    View More 🠒
                </Link>
            </div>
        </div>
    );
};

export default ProjectCardItem;
