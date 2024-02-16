/* eslint-disable react/prop-types */
import s from '../../Skills/Skills.module.css';

const SkillsItem = (props) => {
    const { children } = props;
    return (
        <>
            <div className={s.skillsItem}>{children}</div>
        </>
    );
};

export default SkillsItem;
