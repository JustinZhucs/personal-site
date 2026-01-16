import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "about", name: "about" },
  { id: "projects", name: "projects" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node.js, Tailwind, Javascript/TypeScript, PHP, SQL, Java, C/C++, Python, C#, Bash, Git, Racket,. ";

export const PROJECTS = [
  {
    id: 1,
    title: "Photo Gallery",
    description:
      "A secure, responsive image gallery using Next.js, Tailwind CSS, Clerk, UploadThing, and Drizzle ORM.",
    imgSrc: project4,
    link: "https://web-gallery-jcs.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "A responsive and interactive portfolio website using React.js and Tailwind CSS.",
    imgSrc: project1,
    link: "https://personal-site-justin.vercel.app/",
  },
  {
    id: 3,
    title: "Museum Guide Website",
    description:
      "An interactive museum guide website featuring an intuitive global-map interface, artifact magnification tools.",
    imgSrc: project2,
    link: "https://justinzhucs.github.io/Museum-Web-Project/",
  },
  {
    id: 4,
    title: "Sorcery",
    description:
      "A collectible card game in C++ with turn-based mechanics.",
    imgSrc: project3,
  },
  // {
  //   id: 5,
  //   title: "Project 5",
  //   description: "A task management tool to organize and prioritize work.",
  //   imgSrc: project5,
  //   link: "https://example.com/task-management-tool",
  // },
  // {
  //   id: 6,
  //   title: "Project 6",
  //   description:
  //     "An online learning platform offering various courses and resources.",
  //   imgSrc: project6,
  //   link: "https://example.com/online-learning-platform",
  // },
  // {
  //   id: 7,
  //   title: "Project 7",
  //   description: "A mobile application to track fitness activities and goals.",
  //   imgSrc: project7,
  //   link: "https://example.com/fitness-tracker",
  // },
  // {
  //   id: 8,
  //   title: "Project 8",
  //   description: "An app for browsing and saving various cooking recipes.",
  //   imgSrc: project8,
  //   link: "https://example.com/recipe-app",
  // },
  // {
  //   id: 9,
  //   title: "Project 9",
  //   description:
  //     "A weather dashboard providing current weather data and forecasts.",
  //   imgSrc: project9,
  //   link: "https://example.com/weather-dashboard",
  // },
];

export const ABOUT =
  // "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

  // "As a passionate and driven Computer Science student at the University of Waterloo with a strong foundation in software development and a keen interest in exploring new technologies. With experience in full-stack development, I’ve worked with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends. I enjoy problem-solving and am always eager to learn and grow. Outside of coding, I’m an avid learner who thrives on tackling challenges and contributing to impactful projects, always striving to push the boundaries of my skill set.";
  "A passionate and driven Computer Science student at the University of Waterloo who builds full-stack products with TypeScript, React/Next.js, and PostgreSQL. I care about speed, reliability, and shipping work that's easy to maintain. Lately I've been into AI tooling, prompt design, and making apps feel polished and responsive. I am passionate about continuous learning and keeping up-to-date with the latest industry trends. Outside of coding, I'm an avid learner who thrives on tackling challenges and contributing to impactful projects, always striving to push the boundaries of my skill set.";
export const EXPERIENCES = [
  {
    company: "Beyz AI",
    role: "Full Stack Developer",
    year: "09/2025 - 12/2025",
    description:
      // "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
      "Contributed to Beyz AI's GPT-based real-time interview assistant by optimizing background data compression through advanced prompt engineering, achieving a 20% reduction in token costs. Developed a dynamic prompt versioning system with TypeScript, PostgreSQL, and Drizzle ORM, ensuring seamless updates and enhanced user experiences.",
  },
  {
    company: "YOYI TECH",
    role: "Software Engineer",
    year: "05/2025 - 08/2025",
    description:
      // "Design and development of the Supplier Management module (both frontend and backend) for the Procumbent & Billing Management System.",
      "As a Software Engineer at YOYI TECH, I contributed to the design and development of the company’s Procurement & Billing Management System. I was responsible for building and enhancing the Supplier Management module, implementing key features using React.js, Java/Spring Boot, and PostgreSQL. Additionally, I collaborated with cross-functional teams to model and manage user and supplier data, ensuring a seamless user experience across web and mobile platforms, while integrating advanced reporting and payment gateways to streamline operations.",
  },
  {
    company: "University of Waterloo",
    role: "Presentation Technologies - Support Technician",
    year: "09/2024 - 12/2024",
    description:
      // "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
      "As a Support Technician at UW Audio and Visual Center, I play a key role in delivering seamless technical support for presentation technologies at the University of Waterloo. I ensure the smooth execution of events by expertly troubleshooting and setting up audio-visual equipment, including projectors and microphones. Additionally, I engage in testing and optimizing 3D printing tools while collaborating with the IT team to address complex technical issues and maintain cutting-edge equipment across campus.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://www.instagram.com/_justin.zhu_/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/JustinZhucs",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/chenshuo-zhu/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "c23zhu@uwaterloo.ca",
  phone: "778-917-6913",
};
