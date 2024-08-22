import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    prempro,
    solidworks,
    carrent,
    jobit,
    tripguide,
    threejs,
    aaveg,
    gdsc,
    lnmiit,
    plinth
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "Robotics Enthusiast",
      icon: backend,
    },
    {
      title: "Video Editor",
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
      name: "Premier Pro",
      icon: prempro,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "solidworks",
      icon: solidworks,
    },
  ];
  
  const experiences = [
    {
      title: "Sponsorship Team",
      company_name: "Plinth LNMIIT",
      icon: plinth,
      iconBg: "#383E56",
      date: "October 2023- Feb 2024",
      points: [
        "sponsorship team secures financial support and partnerships for Plinth, the sci-tech fest.",
        "collaborate with companies and organizations to fund various events and activities.",
        "The team negotiates deals and ensures sponsors receive proper visibility and recognition.",
        "play a crucial role in managing the budget and resources for the fest.",
      ],
    },
    {
      title: "Summer Intern",
      company_name: "LNMIIT",
      icon: lnmiit,
      iconBg: "#E6DEDD",
      date: "June 2024 - July 2024",
      points: [
        "A summer internship focused on estimation and control in robotics was completed",
        "Algorithms for precise robotic motion control were developed during the internship.",
        "The internship involved extensive research on sensor fusion and state estimation.",
        "Collaboration with mentors led to solutions for complex problems in robotic systems.",
      ],
    },
    {
      title: "Creative Core Member",
      company_name: "GDSC, LNMIIT",
      icon: gdsc,
      iconBg: "#383E56",
      date: "Jun 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Core Member",
      company_name: "AAVEG, The Nukkad Mandli",
      icon: aaveg,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Present",
      points: [
        "The street play society raises awareness on social issues through powerful performances.",
        "We perform in various public spaces to engage with a wide and diverse audience.",
        "The team collaborates to create original scripts that resonate with contemporary issues.",
        "Our society emphasizes the importance of using art for social change.",
      ],
    },
    {
      title: "Creative Lead",
      company_name: "Plinth, LNMIIT",
      icon: plinth,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Present",
      points: [
        "As the creative lead for Plinth, I oversee the design and artistic vision of the entire sci-tech fest.",
        "I collaborate with various teams to ensure that the fest's theme is visually represented in all events and materials.",
        "My role involves brainstorming innovative ideas to make the fest's branding and presentations stand out.",
        "I am responsible for guiding the creative team in producing engaging content that captures the essence of the sci-tech fest.",
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
      name: "iPhone-15 Website",
      description:
        "Check out my iPhone 15 Pro showcase site, built with Three.js, GSAP, Tailwind CSS, HTML5, CSS3, JavaScript, Webpack, and Git. Excited about the learning and future projects!.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather App",
      description:
        " Check out my weather app built with React, Mongoose, and Bootstrap for a sleek and responsive design!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongoose",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };