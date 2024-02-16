import SkillsItem from '../UI/SkillsItem/SkillsItem';
import s from './Skills.module.css';
import skillsData from '../../../skillsData.json';

const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.skillsLeft}>
                <h1 className={s.skillsHeading}>My skills</h1>
                <p className={s.skillsText}>
                    Over the past year, I have been actively developing building
                    a logical and intuitive user interaction, create adaptive
                    web pages using modern tools.
                </p>
            </div>
            <div className={s.skillsBox}>
                <div className={s.skillsItems}>
                    {skillsData.map((skill) => {
                        return (
                            <SkillsItem key={skill.id}>{skill.name}</SkillsItem>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
