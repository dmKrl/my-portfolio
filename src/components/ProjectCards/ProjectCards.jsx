import ProductSlider from '../ProductSlider/ProductSlider';
import s from './ProjectCards.module.css';

const ProjectCards = () => {
    return (
        <div className={s.projectCards}>
            <div className={s.projectCardsUp}>
                <h1 className={s.projectCardsHeading}>Portfolio</h1>
            </div>
            <div className={s.projectCardsItems}>
                <ProductSlider />
            </div>
        </div>
    );
};

export default ProjectCards;
