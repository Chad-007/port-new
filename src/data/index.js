import { algorithms, devnotes, oscs } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Computer Science Student",
    company_name: "3rd Year Student",
    date: "2021 - Present",
    details: [
      "Developing a strong foundation in computer science theory, software engineering, and data analysis.",
      "Completed hands-on projects that apply technical knowledge to solve real-world problems.",
      "Active member of technical clubs and organizations, engaging in collaborative projects and hackathons.",
    ],
  },
];

const portfolio = [
  {
    name: "Rescue Me - Disaster Management App",
    description:
      "A comprehensive disaster management app with features such as real-time location updates every 10 seconds for rescue requests, weather prediction using OpenWeather, item requests for essential supplies like food and clothing, disaster prediction leveraging historical data, and face recognition to help identify and manage disaster victims by storing and matching their details in a database.",
    image: "disaster.png", // Replace with an actual image path or import.
  },
  {
    name: "Fitness Companion",
    description:
      "A fitness app inspired by platforms like Healthify, allowing users to input personal details, set fitness goals, and receive tailored workout and diet plans, along with progress tracking and health recommendations.",
    image: "Fitness.png", // Replace with an actual image path or import.
  },
  {
    name: "Cyberverse Ai interview",
    description:
      "An  ai interviewer integrated with gemini api and open cv to conduct tech and hr interview by parsing the resume and asking questions based on the resume and also the interviewer can ask questions based on the job description and the answers are evaluated based on the nlp and nlu models",
    image: "ai-inter.png", // Replace with an actual image path or import.
  },
  {
    name: "AI Prediction Dashboard",
    description:
      "A robust predictive analytics dashboard developed using machine learning algorithms to analyze datasets, forecast trends, and present insights via interactive visualizations. Features include support for housing price predictions, customer segmentation using clustering, and digit recognition with neural networks.",
    image: "ai.png", // Replace with an actual image path or import.
  },
  {
    name: "Expo Surfer",
    description:
      "A 3D interactive website that functions like a game, designed to help users explore and understand exoplanets in an engaging way.",
    image: "plann.png", // Replace with an actual image path or import.
  },
];

export { experiences, portfolio };
