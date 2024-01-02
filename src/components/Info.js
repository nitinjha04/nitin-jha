import { Element } from "react-scroll";
import aboutUs from "../images/about-us.webp";

function Info() {
  return (
    <>
      <Element name="info">
          <div id="info" className=" mt-6 flex flex-row h-96  ">
            <div>
              <img
                src={aboutUs}
                alt=""
                className=" w-full h-[22rem] px-16 drop-shadow-[0_25px_25px_rgb(0,0,0,0.15)] dark:shadow-black/40 "
              />
            </div>
            <div className=" w-[38rem] my-auto ml-10  ">
              <h1 className=" text-2xl">LET'S INTRODUCE ABOUT MYSELF</h1>
              <div className=" mt-8 text-base  text-gray-400">
                {" "}
                Hello there! I'm Navneet, a passionate and dedicated frontend
                developer with a growing expertise in crafting engaging and
                user-friendly web experiences. With a solid foundation in HTML, CSS,
                Angular, JavaScript, Bootstrap . I'm on a journey to transform ideas
                into beautifully functional websites. My development philosophy
                centers around creating clean, elegant, and responsive designs that
                not only look great but also offer a seamless user experience. I
                believe in the power of collaboration and continuous learning, and
                I'm excited to be a part of the ever-evolving world of frontend
                development.
              </div>
            </div>
          </div>
      </Element>
    </>
  );
}

export default Info;
