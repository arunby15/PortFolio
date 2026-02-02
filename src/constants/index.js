
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import wanderlustImg from "../assets/wanderlust.webp";
// import razorpayImg from "../assets/razorpayclone.webp";
// import shoppingCartImg from "../assets/shoppingcart.webp";
import talksphereImg from "../assets/talksphereImg.webp";
import evidenceIntegrityImg from "../assets/evidenceIntegrityImg.webp";

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
    title: "Full-Stack Developer",
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
    title: "Java Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
   {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "practice",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2024 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arun proved me wrong.",
    name: "Sharan",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arun does.",
    name: "Abishek",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Arun optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Darshan",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "WanderLust",
    description:
      "WanderLust is a web-based travel platform that allows users to discover, plan, and share travel destinations around the world. It includes features such as destination search, itinerary planning, user reviews, photo sharing, and travel blogs. The goal is to build a modern, user-friendly application that serves as a one-stop solution for travel inspiration and community sharing.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: wanderlustImg,
    source_code_link: "https://github.com/arunby15/WanderLust",
  },
  {
    name: "TalkSphere",
    description:
    "TalkSphere is a real-time chat application that enables users to communicate instantly with seamless message delivery using WebSocket technology. It provides secure authentication, active user status tracking, and message persistence with MongoDB. Built with Node.js, Express.js, and Socket.io, it offers a smooth and responsive chatting experience with a modern UI.",
    tags: [
    {
      name: "JavaScript",
      color: "blue-text-gradient",
    },
    {
      name: "express",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "socket.io",
      color: "orange-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
  ],
    image: talksphereImg,
  source_code_link: "https://github.com/arunby15/TalkSphere",
  },
  {
    name: "Evidence Integrity",
    description:
    "Evidence Integrity is a blockchain-based web application that ensures the security, transparency, and authenticity of digital evidence. It allows an admin to log in via MetaMask, upload and verify evidence files, and store their hashes securely on the Ethereum Sepolia testnet. The system integrates smart contracts deployed through Remix IDE, MongoDB for file metadata storage, and Express.js for backend operations.",
    tags: [
    {
      name: "JavaScript",
      color: "blue-text-gradient",
    },
    {
      name: "express",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "ethereum",
      color: "yellow-text-gradient",
    },
    {
      name: "blockchain",
      color: "purple-text-gradient",
    },
  ],
    image: evidenceIntegrityImg,
  source_code_link: "https://github.com/arunby15/Evidence-integrity-Blockchain",
  },
];

export { services, technologies, experiences, testimonials, projects };
