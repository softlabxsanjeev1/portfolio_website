import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-3xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class=" text-5xl fa-solid fa-brands fa-aws"></i>
            <h1 className="text-3xl">Web Development</h1>
            <p>
              I create functional and secure, user-friendly websites and web applications.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-3xl">Android Development</h1>
            <p>
              Develop and maintain high-quality React Native applications using clean code.
              <strong> Redux/ReduxToolkit</strong>, to make asynchronous API calls and enhance data loading
              speed. Implement pixel-perfect user interfaces that match designs.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-3xl">Backend Development</h1>
            <p>
              I am using Node. js and Express js. framework  for backend development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
