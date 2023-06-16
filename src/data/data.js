
  import javascript from "../images/tech/javascript.png"
  // import html from "../images/tech/html.png"
  import css from "../images/tech/css2.png"
  import reactjs from "../images/tech/reactjs.png"
  import redux from "../images/tech/redux.png"
  import tailwind from "../images/tech/tailwind.png"
  import nodejs from "../images/tech/nodejs.png"
  import mongodb from "../images/tech/mongodb.png"
  import git from "../images/tech/git.png"
  // import figma from "../images/tech/figma.png"
  import threejs from "../images/tech/threejs.svg"
  import brplast from "../images/brplast.png"
  import imageGenerator from "../images/imageGenerator.png"
  import giphyGallery from "../images/giphy-gallery.png"
  
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
    {
      github: "Github",
      link: "https://github.com/rushabh-01/"
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
    },
    {
      title: "React JS Developer",
    },
    {
      title: "Backend Developer",
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
    //   icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "BR Plast",
      description:
        "Plastic manufacturing and trading company which focuses on providing packaging solutions",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: brplast,
      source_code_link: "https://github.com/rushabh-01/BrPlast",
      website_link: "https://brplastm.com/",
    },
    {
      name: "Image Generator",
      description:
        "Image Generator is an open source project inspired by Open AI team that uses deep learning algorithms to generate images from a given input",
      tags: [
        {
          name: "node js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: imageGenerator,
      source_code_link: "https://github.com/rushabh-01/image-generator",
    },
    {
      name: "Gif Gallery",
      description:
        "Gif Gallery is a platform where user can search and save gifs to their computer",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: giphyGallery,
      source_code_link: "https://github.com/rushabh-01/nextjs-giphy-firebase",
      website_link: "https://nextjs-giphy-firebase.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };
  