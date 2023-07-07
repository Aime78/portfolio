import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  evogym,
  decentraland,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "100Devs",
    icon: starbucks,
    iconBg: "#4f46e5",
    date: "Mar 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating closely with backend developers.",
      "Transforming design concepts and wireframes into functional and visually captivating interfaces.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Lasting Dynamics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Developing and implementing user interface and experience for web and mobile applications with React and React Native, using industry best practices.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Testing and debugging to ensure seamless compatibility across various browsers and devices.",
      "Optimizing frontend components for optimal performance and responsiveness.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Amalitech",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Collaborate with designers to create and implement visually appealing user interfaces using React, Next, and Tailwind.",
      "Work with server-side technologies such as Node, Python to build the logic and functionality behind web applications, includes handling data storage and retrieval.",
      "Implement APIs for communication between the frontend and backend, and integrating with databases like PostgreSQL, MongoDB.",
      "Ensure the security and performance of the entire application by implementing authentication and authorization mechanisms.",
      "Conducting thorough testing, and optimizing code and database queries for efficiency.",
      "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/aime78/car-rental",
  },
  {
    name: "Gym website",
    description:
      "Web application that enables users to become members of the gym, manage their fitness and health, view estimated training program available.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/aime78/gym-website",
  },
  {
    name: "Decentralized social media application",
    description:
      "A social media platform that allows users to connect with other users, and follow other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra ui",
        color: "green-text-gradient",
      },
      {
        name: "lens protocol",
        color: "pink-text-gradient",
      },
    ],
    image: decentraland,
    source_code_link:
      "https://github.com/aime78/decentralized-social-media-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
