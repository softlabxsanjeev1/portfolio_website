import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../data/projects";

const Project = () => {
  return (
    <section className="w-full min-h-screen py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-sky-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#003b99]">
            All Projects
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-[#003b99] to-[#0086ff] rounded-full mt-5 shadow-md"></div>

          <p className="text-gray-700 text-lg mt-7 max-w-4xl leading-9 font-medium">
            Explore my full stack projects, custom software systems,
            dashboards, web applications, and scalable business solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] overflow-hidden shadow-[0_15px_45px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500"
            >
              
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-300/10 rounded-full blur-3xl"></div>

              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5">
                
                {/* Category */}
                <span className="inline-block bg-blue-100 text-[#003b99] text-xs font-bold px-4 py-2 rounded-full mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-[#003b99] leading-tight mb-4">
                  {project.title}
                </h3>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  
                  {/* Details */}
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 bg-gradient-to-r from-[#003b99] to-[#0086ff] text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
                  >
                    Details
                    <FaArrowRight size={14} />
                  </Link>

                  {/* Live Link */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-[#003b99] hover:bg-[#003b99] hover:text-white transition duration-300"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;