/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import s from '../../ProjectCards/ProjectCards.module.css';
import { useSelector } from 'react-redux';
import { selectThemeStore } from '../../../redux/themeSlice/themeSlice';
import imgPath from '../../../../config';

const ProjectCardItem = ({ projectInfo }) => {
    const { theme } = useSelector(selectThemeStore);

    return (
        <div className={s.projectCardsItem}>
            <div className={s.projectCardsImgBox}>
                <img
                    src={projectInfo.image}
                    alt={`image-project-${projectInfo.nameProject}`}
                />
            </div>
            <div className={s.projectCardsBottomBox}>
                <h3 className={s.projectCardsBottomHeading}>
                    {projectInfo.nameProject}
                </h3>
                <p className={s.projectCardsText}>Web Development</p>
                <Link
                    className={s.projectCardsLink}
                    to={`/project/${projectInfo.id}`}
                >
                    View more
                    <img
                        src={
                            theme === 'dark'
                                ? `${imgPath.imagePath}/image/icon/Arrow-white.svg`
                                : `${imgPath.imagePath}/image/icon/Arrow-black.svg`
                        }
                        alt="view more"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCardItem;
