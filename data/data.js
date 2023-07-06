import { FaPhp, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJquery, SiMagento, SiTailwindcss, SiMysql } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5, AiFillGitlab } from "react-icons/ai";
import boardroom from "../public/images/logo-02.png";
import lois from "../public/images/logo-03.png";
import kandaka from "../public/images/logo-04.png";
import lillies from "../public/images/logo-05.png";
import ofs from "../public/images/logo-01.png";
import oseasons from "../public/images/logo-06.png";
import poonji from "../public/images/poonji.jpeg";
import lamoda from "../public/images/lamoda.jpeg";
import rangenine from "../public/images/rangenine.jpg";
import reactbeginnerportfolio from "../public/images/reactbeginnerportfolio.jpeg";
import reactblog from "../public/images/reactblog.jpeg";
import nextportfolio from "../public/images/nextportfolio.jpeg";

export const portfoliodata = [
  {
    id: 1,
    title: "Findusonweb",
    description:
      "Find Us On Web is an unique corporate and business services provider, offering a one stop solution for all the key business growth needs for businesses in our community.",
    imgUrl: boardroom,
    projectimage: boardroom,
    previewurl: "",
    previewurlname: "",
    projecttype: "Website",
    framework: "php",
    languages: "",
  },
  {
    id: 2,
    title: "Business Connector Local",
    description:
      "Businesses Connectors Local or BCL is the world's largest online network for local businesses",
    imgUrl: lois,
    projectimage: lois,
    previewurl: "https://www.businessconnectorslocal.com/",
    previewurlname: "",
    projecttype: "Website",
    framework: "php",
    languages: "",
  },
  {
    id: 3,
    title: "Btowntalk",
    description:
      "Successful business owners and young entrepreneurs will share their ideas, thoughts, and solutions throughout this series. .",
    imgUrl: kandaka,
    projectimage: kandaka,
    previewurl: "",
    previewurlname: "",
    projecttype: "Website",
    framework: "php",
    languages: "",
  },
  {
    id: 4,
    title: "LMS",
    description: "Learning managements systems platform ",
    imgUrl: lillies,
    projectimage: lillies,
    previewurl: "https://lilliesonline.co.uk/",
    // previewurlname: "lilliesonline.co.uk",
    projecttype: "Website",
    framework: "Php",
    languages: "",
  },
  {
    id: 5,
    title: "B2B Growth Expo",
    description:
      "Get in touch with potential clients, business partners, and like-minded business owners at your local business-to-business growth event.",
    imgUrl: ofs,
    projectimage: ofs,
    previewurl: "https://b2bgrowthexpo.org/",
    // previewurlname: "officefurnituresolutions.co.uk",
    projecttype: "Website",
    framework: "Php",
    languages: "",
  },
  {
    id: 6,
    title: "P2P Board",
    description:
      "Oseasons is an Ecommerce website on Magento which is mainly focused on furniture products ",
    imgUrl: oseasons,
    projectimage: oseasons,
    previewurl: "https://p2pboard.org/",
    previewurlname: "oseasons.com",
    projecttype: "Website",
    framework: "php",
    languages: "",
  },

  {
    id: 10,
    title: "React Blog",
    description: "Single Page blog created in react ",
    imgUrl: reactblog,
    projectimage: reactblog,
    previewurl: "https://reactblogpage.vercel.app/",
    previewurlname: "reactblogpage.vercel.app",
    projecttype: "Website",
    framework: "React",
    languages: "",
  },
  {
    id: 11,
    title: "React Beginner Portfolio",
    description: "Single Page sample portfolio created in react ",
    imgUrl: reactbeginnerportfolio,
    projectimage: reactbeginnerportfolio,
    previewurl: "https://reactbeginnerportfolio.vercel.app/",
    previewurlname: "reactbeginnerportfolio.vercel.app",
    projecttype: "Website",
    framework: "React",
    languages: "",
  },
  // {
  //   id: 12,
  //   title: 'React Simple Shopping Website',
  //   description: 'Single Page sample shopping created in react ',
  //   imgUrl: project6,
  //   projectimage: project6,
  //   previewurl: '',
  //   previewurlname: '',
  //   projecttype: 'Website',
  //   framework: 'React',
  //   languages: '',
  // },
  {
    id: 12,
    title: "Next JS Portfolio",
    description: "Sample portfolio created in nextjs and tailwind ",
    imgUrl: nextportfolio,
    projectimage: nextportfolio,
    previewurl: "https://priyatiwari.vercel.app/",
    previewurlname: "priyatiwari.vercel.app/",
    projecttype: "Website",
    framework: "React",
    languages: "",
  },
];

export const aboutdata = [
  {
    id: 1,
    totalnumber: 2,
    data: "years of ",
    data1: "experience",
  },
  {
    id: 2,
    totalnumber: 10,
    data: "completed ",
    data1: "projects",
  },
];

export const personaldata = [
  {
    first_name: "Priya",
    last_name: "Tiwari",
    age: "25 years",
    nationality: "Indian",
    freelance: "Available",
  },
];

export const personaldata1 = [
  {
    address: "Mumbai, Maharashtra, India",
    phone: "+91 6392916571",
    skype: "priya.tiwari",
    email: "tiwaripriya051@gmail.com",
    languages: "English, Hindi",
  },
];

export const experiencedata = [
  {
    id: 1,
    year: "Jul 2019 - Present",
    title: "Associate Software Engineer",
    subtitle: "Geecon Systems Private Limited",
    description:
      "Started as a Trainee Software Engineer and gradually promoted to Associate Software Engineer have aquired an experience of 2 years. Currently working on Phpmydirectory and progessing with the current language of React and Next JS.",
  },
];

export const educationdata = [
  {
    id: 1,
    year: "2021",
    title: "Master of science- Information Technology",
    subtitle: "University of Mumbai",
  },
  {
    id: 2,
    year: "2018",
    title: "Bachelor of Science- Computer Science",
    subtitle: "University of Mumbai",
  },
];

export const skillsdata = [
  {
    id: 1,
    title: "HTML",
    logo: <AiFillHtml5 size={60} />,
  },
  {
    id: 8,
    title: "CSS",
    logo: <IoLogoCss3 size={60} />,
  },
  {
    id: 2,
    title: "JavaScript",
    logo: <TbBrandJavascript size={60} />,
  },
  {
    id: 3,
    title: "jQuery",
    logo: <SiJquery size={60} />,
  },
  {
    id: 3,
    title: "MySQL",
    logo: <SiMysql size={60} />,
  },
  {
    id: 6,
    title: "PHP",
    logo: <FaPhp size={60} />,
  },
  // {
  //   id: 7,
  //   title: "Magento",
  //   logo: <SiMagento size={60} />,
  // },
  {
    id: 4,
    title: "React JS",
    logo: <FaReact size={60} />,
  },
  {
    id: 5,
    title: "Next JS",
    logo: <TbBrandNextjs size={60} />,
  },
  {
    id: 9,
    title: "Tailwind CSS",
    logo: <SiTailwindcss size={60} />,
  },
  {
    id: 9,
    title: "Version Control: Git",
    logo: <AiFillGitlab size={60} />,
  },
];
