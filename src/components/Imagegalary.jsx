import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Images
import presentation1 from "../assets/gallary/img1.jpeg";
import presentation2 from "../assets/gallary/img2.jpeg";
import presentation3 from "../assets/gallary/img3.jpeg";
import presentation4 from "../assets/gallary/img4.jpeg";
import presentation5 from "../assets/gallary/img5.jpeg";
import presentation6 from "../assets/gallary/img6.jpeg";
import presentation7 from "../assets/gallary/img7.jpeg";
import presentation8 from "../assets/gallary/img8.jpeg";
import presentation9 from "../assets/gallary/img9.jpeg";
import presentation10 from "../assets/gallary/img10.jpeg";


const Imagegalary = () => {
  const images = [
    presentation1,
    presentation2,
    presentation3,
    presentation4,
    presentation5,
    presentation6,
    presentation7,
    presentation8,
    presentation9,
    presentation10,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-20 px-6 bg-white border-t border-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Side - Image Slider */}
        <div className="relative">
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-[30px] border-2 border-blue-100 shadow-xl bg-blue-50 min-h-[500px] flex items-center justify-center">
            
            {images[currentImage] ? (
              <img
                src={images[currentImage]}
                alt="Presentation"
                className="w-full h-[500px] object-cover transition duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <div className="text-center px-6">
                <p className="text-xl font-semibold text-[#0086ff]">
                  Image Not Available
                </p>

                <p className="text-gray-500 mt-2">
                  Please add image in assets folder
                </p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-5 mt-8">
            
            {/* Previous */}
            <button
              onClick={prevImage}
              className="w-14 h-14 rounded-full bg-[#0086ff] text-white flex items-center justify-center hover:bg-[#005fcc] transition duration-300 shadow-lg"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="w-14 h-14 rounded-full bg-[#0086ff] text-white flex items-center justify-center hover:bg-[#005fcc] transition duration-300 shadow-lg"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Right Side - Text */}
        <div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0086ff]">
            Presentation & Work Showcase
          </h2>

          <div className="w-24 h-1 bg-[#0086ff] rounded-full mt-4 mb-8"></div>

          <p className="text-xl text-gray-700 leading-10 mb-8 font-medium italic">
            "I am happy to share and present a software in my college."
          </p>

          <p className="text-lg text-gray-700 leading-9 mb-6">
            These presentation moments represent my journey of sharing ideas,
            discussing innovative solutions, and presenting development
            strategies for modern digital products and software systems.
          </p>

          <p className="text-lg text-gray-700 leading-9 mb-6">
            I regularly work on full stack applications, business software,
            dashboards, and scalable web solutions while collaborating with
            teams and clients to deliver high-quality digital experiences.
          </p>

          <p className="text-lg text-gray-700 leading-9">
            My presentations focus on problem-solving approaches, software
            architecture, modern web technologies, and building scalable
            solutions that help businesses improve efficiency and growth.
          </p>

          {/* Small Highlights */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#005fcc] mb-2">
                Technical Presentations
              </h3>

              <p className="text-gray-600 leading-7">
                Sharing development strategies and modern software solutions.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#005fcc] mb-2">
                Team Collaboration
              </h3>

              <p className="text-gray-600 leading-7">
                Working closely with teams and clients for successful projects.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Imagegalary;