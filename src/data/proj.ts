// Define the type for project data
type ProjectItem = BaseItem & {
  image?: string; // Only projects have images
};

export const projectsData: ProjectItem[] = [
  {
    dates: "2023",
    title: "Personal Portfolio",
    description: `Built a personal portfolio website to showcase my projects and skills.
    It includes interactive UI components and responsive design.`,
    technologies: "Next.js, TailwindCSS, React, Motion.js",
    image: "https://via.placeholder.com/500x400",
  },
  {
    dates: "2022",
    title: "E-commerce App",
    description: `Developed a fully functional e-commerce application with product search, cart functionality, and payment integration.`,
    technologies: "EJS, Express, MongoDB, Bootstrap",
    image: "https://via.placeholder.com/500x400",
  },
  {
    dates: "2023",
    title: "Weather Dashboard",
    description: `Created a weather dashboard that displays real-time weather updates, 7-day forecasts, and search functionality
    using external APIs.`,
    technologies: "JavaScript, OpenWeather API, Bootstrap",
    image: "https://via.placeholder.com/500x400",
  },
  {
    dates: "2022",
    title: "Expense Tracker App",
    description: `Built a mobile application to track daily expenses. Added features like category-based expense summaries
    and monthly budgeting.`,
    technologies: "React Native, SQLite",
    image: "https://via.placeholder.com/500x400",
  },
  {
    dates: "2023",
    title: "Real-Time Chat App",
    description: `Designed and developed a real-time chat application with group chat, private messaging, and typing indicators.`,
    technologies: "Socket.io, Node.js, MongoDB",
    image: "https://via.placeholder.com/500x400",
  },
];
