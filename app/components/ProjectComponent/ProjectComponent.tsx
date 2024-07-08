import styles from './ProjectComponent.module.scss';
import classnames from 'classnames';

interface Project {
    name: string;
    description: string;
    imgAsset: string;
    link: string;
    repoLink: string;
    body: string;
    technologies: string[];
}

export default function ProjectComponent(project: Project) {
    return (
        <div className={styles.projectComponent}>
            <article className={styles.projectTile}>
                <h2 className={styles.h2}>{project.name}</h2>
                <h3 className={styles.h3}>{project.description}</h3>
                <a href={project.link} target="_blank">
                    <img src={project.imgAsset} alt={project.name} className={styles.image}/>
                </a>
                <div className={styles.buttons}>
                    <a href={project.link} target="_blank">
                        <button className={classnames(styles.button, styles.liveSite)}>LIVE SITE</button>
                    </a>
                    <a href={project.repoLink} target="_blank">
                        <button className={classnames(styles.button, styles.githubCode)}>GITHUB</button>
                    </a>
                </div>
                <div className={styles.description}>
                    <strong>Description:</strong> {project.body}
                </div>
                <div className={styles.tech}>
                    <strong>Technologies Used:</strong>
                    {
                        project.technologies.map((tech) =>
                            <div>{tech}</div>
                        )
                    }
                </div>
            </article>
        </div>
    )
}