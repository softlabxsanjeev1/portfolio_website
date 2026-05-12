import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { projects } from "../data/projects";

const Projectdetail = () => {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  const [currentImage, setCurrentImage] = useState(0);

  // Auto Image Slider
  useEffect(() => {
    if (!project?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project]);

  // Prev Image
  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Next Image
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  // If project not found
  if (!project) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-[#003b99]">
          Project Not Found
        </h2>
      </section>
    );
  }

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-sky-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">

        {/* ================= IMAGE SECTION ================= */}
        <div className="relative mb-16">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[35px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,134,255,0.12)]">
            
            <img
              src={
                project.images?.[currentImage] ||
                "https://via.placeholder.com/1200x700"
              }
              alt={project.title}
              className="w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

            {/* Project Title */}
            <div className="absolute bottom-8 left-8 z-20">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/30 mb-4">
                {project.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
                {project.title}
              </h1>
            </div>

            {/* Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#003b99] transition duration-300 z-20"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#003b99] transition duration-300 z-20"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnails */}
          {/* <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
            {project.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`min-w-[110px] h-[90px] rounded-2xl overflow-hidden border-2 transition duration-300 ${
                  currentImage === index
                    ? "border-[#003b99] scale-105"
                    : "border-white"
                }`}
              >
                <img
                  src={image}
                  alt="Project"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div> */}
        </div>

        {/* ================= PROJECT DETAILS ================= */}

        {/* Short Description */}
        <div className="mb-14 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,134,255,0.08)]">
          
          <h2 className="text-4xl font-extrabold text-[#003b99] mb-6">
            About Project
          </h2>

          <p className="text-gray-700 text-lg leading-9 font-medium">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* What We Did */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,134,255,0.08)]">
            
            <h3 className="text-3xl font-extrabold text-[#003b99] mb-7">
              What We Did
            </h3>

            <div className="space-y-5">
              {project.whatWeDid?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <FaArrowRight className="text-[#0086ff] mt-1" />

                  <p className="text-gray-700 leading-8 text-lg font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Panels */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,134,255,0.08)]">
            
            <h3 className="text-3xl font-extrabold text-[#003b99] mb-7">
              Project Panels
            </h3>

            <div className="flex flex-wrap gap-4">
              {project.panels?.map((panel, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-[#003b99] to-[#0086ff] text-white px-6 py-3 rounded-full font-semibold shadow-md"
                >
                  {panel}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= LINKS ================= */}
        <div className="flex flex-wrap gap-5 mt-14">
          
          {/* Live Website */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[220px] bg-gradient-to-r from-[#003b99] to-[#0086ff] text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-xl hover:scale-[1.02] transition duration-300"
          >
            Live Website
            <FaExternalLinkAlt />
          </a>

          {/* Github */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[220px] bg-white border border-blue-100 text-[#003b99] py-5 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md hover:bg-[#003b99] hover:text-white transition duration-300"
          >
            GitHub
            <FaGithub />
          </a>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-16 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,134,255,0.08)]">
          
          <h3 className="text-4xl font-extrabold text-[#003b99] mb-8">
            Project Description
          </h3>

          <div className="space-y-5">
            {project.description?.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <FaArrowRight className="text-[#0086ff] mt-1" />

                <p className="text-gray-700 text-lg leading-8 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TECH STACK ================= */}
        <div className="mt-16">
          
          <h3 className="text-4xl font-extrabold text-[#003b99] mb-8">
            Tech Stack
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            {project.techStack?.map((tech, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] p-6 shadow-[0_15px_45px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_60px_rgba(0,71,179,0.18)] transition duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-4"
                />

                <h4 className="text-xl font-bold text-[#003b99]">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COLLABORATORS ================= */}
        <div className="mt-16">
          
          <h3 className="text-4xl font-extrabold text-[#003b99] mb-8">
            Collaborators
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            
            {project.collaborators?.map((person, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] p-6 shadow-[0_15px_45px_rgba(0,134,255,0.08)] flex items-center justify-between"
              >
                <div>
                  <h4 className="text-2xl font-bold text-[#003b99]">
                    {person.name}
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Project Collaborator
                  </p>
                </div>

                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-[#003b99] hover:bg-[#003b99] hover:text-white transition duration-300"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projectdetail;