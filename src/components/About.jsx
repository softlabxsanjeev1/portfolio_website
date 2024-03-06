import { useState } from "react";
import bannerImage from "../assets/image_1.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "MERN Developer  Android Developer",
    desc1: ` I'm a Full Stack Web Developer skilled in MERN stack. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces.I focus on writing clean, elegant and efficient code. `,
    actionButton: {
      title: "Projects....",
      link: "../components/Projects.js",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="rounded-full my-2 shadow-lg w-fit"
              src={data.image}
              alt="sanjeev-kumar"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
