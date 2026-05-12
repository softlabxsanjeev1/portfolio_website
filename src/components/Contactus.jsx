import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const Contactus = () => {
  return (
    <section className="w-full py-16 px-6 bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0086ff]">
            Contact Me
          </h2>

          <div className="w-24 h-1 bg-[#0086ff] rounded-full mt-4"></div>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl leading-8">
            Let’s connect and discuss your project, software idea, or business
            requirements. I’m always available for freelance work, full stack
            development, and collaboration opportunities.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-14">
          
          {/* Email */}
          <a
            href="mailto:sanjeevyaadav28520@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0086ff] transition duration-300">
              <Mail
                className="text-[#0086ff] group-hover:text-white transition duration-300"
                size={26}
              />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>

              <p className="text-lg font-semibold text-[#005fcc]">
                sanjeevyaadav28520@gmail.com
              </p>
            </div>
          </a>




          <a
             href="https://www.linkedin.com/in/sanjeev28kumar/"
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0086ff] transition duration-300">
              <FaLinkedinIn 
              className="text-[#0086ff] group-hover:text-white transition duration-300"
              size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">LinkedIn</p>

              <p className="text-lg font-semibold text-[#005fcc]">
                Sanjeev Kumar
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9518812310"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0086ff] transition duration-300">
              <MessageCircle
                className="text-[#0086ff] group-hover:text-white transition duration-300"
                size={26}
              />
            </div>

            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>

              <p className="text-lg font-semibold text-[#005fcc]">
                +91 9518812310
              </p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0086ff] transition duration-300">
              <MapPin
                className="text-[#0086ff] group-hover:text-white transition duration-300"
                size={26}
              />
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>

              <p className="text-lg font-semibold text-[#005fcc]">
                Delhi, India
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contactus;