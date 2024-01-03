import { Element } from "react-scroll";
import aboutUs from "../images/about-us.webp";

function Info() {
  return (
    <>
      <Element name="info">
        <div id="info" className=" lg:mt-6 flex  flex-row h-96  ">
          <div className=" flex my-auto justify-center">
            <img
              src={aboutUs}
              alt=""
              className=" w-[343px] h-[91px] lg:w-full lg:h-[22rem] px-6 lg:px-16 drop-shadow-[0_25px_25px_rgb(0,0,0,0.15)] dark:shadow-black/40 "
            />
          </div>
          <div className=" w-[38rem] my-auto ml-1 lg:ml-10  ">
            <h1 className=" text-lg lg:text-2xl">
              LET'S INTRODUCE ABOUT MYSELF
            </h1>
            <div className=" mt-8 text-base  text-gray-400 flex flex-col gap-7">
              {" "}
              Hello there! I'm Nitin Jha, proficient in the MERN stack. My
              expertise spans MongoDB, Express.js, React, and Node.js,
              empowering me to craft scalable and dynamic web applications.
              Let's build something incredible together!
              <span>
                <strong className="  text-gray-700 ">Skills</strong> : React,
                Redux, NodeJs, ExpressJs, MongoDB, Jwt, Tailwind Css, Git,
                Html/Css, Javascript, Bootstrap.
              </span>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Info;
