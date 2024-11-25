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
  pathfinder,
  evogym,
  java,
  threejs,
  ems,
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
    title: "Full-stack Developer",
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "java",
    icon: java,
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
  // {
  //   title: "Software Engineer",
  //   company_name: "100Devs",
  //   icon: starbucks,
  //   iconBg: "#4f46e5",
  //   date: "Mar 2022 - Nov 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating closely with backend developers.",
  //     "Transforming design concepts and wireframes into functional and visually captivating interfaces.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Developer",
    company_name: "Lasting Dynamics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - June 2023",
    points: [
      "Collaborated with designers to create and implement intuitive user interfaces of Ecommerce application using React.",
      "Built RESTful APIs using JavaScript that served data to the Front-End and improved satisfaction of over 500,000 users.",
      "Implemented and deployed APIs of internal tool on AWS reducing cost by 12%.",
      "Conducted thorough testing of frontend and backend code with jest increase the overall source code quality.",
      "Monitoring and fix issues of Ecommerce software with more than 1,000,000 users",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Amalitech",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Lead the design and development of enterprise software solution using microservices and AWS cloud technology.",
      "Worked with product managers to create an asset management system (reduced average maintenance cost from $60/asset to $40/asset).",
      "Optimized software code and ensure it is scalable, maintainable, lead to an increase in process efficiency by 18%.",
      "Perform code reviews in Python to ensure code quality and adherence to coding standards.",
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
    name: "EMS",
    description:
      "The Employee Management System (EMS) streamlines employee administration with features like information management, attendance tracking, payroll, task assignment, and progress tracking for efficient organizational management.",
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
    image: ems,
    source_code_link: "https://github.com/aime78/ems",
  },
  {
    name: "Path Finder visualizer",
    description:
      "A Pathfinder Visualizer interactive tool that demonstrates pathfinding algorithms like Dijkstra's, A*, Breath first search, and Depth first search. It lets users customize start, end, and obstacle points to explore efficient pathfinding solutions dynamically.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      // {
      //   name: "lens protocol",
      //   color: "pink-text-gradient",
      // },
    ],
    image: pathfinder,
    source_code_link:
      "https://github.com/aime78/pathfinder-visualizer",
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
];

export { services, technologies, experiences, testimonials, projects };
