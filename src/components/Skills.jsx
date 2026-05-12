import React from "react";

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

import {
  FaArrowRight,
} from "react-icons/fa";

const Skills = () => {
  const techStack = [
    html,
    css,
    tailwindcss,
    javascript,
    react,
    nextjs,
    nodejs,
    express,
    mongodb,
    sql,
    postgres,
    docker,
    github,
    vps,
  ];

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#003b99]">
            Skills & Expertise
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-[#003b99] to-[#0086ff] rounded-full mt-5 shadow-md"></div>

          <p className="text-gray-700 text-lg mt-7 max-w-4xl leading-9 font-medium">
            I specialize in full stack web development with expertise in modern
            frontend technologies, backend architecture, databases, deployment,
            and scalable application development. I focus on building
            high-performance applications with clean and maintainable code.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] p-6 overflow-hidden shadow-[0_15px_45px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-300/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-[#003b99] mb-5">
                Frontend
              </h3>

              <ul className="space-y-4 text-gray-800 text-[17px] font-semibold">
                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  HTML
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  CSS
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  JavaScript
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  React.js
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Next.js
                </li>
              </ul>
            </div>
          </div>

          {/* Backend */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] p-6 overflow-hidden shadow-[0_15px_45px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0086ff]/20 to-[#003b99]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-[#003b99] mb-5">
                Backend
              </h3>

              <ul className="space-y-4 text-gray-800 text-[17px] font-semibold">
                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Node.js
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Express.js
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  REST APIs
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Authentication
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Server Architecture
                </li>
              </ul>
            </div>
          </div>

          {/* Databases */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] p-6 overflow-hidden shadow-[0_15px_45px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-[#003b99] mb-5">
                Databases
              </h3>

              <ul className="space-y-4 text-gray-800 text-[17px] font-semibold">
                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  MongoDB
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  SQL
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  PostgreSQL
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Database Design
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Query Optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Other Skills */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] p-6 overflow-hidden shadow-[0_15px_45px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-sky-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-[#003b99] mb-5">
                Other Skills
              </h3>

              <ul className="space-y-4 text-gray-800 text-[17px] font-semibold">
                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Docker
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  GitHub
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  SEO
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  System Design
                </li>

                <li className="flex items-center gap-3">
                  <FaArrowRight className="text-[#0086ff]" />
                  Deployment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack Moving Slider */}
        <div className="mt-24 overflow-hidden relative">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-cyan-100/20 pointer-events-none"></div>

          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="min-w-[100px] h-[100px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-[28px] shadow-[0_10px_35px_rgba(0,134,255,0.08)] flex items-center justify-center hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,71,179,0.18)] transition duration-500"
              >
                <img
                  src={tech}
                  alt="Tech Stack"
                  className="w-14 h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;