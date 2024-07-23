import ProjectComponent, { ProjectObject } from "@/app/components/ProjectComponent/ProjectComponent";

async function getProjectsData() {
    const response = await fetch(
        'https://portfolio-server-production-c31f.up.railway.app/projects'
    );
    return await response.json();
}

const ProjectPage = async () => {
    const projectData: ProjectObject[]  = await getProjectsData();

    return(
        <>
            {
                projectData.map(project => (
                    <ProjectComponent {...project} />
                ))
            }
        </>
    )
}

export default ProjectPage;