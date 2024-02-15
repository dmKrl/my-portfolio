import s from './Skills.module.css';

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
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                    <div className={s.skillsItem}>HTML</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
