import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Study Material Platform",
    category: "Web Solution",
    websiteLink: "https://studymaterial.com",
    image: "/src/assets/projects/studymaterial1.png",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    category: "Custom Software",
    websiteLink: "https://ecommerce.com",
    image: "/src/assets/projects/admndashboard4.png",
  },
  {
    id: 3,
    title: "Light Store e-commerce website",
    category: "Web Development",
    websiteLink: "https://ecommerce.com",
    image: "/src/assets/projects/lightwebsite.png",
  },
  {
    id: 4,
    title: "printocraft3D website",
    category: "Web Development",
    websiteLink: "https://ecommerce.com",
    image: "/src/assets/projects/3d-printocraft.png",
  },
  {
    id: 5,
    title: "Old Electronics Platform",
    category: "Web Development",
    websiteLink: "https://ecommerce.com",
    image: "/src/assets/projects/oldeelectronicshome2.png",
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "Web Solutions",
    websiteLink: "https://realestate.com",
    image: "/src/assets/projects/realestate2.png",
  },
];

const Projects = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0086ff]">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-[#0086ff] rounded-full mt-4"></div>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl leading-8">
            Here are some of my featured full stack projects including custom
            software, dashboards, business websites, analytics systems, and
            scalable web applications developed using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border-2 border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link
                    to={`/project/${project.id}`}
                    className="w-11 h-11 rounded-full bg-white text-[#0086ff] flex items-center justify-center hover:bg-[#0086ff] hover:text-white transition"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="text-sm font-semibold tracking-wide uppercase text-[#0086ff]">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 mt-3 leading-8">
                  {project.title}
                </h3>

                {/* Button */}
                <div className="mt-7">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 bg-[#0086ff] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005fcc] transition duration-300"
                  >
                    View Details
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-20 text-center">
          <Link
            to="/project"
            className="inline-flex items-center gap-3 bg-[#0086ff] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#005fcc] shadow-lg hover:shadow-2xl transition duration-300"
          >
            View All Projects
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;