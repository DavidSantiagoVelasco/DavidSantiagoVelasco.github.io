import livestock from "../assets/img-projects/livestock.jpeg";
import foodHub from "../assets/img-projects/foodHub.jpeg";
import reactChess from "../assets/img-projects/reactChess.jpeg";
import apu from "../assets/img-projects/apu.jpeg";
import usersMessaging from "../assets/img-projects/usersMessaging.jpeg";
import buenaVida from "../assets/img-projects/buenaVida.jpeg";
import frugalApp from "../assets/img-projects/frugalApp.jpg"

export const proyectos = [
  {
    titulo: "React Chess",
    descripcion: "A chess game made with React.",
    imagen: reactChess.src,
    tecnologias: ["React", "Javascript"],
    codigo: "https://github.com/DavidSantiagoVelasco/ReactChess",
  },
  {
    titulo: "Foodhub",
    descripcion:
      "Built a cross-platform mobile app with Flutter for restaurant promotions and product offers, supported by a scalable backend using Node.js, Express.js, and TypeScript. Used MongoDB for data management and Firebase for real-time push notifications.",
    imagen: foodHub.src,
    tecnologias: ["Flutter", "Node.js", "Express", "MongoDB", "Typescript"],
    codigo: "https://github.com/DavidSantiagoVelasco/Integrador_III",
  },
  {
    titulo: "BUENA VIDA ecommerce",
    descripcion:
      "Engineered a full-stack e-commerce platform using MVC architecture, with Node.js and Express.js powering the backend. Combined MongoDB and MySQL to support product management, user accounts, carts, favorites, and order processing.",
    imagen: buenaVida.src,
    tecnologias: ["Typescript", "Node.js", "Express", "MongoDB", "MySQL"],
    codigo: "https://github.com/DavidSantiagoVelasco/Web-E-Commerce/",
  },
  {
    titulo: "APU CRM/ERP",
    descripcion:
      "Developed an integrated CRM/ERP system focused on inventory and business process management, enabling product registration, purchasing workflows and user creation. Built with HTML, CSS, JavaScript, PHP, and MySQL, following Scrum Alliance-based agile practices.",
    imagen: apu.src,
    tecnologias: ["PHP", "Javascript", "MySQL"],
    codigo: "https://github.com/DavidSantiagoVelasco/Integrador1",
  },
  {
    titulo: "Livestock inventory",
    descripcion:
      "Built a livestock inventory management system using JavaFX with MySQL integration, designed to manage animal records, purchase and sales operations, pricing, weight tracking, veterinary activities, supplies, and reminders.",
    imagen: livestock.src,
    tecnologias: ["JavaFX", "MySQL"],
    codigo: "https://github.com/DavidSantiagoVelasco/Livestock_inventory",
  },
  {
    titulo: "Users messaging",
    descripcion:
      "Developed a cross-platform messaging app using Flutter, with real-time device-to-device communication and Firebase push notifications for instant message delivery.",
    imagen: usersMessaging.src,
    tecnologias: [
      "Flutter",
      "Node.js",
      "Express",
      "MongoDB",
      "Typescript",
      "Firebase",
    ],
    codigo:
      "https://github.com/DavidSantiagoVelasco/Users_Menssaging_Notification",
  },
  {
    titulo: "Frugal App",
    descripcion:
      "Built a personal finance mobile application with Flutter, featuring multiple wallets and transaction tracking for organized financial management. Integrated Cloud Firestore for real-time data storage and synchronization.",
    imagen: frugalApp.src,
    tecnologias: [
      "Flutter",
      "Firestore"
    ],
    codigo:
      "https://github.com/DavidSantiagoVelasco/FrugalApp",
  },
];
