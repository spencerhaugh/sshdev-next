export const RESUME_LINK = "https://drive.google.com/file/d/1lGJtliCnaQ1i37dCHmfPrTKDhbGN_pir/view?usp=sharing";
export const BASE_DATA_URL="https://portfolio-server-production-c31f.up.railway.app";

export interface RouteLink {
    path: string;
    label: string;
}

export const links: RouteLink[] = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/projects',
        label: 'Projects'
    },
    {
        path: '/contact',
        label: 'Contact'
    }
];

export const logToDevTools = () => {
    console.log(
        `
      **************************************************************
      %c
          ███████╗██████╗ ███████╗███╗   ██╗ ██████╗███████╗██████╗
          ██╔════╝██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝██╔══██╗
          ███████╗██████╔╝█████╗  ██╔██╗ ██║██║     █████╗  ██████╔╝
          ╚════██║██╔═══╝ ██╔══╝  ██║╚██╗██║██║     ██╔══╝  ██╔══██╗
          ███████║██║     ███████╗██║ ╚████║╚██████╗███████╗██║  ██║
          ╚══════╝╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═╝

          %c
          ██╗  ██╗ █████╗ ██╗   ██╗ ██████╗ ██╗  ██╗
          ██║  ██║██╔══██╗██║   ██║██╔════╝ ██║  ██║
          ███████║███████║██║   ██║██║  ███╗███████║
          ██╔══██║██╔══██║██║   ██║██║   ██║██╔══██║
          ██║  ██║██║  ██║╚██████╔╝╚██████╔╝██║  ██║
          ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝

          %c
          ██████╗  ██████╗ ████████╗
          ██╔══██╗██╔═══██╗╚══██╔══╝
          ██║  ██║██║   ██║   ██║
          ██║  ██║██║   ██║   ██║
          ██████╔╝╚██████╔╝   ██║
          ╚═════╝  ╚═════╝    ╚═╝

          %c
          ██████╗ ███████╗██╗   ██╗
          ██╔══██╗██╔════╝██║   ██║
          ██║  ██║█████╗  ██║   ██║
          ██║  ██║██╔══╝  ╚██╗ ██╔╝
          ██████╔╝███████╗ ╚████╔╝
          ╚═════╝ ╚══════╝  ╚═══╝

        %c%c`,
        `color: darkorange; font: 400 1em monospace;`,
        `color: orange; font: 400 1em monospace;`,
        `color: #f5af19; font: 400 1em monospace;`,
        `color: #ffd505; font: 400 1em monospace;`,
        "background-color: #d2ff00; color: black; font: 400 1em monospace; padding: 0.5em 0; font-weight: bold;",
        "",
        `Welcome to the site, please email your job offers to: spencer dot haugh at gmail dot com

      **************************************************************
      `
    );
}