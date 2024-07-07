// import {ProjectObject} from "@/app/page";

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
        <article className="project-tile">
            <h2>{project.name}</h2>
            <h3>{project.description}</h3>
            <a href={ project.link } target="_blank">
                <img src={ project.imgAsset } alt={ project.name } />
            </a>
            <div className="buttons">
                <a href={ project.link } target="_blank">
                    <button className='button live-site'>LIVE SITE</button>
                </a>
                <a href={ project.repoLink } target="_blank">
                    <button className='button github-code'>GITHUB</button>
                </a>
            </div>
            <div className="description">
                <strong>Description:</strong> { project.body }
            </div>
            <div className="tech">
                <strong>Technologies Used:</strong>
                    {
                        project.technologies.map((tech) =>
                            <div>{tech}</div>
                        )
                    }
            </div>
        </article>
    )
}