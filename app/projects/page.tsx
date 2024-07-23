import ProjectComponent, { ProjectObject } from "@/app/components/ProjectComponent/ProjectComponent";
import { BASE_DATA_URL } from "@/app/page";

async function getProjectsData() {
    const response = await fetch(
        `${BASE_DATA_URL}/projects`
    );
    return await response.json();
}

const ProjectPage = async () => {
    const projectData: ProjectObject[]  = await getProjectsData();

    return (
        <>
            {
                projectData.map(project => (
                    <ProjectComponent {...project} key={project.name} />
                ))
            }
        </>
    )
}

export default ProjectPage;