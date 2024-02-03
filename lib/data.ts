import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/intelligent.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/iot.jpg";
import attendanceSystemImg from "@/public/AttendanceSystem.png";
import InfectiousDiseaseController from "@/public/InfectiousDiseaseController.jpg";
import SkinDiseaseDetection from "@/public/SkinDiseaseDetection.png";
import LMS from "@/public/LMS.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Software Engineer",
    location: "Agrithmics (Pvt) Ltd.",
    description:
      "I primarily contributed to the 'Cultive 8' project, which aimed at the effective and efficient distribution of agricultural products in Bangladesh. I worked on both the front-end and back-end development of the web application.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 Jan- 2023 July",
  },
  {
    title: "Front-End Developer",
    location: "Part Time",
    description:
      "I worked as a front-end developer in part time. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Freelancer Developer",
    location: "Full Time",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, .NET,Java Tailwind, MSSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Skin Disease Detection",
    description:
      "The project is focused on leveraging computer vision for the detection of skin diseases using skin images. This project involves implementing advanced algorithms to enhance the accuracy and efficiency of disease identification.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    imageUrl: SkinDiseaseDetection,
  },
  {
    title: "LearnX",
    description:
      "LMS designed to effortlessly manage all key aspects of online education. From user-friendly course creation and interactive content delivery to seamless learner assessment and progress tracking.",
    tags: ["React(TS)", "Tailwind", ".NET", "MongoDB", "Redux"],
    imageUrl: LMS,
  },
  {
    title: "LAN Connector",
    description:
      "This mini IoT project is designed to send sensor readings to a Local Area Network (LAN) using an Ethernet connection. ",
    tags: ["Arduino", "ESP32", "PHP"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Infectious Disease Controller",
    description:
      "A real-life solution to the spread of viruses that can be used to neutralize viruses using sanitizer sprayers and to prevent the possibility of entry of risky peoples to the region. ",
    tags: ["ATmega32", "C", "Proteus","Atmel Studio"],
    imageUrl: InfectiousDiseaseController,
  },
  {
    title: "WM Attendance System",
    description:
      "A System with face recognition for precise attendance tracking, along with streamlined leave management. The project aims to modernize attendance processes, ensuring efficient workforce management.",
    tags: ["Azure Face API", "MSSQL", ".NET","React Native","ReactJS"],
    imageUrl: attendanceSystemImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "MsSql",
  "Redux",
  "MySQL",
  ".NET",
  "Python",
  "Java",
  "C#"
] as const;
