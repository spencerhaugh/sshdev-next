import styles from './SkillComponent.module.scss';
import { BASE_DATA_URL } from "@/app/app.config";

export interface SkillObject {
  icon: string;
  name: string;
}

async function getSkillsData() {
    const response = await fetch(
        `${BASE_DATA_URL}/skills`
    );
    return await response.json();
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