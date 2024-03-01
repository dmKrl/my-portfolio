import { useResize } from '../../hooks/useResize';
import ProductSlider from '../ProductSlider/ProductSlider';
import ProjectCardItem from '../UI/ProjectCardItem/ProjectCardItem';
import projectData from '../../../projectData.json';
import s from './ProjectCards.module.css';

const ProjectCards = () => {
    const { isScreenMob } = useResize();
    return (
        <div className={s.projectCards} name="projects">
            <div className={s.projectCardsUp}>
                <h1 className={s.projectCardsHeading}>Portfolio</h1>
            </div>
            <div className={s.projectCardsItems}>
                {isScreenMob ? (
                    projectData.map((projectInfo) => {
                        return (
                            <ProjectCardItem
                                projectInfo={projectInfo}
                                key={projectInfo.id}
                            />
                        );
                    })
                ) : (
                    <ProductSlider />
                )}
            </div>
        </div>
    );
};

export default ProjectCards;
