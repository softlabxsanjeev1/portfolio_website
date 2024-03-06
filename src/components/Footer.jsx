const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex justify-between px-56">
        <div>
          <p>
            @2024&nbsp; &ensp; &ensp; &ensp; Sanjeev Kumar &nbsp;<span> &ensp;&nbsp;Full Stack developer</span>
          </p>
        </div>
        <div className="space-x-12">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/about" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;