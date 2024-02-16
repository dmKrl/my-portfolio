import ProjectCardItem from '../UI/ProjectCardItem/ProjectCardItem';
import s from './ProjectCards.module.css';

const ProjectCards = () => {
    return (
        <div className={s.projectCards}>
            <div className={s.projectCardsUp}>
                <h1 className={s.projectCardsHeading}>Portfolio</h1>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className={s.projectCardsItems}>
                <ProjectCardItem />
                <ProjectCardItem />
            </div>
        </div>
    );
};

export default ProjectCards;
