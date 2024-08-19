import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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

export const teachersData = [
  {
    name: "Shubhada More",
    description:
      "For the past 20 years and ongoing has been a teacher at Rainbow Montessori",
    // image: React.createElement(LuGraduationCap),
  },
  {
    name: "Amit Lagu",
    description:
      "Currently Amit is a Director @ Stanford University's Graduate Business program and holds a PhD in Industrial Engineering from Purdue University. He has been working with Element X Academy teaching students science and physics for the past 5 years.",
    // image: React.createElement(LuGraduationCap),
  },
] as const;