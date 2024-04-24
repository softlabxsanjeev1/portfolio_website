import bannerBackground from "../assets/bg_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          Known Technologies
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">I use these technologies</h1>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Node js
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Express js
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Jest Testing tool
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                React native
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJs
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Bootstrap
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind css
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Electronjs
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                JAVASCRIPT
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                C/C++
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                NextJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MongoDB
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Rest APIs
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MYSQL Database
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
