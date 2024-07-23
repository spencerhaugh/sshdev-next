import styles from './SkillComponent.module.scss';

export interface SkillObject {
  icon: string;
  name: string;
}

async function getSkillsData() {
    const response = await fetch(
        'https://portfolio-server-production-c31f.up.railway.app/skills'
    );
    const data = await response.json();

    return data.skills;
}

const SkillsComponent = async () => {
    const skillsList: SkillObject[] = await getSkillsData();

    return (
        <div className={styles.aboutSkillsInner}>
            <h2 className={styles.h2}>// SKILLS</h2>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsList}>
                    <ul className={styles.skillsListStyle}>
                        {
                            skillsList.map((skill: SkillObject) => (
                                <li className={styles.skillsListItem} key={skill.name}>
                                    <i className={ skill.icon }></i> { skill.name }
                                </li>
                            ))
                        }
                    </ul>
                </div>
             </div>
        </div>
)
}

export default SkillsComponent;