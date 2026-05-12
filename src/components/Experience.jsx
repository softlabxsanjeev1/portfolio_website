import React from "react";
import leehome from "../assets/company/leehomepackersandmovers.jpeg";
import softlabx from "../assets/company/softlax.jpeg";
import arcoders from "../assets/company/arcoders.jpeg";

const Experience = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0047b3]">
            Experience
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-[#0047b3] to-[#0086ff] rounded-full mt-5 shadow-md"></div>

          <p className="text-gray-700 text-lg mt-7 max-w-4xl leading-9">
            I have 4+ years of experience in developing modern MERN Stack
            applications, custom software systems, analytics tools, and
            dashboards. My focus is always on creating scalable, maintainable,
            and user-friendly applications with strong problem-solving
            approaches and optimized performance.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">

          {/* Arcoders */}
          <div className="relative group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 overflow-hidden shadow-[0_15px_50px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0086ff]/20 to-[#0047b3]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              
              {/* Logo */}
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0047b3] to-[#0086ff] p-[2px] shadow-lg">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={arcoders}
                    alt="Arcoders"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Company Name
                    </p>

                    <h3 className="text-3xl font-extrabold text-[#003380]">
                      Arcoders
                    </h3>

                    <span className="inline-block mt-3 bg-gradient-to-r from-[#0047b3] to-[#0086ff] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                      Software Developer
                    </span>
                  </div>

                  <span className="bg-white border border-blue-100 text-[#0047b3] px-6 py-3 rounded-2xl text-sm font-bold shadow-md w-fit">
                    02-2025 to 05-2026
                  </span>
                </div>

                <p className="text-gray-600 mt-6 leading-8 text-lg">
                  Building modern full stack applications, custom software
                  systems, and business websites through Arcoders. Worked on
                  scalable dashboards, analytics platforms, admin panels, and
                  custom business solutions for multiple industries.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium text-[#005fcc]">
                    MERN Stack
                  </span>

                  <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium text-[#005fcc]">
                    Team Leadership
                  </span>

                  <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium text-[#005fcc]">
                    Problem Solving
                  </span>

                  <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium text-[#005fcc]">
                    Custom Software
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lehhome */}
          <div className="relative group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 overflow-hidden shadow-[0_15px_50px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              
              {/* Logo */}
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0047b3] to-[#0086ff] p-[2px] shadow-lg">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={leehome}
                    alt="Lehhome Packers and Movers"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Company Name
                    </p>

                    <h3 className="text-3xl font-extrabold text-[#003380]">
                      Lehhome Packers & Movers
                    </h3>

                    <span className="inline-block mt-3 bg-gradient-to-r from-[#0047b3] to-[#0086ff] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                      Software Developer
                    </span>
                  </div>

                  <span className="bg-white border border-blue-100 text-[#0047b3] px-6 py-3 rounded-2xl text-sm font-bold shadow-md w-fit">
                    10-2024 to 01-2025
                  </span>
                </div>

                <p className="text-gray-600 mt-6 leading-8 text-lg">
                  Developed and maintained business management software,
                  quotation systems, CRM tools, and operational dashboards to
                  improve workflow efficiency and business automation.
                </p>
              </div>
            </div>
          </div>

          {/* Softlabx */}
          <div className="relative group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 overflow-hidden shadow-[0_15px_50px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0086ff]/20 to-[#0047b3]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              
              {/* Logo */}
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0047b3] to-[#0086ff] p-[2px] shadow-lg">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={softlabx}
                    alt="Softlabx"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Company Name
                    </p>

                    <h3 className="text-3xl font-extrabold text-[#003380]">
                      Softlabx
                    </h3>

                    <span className="inline-block mt-3 bg-gradient-to-r from-[#0047b3] to-[#0086ff] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                      Software Development Intern
                    </span>
                  </div>

                  <span className="bg-white border border-blue-100 text-[#0047b3] px-6 py-3 rounded-2xl text-sm font-bold shadow-md w-fit">
                    10-2022 to 06-2024
                  </span>
                </div>

                <p className="text-gray-600 mt-6 leading-8 text-lg">
                  Started my professional development journey as a software
                  development intern where I worked on frontend and backend
                  applications, APIs, dashboards, and real-world business
                  projects using modern JavaScript technologies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;