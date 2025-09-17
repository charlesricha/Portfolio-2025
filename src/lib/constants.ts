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
    name: "Smart Learning Aid",
    description:
      "An educational technology tool designed to support learners. This project showcases skills in building practical applications that solve real-world learning challenges.",
    tags: [
      { name: "edtech" },
      { name: "react" },
      { name: "nodejs" },
    ],
    image: "https://picsum.photos/seed/smart-learning/360/230",
    source_code_link: "https://github.com/charlesricha",
    live_demo_link: "https://github.com/charlesricha",
  },
  {
    name: "XORA React Landing Page",
    description:
      "A modern, responsive landing page built with React. This project highlights strong front-end development skills, including UI/UX design, layout, and component-based architecture.",
    tags: [
      { name: "react" },
      { name: "frontend" },
      { name: "tailwind" },
    ],
    image: "https://picsum.photos/seed/xora-react/360/230",
    source_code_link: "https://github.com/charlesricha",
    live_demo_link: "https://github.com/charlesricha",
  },
  {
    name: "Arduino UNO Bluetooth Robot Car",
    description:
      "A hands-on hardware project combining electronics and programming. This robot car, controlled via Bluetooth, demonstrates skills in IoT, robotics, and embedded systems with Arduino.",
    tags: [
      { name: "arduino" },
      { name: "iot" },
      { name: "robotics" },
    ],
    image: "https://picsum.photos/seed/robot-car/360/230",
    source_code_link: "https://github.com/charlesricha",
    live_demo_link: "https://github.com/charlesricha",
  },
  {
    name: "Traffic Light Arduino Simulation",
    description:
      "A simulation of a traffic light system using Arduino. This project shows an understanding of hardware timing, logic, and system modeling, mirroring real-world traffic control behavior.",
    tags: [
      { name: "arduino" },
      { name: "simulation" },
      { name: "electronics" },
    ],
    image: "https://picsum.photos/seed/traffic-light/360/230",
    source_code_link: "https://github.com/charlesricha",
    live_demo_link: "https://github.com/charlesricha",
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
