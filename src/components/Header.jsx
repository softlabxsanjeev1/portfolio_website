import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Sanjeev Kumar");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "Projects",
      link: "/",
      id: 2,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: 'https://drive.google.com/file/d/1NoL6rNklgQ--jIWUpzJQTocCZkhnJw0n/view?usp=sharing'
  });

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>

        <div>
          {/* buttons */}
          <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
