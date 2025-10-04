import { Brush, Monitor, Server, Database, Github, Linkedin, Twitter, GitMerge, Wind, Bot } from 'lucide-react';

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
    icon: '/napenda.png',
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
    icon: '/Ranmcotech Distributors.jpg',
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
    icon: "/HTML5.png", // Placeholder, lucide doesn't have a specific HTML5 icon
  },
  {
    name: "CSS 3",
    icon: "/CSS3.png", // Placeholder, lucide doesn't have a specific CSS3 icon
  },
  {
    name: "JavaScript",
    icon: "/JavaScript.png", // Placeholder
  },
  {
    name: "TypeScript",
    icon: "/TypeScript.png", // Placeholder
  },
  {
    name: "React JS",
    icon: "/React.png", // Placeholder for React logo
  },
  {
    name: "Three JS",
    icon: "/Three.js.png", // Placeholder
  },
  {
    name: "Tailwind CSS",
    icon: "/Tailwind CSS.png", // Placeholder
  },
  {
    name: "Node JS",
    icon: "/Node.js.png",
  },
  {
    name: "MongoDB",
    icon: "/MongoDB.png", 
  },
  {
    name: "git",
    icon: "/Git.png",
  },
  {
    name: "figma",
    icon: "/Figma.png",
  },
  {
    name: "Next JS",
    icon: "/Nextjs.png",
  },
];


export const projects = [
  {
    name: "Brain Burst",
    description:
      "An educational technology tool designed to support learners. This project showcases skills in building practical applications that solve real-world learning challenges.Involves insite games to avoid boredom.Build on a code Kesha with my team mates.",
    tags: [
      { name: "edtech" },
      { name: "Nextjs" },
      { name: "Tailwindcss" },
    ],
    image: "/projects/Brainburst.PNG",
    source_code_link: "https://github.com/charlesricha",
    live_demo_link: "https://github.com/charlesricha",
  },
  {
    name: "Kuza Kenya",
    description:
      "A modern, responsive website built by nextjs. The website allow locals to take pictures of damages(eg.potholes,rubbish etc) in their location share it so that the leaders can work on them. Bridging the gap between leaders and citizens",
    tags: [
      { name: "nextjs" },
      { name: "frontend" },
      { name: "tailwind" },
      { name: "AI Bot" },
    ],
    image: "/projects/KuzaKenya.PNG",
    source_code_link: "https://github.com/charlesricha/Kuza-Kenya",
    live_demo_link: "https://kuza-kenya-xsmw.vercel.app/",
  },
  {
    name: "Arduino UNO Bluetooth Robot Car",
    description:
      "A hands-on hardware project combining electronics and programming. This robot car, controlled via Bluetooth, demonstrates skills in IoT, robotics, and embedded systems with Arduino.",
    tags: [
      { name: "arduino" },
      { name: "IoT" },
      { name: "robotics" },
    ],
    image: "/projects/Arduino uno car.jpg",
    source_code_link: "https://github.com/charlesricha",
    live_demo_link: "https://github.com/charlesricha",
  },
  
  {
    name: "CryptoBot",
    description:
      "A bot that informs you about different crypto coins trends. Project built for PLP assignment",
    tags: [
      { name: "Django" },
      { name: "MySql" },
      { name: "AI and ML" },
    ],
    image: "/projects/CryptoBot.PNG",
    source_code_link: "https://github.com/charlesricha/CryptoBot",
    live_demo_link: "https://cryptobot-3.onrender.com/",
  },
   {
    name: "VR Hub",
    description:
      "A simulation of a web ecommerce site that deals with selling Virtual Reality Products.",
    tags: [
      { name: "Tailwindcss" },
      { name: "React Js" },
      { name: "e-commerce" },
    ],
    image: "projects/VR hub.PNG",
    source_code_link: "https://github.com/charlesricha/VR-Hub-React",
    live_demo_link: "https://vr-hub-one.vercel.app/",
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
    technologies: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'HTML5', 'CSS3', 'Three.js']
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
  {
    name: 'IoT & Robotics',
    icon: Bot,
    technologies: ['Arduino', 'Raspberry Pi', 'Sensors', 'Actuators', 'Embedded Systems']
  },
   {
    name: 'Network Engineering',
    icon: Wind,
    technologies: ['Fiber splicing','Cable management','Network troubleshooting','Customer support','Network configuration']
  },
];
