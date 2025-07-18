import { Code, Brush, Monitor, Server, Database, Github, Linkedin, Twitter } from 'lucide-react';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starship Inc.",
    icon: 'https://placehold.co/40x40.png',
    date: "March 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Cosmo Solutions",
    icon: 'https://placehold.co/40x40.png',
    date: "Jan 2023 - Present",
    points: [
      "Designed and developed scalable full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Architected and implemented RESTful APIs for seamless data communication between the front-end and back-end.",
      "Managed database schemas and performed data migrations with MongoDB.",
      "Deployed applications on cloud platforms like AWS and set up CI/CD pipelines.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Powered E-commerce Platform",
    description:
      "A web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react" },
      { name: "mongodb" },
      { name: "tailwind" },
    ],
    image: "https://placehold.co/360x230.png",
    source_code_link: "https://github.com/",
    live_demo_link: "https://github.com/",
  },
  {
    name: "Data Visualization Dashboard",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated travel recommendations based on user preferences.",
    tags: [
      { name: "nextjs" },
      { name: "supabase" },
      { name: "css" },
    ],
    image: "https://placehold.co/360x230.png",
    source_code_link: "https://github.com/",
    live_demo_link: "https://github.com/",
  },
  {
    name: "Project Management Tool",
    description:
      "A clone of the popular Trello board, allowing users to create boards, lists, and cards to organize their projects and tasks. Features drag-and-drop functionality.",
    tags: [
      { name: "react" },
      { name: "firebase" },
      { name: "scss" },
    ],
    image: "https://placehold.co/360x230.png",
    source_code_link: "https://github.com/",
    live_demo_link: "https://github.com/",
  },
];

export const skills = [
  {
    name: 'Frontend',
    icon: Monitor,
    technologies: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    name: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL']
  },
  {
    name: 'Databases',
    icon: Database,
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
  },
  {
    name: 'UI/UX Design',
    icon: Brush,
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping', 'Wireframing']
  },
];
