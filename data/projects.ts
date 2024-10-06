type obj = {
  id: string;
  src: string;
  title: string;
  desc: string;
  href?: string;
  repoHref: string;
  category: "Frontend" | "Backend" | "FullStack";
  technologies?: techObj[];
  objectiveProject?: objectiveObj[];
};

type objectiveObj = {
  id: string;
  text: string;
};

type techObj = {
  id: string;
  title: string;
};
export const data: obj[] = [
  {
    id: "Blogs-scroll",
    src: "/imgs/projectsImgs/Blogs-scroll.png",
    title: "Blogs-Scroll",
    desc: "Blogs-Scroll is a dynamic blogging platform designed to streamline content creation and management. Utilizing Next.js for server-side rendering and optimized performance, the project integrates MongoDB and Mongoose for robust data handling. NextAuth is employed for secure authentication, while Tailwind CSS ensures a modern and responsive design. The platform aims to provide an intuitive and engaging experience for both bloggers and readers.",
    href: "https://blogs-web-site.vercel.app/",
    repoHref: "https://github.com/imadkasse/next_blog",
    category: "FullStack",
    technologies: [
      {
        id: "nextjs",
        title: "Next.js",
      },
      {
        id: "mongodb",
        title: "MongoDB",
      },
      {
        id: "nextauth",
        title: "NextAuth",
      },
      {
        id: "tailwindcss",
        title: "Tailwind CSS",
      },
      {
        id: "axios",
        title: "Axios",
      },
    ],
    objectiveProject: [
      {
        id: "0",
        text: "A dynamic blogging platform designed for content creation and management.",
      },
      {
        id: "1",
        text: "View useful information, write it down, and share ideas and creativity",
      },
    ],
  },
  {
    id: "Prayer-time",
    src: "/imgs/project prayer.png",
    title: "Prayer Time",
    desc: "Prayer Time is a user-friendly application designed to provide accurate prayer times for various locations. Built with Vite and React for fast development and responsive UI, the app utilizes a Material UI design for a sleek and intuitive interface. Integration with a reliable API ensures precise prayer times, while Material Icons enhance the visual appeal and usability. The application aims to make prayer scheduling effortless and accessible for users worldwide.",
    repoHref: "https://github.com/imadkasse/Prayer_Times",
    category: "Frontend",
    technologies: [
      {
        id: "react",
        title: "React",
      },
      {
        id: "vite",
        title: "Vite",
      },
      {
        id: "material-ui",
        title: "Material UI",
      },
      {
        id: "axios",
        title: "Axios",
      },
    ],
    objectiveProject: [
      {
        id: "2",
        text: "A user-friendly application designed to provide accurate prayer times for various locations.",
      },
      {
        id: "3",
        text: "Set a timer to know how long is left for the next prayer",
      },
    ],
  },
  {
    id: "Chat-app",
    src: "/imgs/project chat app.png",
    title: "Chat App",
    desc: "Chat App is an interactive messaging platform designed to facilitate real-time communication. Utilizing Firebase for authentication, storage, and real-time database functionalities, the app ensures secure and seamless user interactions. Developed with React and Vite for a fast and responsive user experience, and styled with pure CSS for a clean and minimalistic design, the application aims to provide an efficient and engaging chat experience.",
    repoHref: "https://github.com/imadkasse/Chat_APP",
    category: "Frontend",
    technologies: [
      {
        id: "react",
        title: "React",
      },
      {
        id: "vite",
        title: "Vite",
      },
      {
        id: "firebase",
        title: "Firebase",
      },
    ],
    objectiveProject: [
      {
        id: "4",
        text: "A feature-rich online messaging platform designed to facilitate real-time communication.",
      },
    ],
  },
  {
    id: "E-commerce-strapi",
    src: "/imgs/projectsImgs/E-commerce.png",
    title: "E-commerce",
    desc: "E-commerce is a feature-rich online shopping platform designed to offer a seamless shopping experience. Built using Material UI for a modern and responsive interface, the project integrates Strapi as a headless CMS to manage and deliver dynamic content efficiently. Material Icons are used for a polished and intuitive design, while Framer Motion adds smooth animations and transitions, enhancing the overall user experience. The application aims to provide an engaging and user-friendly shopping environment.",
    href: "https://e-commrce--strapi-app.web.app/",
    repoHref: "https://github.com/imadkasse/E-commerce_strapi",
    category: "FullStack",
    technologies: [
      {
        id: "react",
        title: "React",
      },
      {
        id: "material-ui",
        title: "Material UI",
      },
      {
        id: "strapi",
        title: "Strapi",
      },
    ],
    objectiveProject: [
      {
        id: "5",
        text: "A feature-rich online shopping platform designed to offer a seamless shopping experience.",
      },
    ],
  },
  {
    id: "movie",
    src: "/imgs/projectsImgs/movies.web.png",
    title: "Movies-show",
    desc: "Movies-show is a dynamic application designed to showcase the latest films and television shows. Developed with React for an interactive and responsive user interface, the app fetches and displays data using a reliable API. It aims to provide users with an engaging and intuitive platform to explore movie and show information effortlessly.",
    href: "https://movies-api-db0.netlify.app/",
    repoHref: "https://github.com/imadkasse/Movies-Api?tab=readme-ov-file",
    category: "Frontend",
    technologies: [
      {
        id: "react",
        title: "React",
      },
      {
        id: "axios",
        title: "Axios",
      },
    ],
    objectiveProject: [
      {
        id: "6",
        text: "A dynamic application designed to showcase the latest films and television shows.",
      },
    ],
  },
  {
    id: "Quran-Live",
    src: "/imgs/projectsImgs/Quran-web.png",
    title: "Quran and Live Channel",
    desc: "Quran and Live Channel is a versatile application designed to provide users with access to Quranic content and live streaming. Built with Bootstrap for a responsive and visually appealing design, the app uses JavaScript for dynamic functionality, HTML for structure, and integrates with an API to deliver real-time content. It aims to deliver an engaging experience for users seeking both religious content and live broadcasts.",
    href: "https://quran1api.netlify.app/",
    repoHref: "https://github.com/imadkasse/Quran_website",
    category: "Frontend",
    technologies: [
      {
        id: "bootstrap",
        title: "Bootstrap",
      },
      {
        id: "javascript",
        title: "JavaScript",
      },
      {
        id: "html",
        title: "HTML",
      },
      {
        id: "axios",
        title: "Axios",
      },
    ],
    objectiveProject: [
      {
        id: "7",
        text: "A versatile application designed to provide users with access to Quranic content and live streaming.",
      },
      {
        id: "8",
        text: "you can Listen Quran and watching live ",
      },
    ],
  },
];
//filter By Category
export const fullStack = data.filter((item) => item.category === "FullStack");
export const frontend = data.filter((item) => item.category === "Frontend");
export const backend = data.filter((item) => item.category === "Backend");
