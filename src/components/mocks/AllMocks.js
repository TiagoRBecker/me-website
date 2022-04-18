import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";
export const techs = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    Title: "HTML5",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Title: "Css3",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Title: "Javascript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Title: "React-Js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Title: "Next-Js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Title: "Tailwind",
  },
  {
    url: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
    Title: "Styled-Components",
  },
];
export const Backend = [ 
  {
    url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    Title:"node-js"
  },
  {
    url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    Title:"Express"
  },
  {
    url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    Title:"MongoDb"
  }
];



export const Skills = [
  {
    id: 1,
    icon: <FaHtml5 />,
    skills: "HTML5",
    porc: "97%",
  },
  {
    id: 2,
    icon: <FaCss3 />,
    skills: "CSS",
    porc: "90%",
  },
  {
    id: 3,
    icon: <FaJsSquare />,
    skills: "JAVASCRIPT",
    porc: "80%",
  },
  {
    id: 4,
    icon: <FaReact />,
    skills: "React-Js/Next-js",
    porc: "85%",
  },
  {
    id: 5,
    icon: <SiStyledcomponents />,
    skills: "Styled-Components",
    porc: "87%",
  },
  {
    id: 6,
    icon: <SiTailwindcss />,
    skills: "Tailwind-Css",
    porc: "70%",
  },
  {
    id: 7,
    icon: <FaNodeJs />,
    skills: "Node-Js",
    porc: "50%",
  },
];

export const Projects = [
  {
    id: 1,
    url: "https://res.cloudinary.com/tiagobecker/image/upload/c_scale,h_904,w_1607/v1649427295/portfolio/ct_veihfu.png",
    slug: "Clima Tempo",
    category:"app",
    gb:"https://github.com/TiagoRBecker/Api-Tempo",
    vercel:"https://climatempo.vercel.app"
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/tiagobecker/image/upload/v1649428330/portfolio/w1_p84d9b.png",
    slug: "Web Site",
    category:"website",
    gb:"https://github.com/TiagoRBecker/WebSite",
    vercel:"https://web-site-wine.vercel.app"
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/tiagobecker/image/upload/v1649427296/portfolio/pz_dhkyig.png",
    slug: "Projeto Delivery Pizzaria",
    category:"delivery",
    gb:"https://github.com/TiagoRBecker/delivery",
    vercel:"https://delivery-six-livid.vercel.app"
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/tiagobecker/image/upload/v1649426897/portfolio/fb_ys63qn.png",
    slug: "Flappy Bird",
    category:"games",
    gb:"https://github.com/TiagoRBecker/Flappy-Bird",
    vercel:"https://flappy-bird-delta.vercel.app"
  },
];
