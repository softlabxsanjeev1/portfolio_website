import React from "react";
import { Link } from "react-router-dom";
import sanjeev from "../assets/sanjeevimage.png"
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Aboutus = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-white to-blue-50 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0057d8] mb-5 leading-tight">
            About Me
          </h2>

          {/* Line */}
          <div className="w-28 h-1.5 bg-gradient-to-r from-[#0057d8] to-[#0086ff] rounded-full mb-10 shadow-md"></div>

          {/* Paragraphs */}
          <p className="text-lg md:text-xl leading-9 text-black mb-5">
            I am a passionate{" "}
            <span className="font-bold text-[#0057d8]">
              MERN Stack Developer
            </span>{" "}
            with 4+ years of professional experience. 
            <br/>
            Specialize in creating complete full stack solutions that help businesses grow
            digitally with smooth performance and clean user experiences.
            I handle project planning, development workflows, and technical problem solving. 
            Enjoy finding smart and practical solutions that deliver real value
            to clients and users.
          </p>

          <p className="text-lg text-black mb-5">
            Over the years, I have successfully delivered{" "}
            <Link
              to="/project"
              className="font-bolder text-[#0057d8] hover:text-[#0086ff] hover:underline transition duration-300"
            >
              20+ full stack projects
            </Link>{" "}
            including business websites, custom software systems, admin panels,
            dashboards, and dynamic web applications from start to end.
          </p>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-[#0057d8] mb-3">
                Clean & Scalable Code
              </h3>

              <p className="text-gray-600 leading-7">
                Building maintainable applications with proper structure and
                optimized performance.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-[#0057d8] mb-3">
                Problem Solving
              </h3>

              <p className="text-gray-600 leading-7">
                Expert in solving technical challenges and providing the best
                possible development solutions.
              </p>
            </div>
          </div>
   <div className="flex items-center gap-5 mt-8">
  
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/sanjeev28kumar/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-[#0057d8] hover:bg-[#0057d8] hover:text-white hover:shadow-xl transition duration-300"
  >
    <FaLinkedinIn size={24} />
  </a>
  <a
    href="https://github.com/softlabxsanjeev1"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-[#0057d8] hover:bg-[#0057d8] hover:text-white hover:shadow-xl transition duration-300"
  >
    <FaGithub size={24} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/tech_hub_2805/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-[#0057d8] hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white hover:shadow-xl transition duration-300"
  >
    <FaInstagram size={24} />
  </a>
  {/* <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-[#0057d8] hover:bg-red-600 hover:text-white hover:shadow-xl transition duration-300"
  >
    <FaYoutube size={24} />
  </a> */}
</div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center lg:items-end">
          
          {/* Image Wrapper */}
          <div className="relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0057d8] to-[#0086ff] blur-3xl opacity-20 rounded-[50px]"></div>

            {/* Decorative Border */}
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#0086ff]/30 rounded-[40px]"></div>

            {/* Image */}
            <img
              src={sanjeev}
              alt="About"
              className="relative z-10 w-full max-w-md rounded-[40px] shadow-[0_20px_60px_rgba(0,134,255,0.25)] object-cover border border-blue-100"
            />
          </div>

          {/* Social Links */}
        {/* Social Links */}

        </div>

      </div>
    </section>
  );
};

export default Aboutus;