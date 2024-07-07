import ProjectComponent from "@/app/components/ProjectComponent";

const page = [{
      name: 'Poorly Drawn Pokemon',
      description: 'A full stack image hosting platform',
      imgAsset: '/pokemon-app.png',
      link: 'http://www.poorlydrawnpokemon.com',
      repoLink: 'https://github.com/spencerhaugh/monsters',
      body: 'This was built in NextJS, a server side rendering\n' +
        '                framework that uses React under the hood. It allows admins to upload files, and\n' +
        '                also features search functionality, and a dark mode switcher. It is written in\n' +
        '                TypeScript. I used a Postgres SQL database to store user and image data, and\n' +
        '                Cloudinary to host image file uploads, as well as Strapi, a headless CMS for\n' +
        '                easy admin for my client. It is also fully mobile-ready.\n' +
        '                This project is deployed via Railway.',
      technologies: ['NextJS', 'React', 'TypeScript', 'Postgres', 'Strapi',
        'Material UI', 'Railway']
    },
    {
      name: 'Spencer Haugh Dot Dev',
      description: 'This very app!',
      imgAsset: '/shdev-app.png',
      link: 'http://www.spencerhaugh.dev',
      repoLink: '',
      body: 'This site has been built twice, once in Next JS using React, and once in Analog JS using Angular. I wanted to compare using these two SSR frameworks, and I thought "what better way to learn them than to build the same frontend with each technology?" And so, a project was born.',
      technologies: ['Next JS', 'Analog JS', 'React', 'Angular', 'SSR', 'Shared backend']
    },
]

const ProjectPage = () => {
    return(
        <>
            {
                page.map(project => (
                    <ProjectComponent {...project} />
                ))
            }
        </>
    )
}

export default ProjectPage;