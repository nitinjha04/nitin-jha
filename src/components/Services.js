import { Element } from "react-scroll";
import mouse from "../images/services-img/mouse.webp";
import seo from "../images/services-img/seo.webp";
import uiUx from "../images/services-img/ui-ux.webp";
import website from "../images/services-img/website.webp";

function Services() {
  return (
    <>
      <Element name="services" className="section">
        <div className="grid lg:grid-cols-4 grid-row-4 py-6 lg:px-24 justify-between gap-6 ">
          <div className=" bg-[#FAF8FF] cursor-pointer hover:shadow-2xl transition ease-linear text-center flex gap-6 flex-col items-center justify-center ">
            <div className="">
              <img src={mouse} alt="mouse" className=" mt-4" />
            </div>
            <h5 className=" text-2xl">Web Developer</h5>
            <div className=" mx-6 text-gray-400 mb-6">
              Create visually appealing and responsive websites using frontend
              and backend. Implement user interfaces and interactive features to
              enhance user experience.
            </div>
          </div>
          <div className=" bg-[#FAF8FF] cursor-pointer  hover:shadow-2xl transition ease-linear text-center flex gap-6 flex-col items-center justify-center ">
            <div className="">
              <img src={seo} alt="seo" className=" mt-4" />
            </div>
            <h5 className=" text-2xl">RESPONSIVE DESIGN</h5>
            <div className=" mx-6 text-gray-400 mb-6">
              Design websites and web applications that work seamlessly on
              various devices and screen sizes.
            </div>
          </div>
          <div className=" bg-[#FAF8FF] cursor-pointer  hover:shadow-2xl transition ease-linear text-center flex gap-6 flex-col items-center justify-center ">
            <div className="">
              <img src={uiUx} alt="uiUx" className=" mt-4" />
            </div>
            <h5 className=" text-2xl">USER INTERFACE (UI) DESIGN</h5>
            <div className=" mx-6 text-gray-400 mb-6">
              Design and implement aesthetically pleasing and user-friendly
              interfaces for websites and applications.
            </div>
          </div>
          <div className=" bg-[#FAF8FF] cursor-pointer  hover:shadow-2xl transition ease-linear text-center flex gap-6 flex-col items-center justify-center ">
            <div className="">
              <img src={website} alt="website" className=" mt-4" />
            </div>
            <h5 className=" text-2xl">WEBSITE MAINTENANCEs</h5>
            <div className=" mx-6 text-gray-400 mb-6">
              Offer ongoing maintenance services to ensure websites remain
              up-to-date, secure, and functional.
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Services;
