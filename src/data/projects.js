// images 
import html from "../assets/images/html.png";
import css from "../assets/images/css.jpeg";
import tailwindcss from "../assets/images/tailwaind.jpeg";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import nextjs from "../assets/images/nextjs.png";
import nodejs from "../assets/images/nodejs.png";
import express from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.png";
import sql from "../assets/images/mysql.png";
import postgres from "../assets/images/postgress.png";
import docker from "../assets/images/docker.png";
import github from "../assets/images/github.png";
import vps from "../assets/images/vps.jpeg";


// thumbnail images 
import lee1 from "../assets/projects/leehome1.png"
import pharmaclosing1 from "../assets/projects/pharmacloasing1.png"
import mlee1 from "../assets/projects/mlle1.png"
import arcoders1 from "../assets/projects/arcoders.png"
import studym1 from "../assets/projects/studymaterial1.png"
import admind1 from "../assets/projects/admndashboard4.png"
import lightstore1 from "../assets/projects/lightwebsite.png"
import printocraft3d1 from "../assets/projects/3d-printocraft.png"
import oldelectronicshome1 from "../assets/projects/oldelectronicshome1.png"

// other images 
import lee2 from "../assets/projects/leehome2.png"
import lee3 from "../assets/projects/leehome3.png"
import pharmaclosing2 from "../assets/projects/pclosing2.png"
import pharmaclosing3 from "../assets/projects/pclosing3.png"
import pharmaclosing4 from "../assets/projects/pclosing4.png"
import mlee2 from "../assets/projects/mlle2.png"
import mlee3 from "../assets/projects/mlle3.png"
import mlee4 from "../assets/projects/mlle4.png"
import mlee5 from "../assets/projects/mlle5.png"
import studym2 from "../assets/projects/studymatrtial2.png"
import studym3 from "../assets/projects/studymaterrial3.png"
import studym4 from "../assets/projects/studymaterial4.png"
import admind2 from "../assets/projects/admindashboard1.png"
import admind3 from "../assets/projects/admindashboard2.png"
import admind4 from "../assets/projects/admindashboard5.png"
import oldelectronicshome2 from "../assets/projects/oldeelectronicshome2.png"
import oldelectronicshome3 from "../assets/projects/oldelectronicshome3.png"





export const projects = [
  {
    id: 1,
    title: "Lee Home Packers and Movers",
    slug: "transportation",
    category: "Web Development",

    // Main Thumbnail
    thumbnail:lee1,

    // Multiple Project Images
    images: [
     lee1,lee2,lee3
    ],

    // Live Links
    liveLink: "https://leehomepackers.com",
    githubLink:"Private",

    // Short Description
    shortDescription:
      "Modern MERN stack e-commerce platform with admin, seller, and customer management system.",

    // What We Did
    whatWeDid: [
      "Designed complete frontend UI and backend architecture",
      "Integrated authentication and role-based access",
      "Built admin and seller dashboard",
      "Implemented product and order management",
      "Optimized APIs and database queries",
    ],

    // Detail Panels
    panels: [
      "Admin Dashboard",
      "User Panel",
      "Seller Dashboard",
      "Analytics Dashboard",
      "Order Management",
    ],

    // Project Description Points
    description: [
      "Developed a scalable full stack e-commerce application.",
      "Implemented secure authentication using JWT.",
      "Integrated product filtering and search functionality.",
      "Created responsive UI for mobile and desktop.",
      "Added real-time order and inventory management.",
    ],

    // Collaborators
    collaborators: [
      {
        name: "Sanjeev Kumar",
        github: "https://github.com/sanjeevkumar",
      },

      {
        name: "Rahul Sharma",
        github: "https://github.com/rahulsharma",
      },
    ],

    // Tech Stack
    techStack: [
      {
        name: "React.js",
        image: "/images/tech/react.png",
      },

      {
        name: "Node.js",
        image: "/images/tech/nodejs.png",
      },

      {
        name: "Express.js",
        image: "/images/tech/express.png",
      },

      {
        name: "MongoDB",
        image: "/images/tech/mongodb.png",
      },

      {
        name: "Tailwind CSS",
        image: "/images/tech/tailwind.png",
      },
    ],
  },

  {
    id: 2,

    title: "Business CRM Software",
    slug: "business-crm-software",
    category: "Custom Software",

    thumbnail: "/images/projects/crm/main.png",

    images: [
      "/images/projects/crm/dashboard.png",
      "/images/projects/crm/analytics.png",
      "/images/projects/crm/employees.png",
    ],

    liveLink: "https://crmwebsite.com",

    githubLink: "https://github.com/username/crm-project",

    shortDescription:
      "Advanced CRM software for managing employees, customers, and business operations.",

    whatWeDid: [
      "Built complete CRM system",
      "Created employee management module",
      "Developed analytics dashboard",
      "Integrated reporting system",
    ],

    panels: [
      "Admin Panel",
      "Employee Dashboard",
      "Customer Management",
      "Reports Section",
    ],

    description: [
      "Created business automation software for operational management.",
      "Added analytics and reporting dashboard.",
      "Developed secure employee authentication system.",
      "Implemented responsive admin dashboard UI.",
    ],

    collaborators: [
      {
        name: "Sanjeev Kumar",
        github: "https://github.com/sanjeevkumar",
      },
    ],

    techStack: [
      {
        name: "Next.js",
        image: "/images/tech/nextjs.png",
      },

      {
        name: "PostgreSQL",
        image: "/images/tech/postgresql.png",
      },

      {
        name: "Docker",
        image: "/images/tech/docker.png",
      },

      {
        name: "Tailwind CSS",
        image: "/images/tech/tailwind.png",
      },
    ],
  },








];