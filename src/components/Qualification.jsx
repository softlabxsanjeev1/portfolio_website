import React from "react";

// University Images
import mdu from "../assets/mdu.jpeg";
import govtcollege from "../assets/mdu.jpeg";
import school from "../assets/school.jpg";

const Qualification = () => {
  const qualifications = [
    {
      id: 1,
      title: "Master of Computer Applications (MCA)",
      university: "Maharishi Dayanand University, Rohtak",
      image: mdu,
      year: "Post Graduation",
    },
    {
      id: 2,
      title: "Bachelor of Computer Applications (BCA)",
      university: "Govt College, Maharishi Dayanand University",
      image: govtcollege,
      year: "Graduation",
    },
    {
      id: 3,
      title: "12th - Science (Non Medical)",
      university: "Higher Secondary Education",
      image: school,
      year: "Senior Secondary",
    },
    {
      id: 4,
      title: "10th",
      university: "Secondary Education",
      image: school,
      year: "School Education",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0047b3]">
            Qualifications
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-[#0047b3] to-[#0086ff] rounded-full mt-5 shadow-md"></div>

          <p className="text-gray-700 text-lg mt-7 max-w-3xl leading-9">
            My academic journey and educational background in computer science,
            software development, and technology innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {qualifications.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-7 overflow-hidden shadow-[0_15px_50px_rgba(0,134,255,0.08)] hover:shadow-[0_20px_70px_rgba(0,71,179,0.18)] transition-all duration-500"
            >
              
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0086ff]/20 to-[#0047b3]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                
                {/* Image */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0047b3] to-[#0086ff] p-[2px] shadow-lg">
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  
                  {/* Label */}
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0047b3] to-[#0086ff] text-white text-xs font-bold tracking-wide shadow-md">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-[#003380] mt-5 leading-snug">
                    {item.title}
                  </h3>

                  {/* University */}
                  <p className="text-gray-600 mt-3 text-lg leading-8">
                    {item.university}
                  </p>
                </div>
              </div>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0047b3] via-[#0086ff] to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Qualification;