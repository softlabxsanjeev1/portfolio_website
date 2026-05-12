import React from "react";
import Aboutus from "../components/Aboutus";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contactus from "../components/Contactus";
import Qualification from "../components/Qualification";
import Imagegalary from "../components/Imagegalary";

const Home = () => {
  return (
    <div className="pt-24">
      <section id="about">
        <Aboutus />
      </section>
      <section id="qualification">
        <Qualification />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
       <section id="imagegallery">
        <Imagegalary />
      </section>
      <section id="contact">
        <Contactus />
      </section>

    </div>
  );
};

export default Home;