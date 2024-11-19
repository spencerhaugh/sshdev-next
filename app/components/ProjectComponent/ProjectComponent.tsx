import styles from './ProjectComponent.module.scss';
import classnames from 'classnames';

export interface ProjectObject {
    name: string;
    description: string;
    imgAsset: string;
    versions: ProjectVersion[];
    body: string;
    technologies: string[];
}

interface ProjectVersion {
    language: string;
    link: string;
    repoLink: string;
}

export default function ProjectComponent(project: ProjectObject) {
    return (
        <div className={styles.projectComponent}>
            <article className={styles.projectTile}>
                <h2 className={styles.h2}>{project.name}</h2>
                <h3 className={styles.h3}>{project.description}</h3>
                <img src={project.imgAsset} alt={project.name} className={styles.image}/>
                    {
                        project.versions &&
                            project.versions.map((p, index) =>
                                <div className={styles.buttons} key={index}>
                                    <a href={p.link} target="_blank">
                                        <button className={classnames(styles.button, styles.liveSite)}>
                                            { p.language ? p.language + ' ' : '' }Deployed Site
                                        </button>
                                    </a>
                                    { p.repoLink ?
                                    <a href={p.repoLink} target="_blank">
                                        <button className={classnames(styles.button, styles.githubCode)}>
                                            { p.language ? p.language + ' ' : '' }Github
                                        </button>
                                    </a>
                                        :
                                        ''
                                    }
                                </div>
                            )
                    }
                <div className={styles.description}>
                    <strong>Description:</strong> {project.body}
                </div>
                <div className={styles.tech}>
                    <strong>Technologies Used:</strong>
                    {
                        project.technologies.map((tech, index) =>
                            <div key={index}>{tech}</div>
                        )
                    }
                </div>
            </article>
        </div>
    )
}