import styles from './SkillComponent.module.scss';

interface SkillObject {
  icon: string;
  name: string;
}

const SkillsComponent = () => {
    const skillsList: SkillObject[] = [
    {
      icon: 'fab fa-js',
      name: 'Javascript',
    },
    {
      icon: 'fab fa-node-js',
      name: 'NodeJS',
    },
    {
      icon: 'fab fa-angular',
      name: 'Angular',
    },
    {
      icon: 'fa fa-database',
      name: 'SQL',
    },
    {
      icon: 'fab fa-node',
      name: 'Express',
    },
    {
      icon: 'fab fa-react',
      name: 'React & Next',
    },
    {
      icon: 'fab fa-python',
      name: 'Python'
    },
    {
      icon: 'fab fa-docker',
      name: 'Docker',
    },
    {
      icon: 'fab fa-git-alt',
      name: 'Git',
    },
    {
      icon: 'fab fa-css3-alt',
      name: 'CSS',
    },
    {
      icon: 'fab fa-html5',
      name: 'HTML',
    },
  ];

    return (
        <div className={styles.aboutSkillsInner}>
            <h2 className={styles.h2}>// SKILLS</h2>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsList}>
                    <ul className={styles.skillsListStyle}>
                        {
                            skillsList.map((skill) => {
                                return (
                                    <li className={styles.skillsListItem}>
                                        <i className={ skill.icon }></i>
                                        { skill.name }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
             </div>
        </div>
)
}

export default SkillsComponent;