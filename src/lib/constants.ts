import { Code, Brush, Monitor, Server, Database, Github, Linkedin, Twitter, GitMerge, Wind, Bot } from 'lucide-react';

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
    id: "tech",
    title: "Technologies",
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
    title: "Graphic Designer",
    company_name: "Napenda Creatives",
    icon: 'https://placehold.co/40x40.png',
    date: "Jan 2025 - Present",
    points: [
      "Creating visually appealing graphics for various media.",
      "Collaborating with clients to understand their design needs.",
      "Ensuring brand consistency across all visual assets.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Ranmcotech fiber internet",
    icon: 'https://placehold.co/40x40.png',
    date: "May 2025 - Sep 2025",
    points: [
      "Worked with others to create an ISP billing system.",
      "Designed the UI/UX interface of the company website.",
    ],
  },
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

export const technologies = [
  {
    name: "HTML 5",
    icon: Code, // Placeholder, lucide doesn't have a specific HTML5 icon
  },
  {
    name: "CSS 3",
    icon: Code, // Placeholder, lucide doesn't have a specific CSS3 icon
  },
  {
    name: "JavaScript",
    icon: Code, // Placeholder
  },
  {
    name: "TypeScript",
    icon: Code, // Placeholder
  },
  {
    name: "React JS",
    icon: Code, // Placeholder for React logo
  },
  {
    name: "Redux Toolkit",
    icon: Code, // Placeholder
  },
  {
    name: "Tailwind CSS",
    icon: Wind,
  },
  {
    name: "Node JS",
    icon: Server,
  },
  {
    name: "MongoDB",
    icon: Database,
  },
  {
    name: "git",
    icon: GitMerge,
  },
  {
    name: "figma",
    icon: Brush,
  },
  {
    name: "Genkit",
    icon: Bot,
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
  {
    name: "Social Media App",
    description:
      "A social networking application that allows users to connect with friends, share updates, and join communities based on their interests. Includes real-time chat functionality.",
    tags: [
      { name: "react native" },
      { name: "firebase" },
      { name: "redux" },
    ],
    image: "https://placehold.co/360x230.png",
    source_code_link: "https://github.com/",
    live_demo_link: "https://github.com/",
  },
  {
    name: "Fitness Tracking App",
    description:
      "An application for tracking workouts, setting fitness goals, and monitoring progress. Integrates with wearable devices to sync activity data.",
    tags: [
      { name: "vue" },
      { name: "node.js" },
      { name: "postgresql" },
    ],
    image: "https://placehold.co/360x230.png",
    source_code_link: "https://github.com/",
    live_demo_link: "https://github.com/",
  },
  {
    name: "Online Learning Platform",
    description:
      "An e-learning platform where instructors can create and sell courses, and students can enroll to learn new skills. Includes video streaming and quiz functionality.",
    tags: [
      { name: "django" },
      { name: "react" },
      { name: "aws s3" },
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
