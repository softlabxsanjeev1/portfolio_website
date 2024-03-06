import bannerImage from "../assets/image_1.png";
import bannerBackground from "../assets/bg_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-gray ">
        {/* text */}
        <div className="w-1/2 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Sanjeev Kumar</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}> &nsbp;</span>
          </h2>
          <p className="">
            <ol>
              <li>Built Full stack mobile app and dynamic websites have interactive UI/UX and APIs, understand the concept of JAVASCRIPT.</li>
            </ol>
          </p>

          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-400   border cursor-pointer  px-3 py-4 w-12 h-12  rounded-full flex justify-center items-center bg-blue-300"
              href="https://www.instagram.com/webtech007/" target="_blank">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-400 border  cursor-pointer  px-3 py-4 w-12 h-12  rounded-full flex justify-center items-center bg-blue-300"
              href="https://github.com/softlabxsanjeev1" target="_blank">
              <i class="fa-brands text-4xl  fa-github"></i>
            </a>

            <a className=" hover:bg-orange-400  border  cursor-pointer px-3 py-4 w-12 h-12  rounded-full flex justify-center items-center bg-blue-300"
              href="https://www.linkedin.com/in/sanjeev-kumar-1729351b3/" target="_blank">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl     px-3  py-2 bg-blue-500  rounded-full shadow-lg"
            href="https://www.linkedin.com/in/sanjeev-kumar-1729351b3"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
