import coder from "../images/home-right.webp";

import tailwind from "../images/icons/icons8-tailwind-css-512.png";
import express from "../images/icons/icons8-express-js-512.png";
import mongodb from "../images/icons/icons8-mongodb-512.png";
import node from "../images/icons/icons8-node-js-512.png";
import react from "../images/icons/icons8-react-512.png";

import { Element } from "react-scroll";

const LOGOS = [
  <img src={tailwind} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={express} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={mongodb} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={node} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={react} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={tailwind} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={express} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={mongodb} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={node} alt="" className="text-slate-800 w-12 h-12" />,
  <img src={react} alt="" className="text-slate-800 w-12 h-12" />,
];

function Middle() {
  return (
    <>
     <Element name="middle" className="middle-section">
          <div id="middle" className="flex flex-row ">
            <div className="flex px-4 py-2 justify-center mx-auto  gap-8 ">
              <img
                src={coder}
                alt="coder"
                className="drop-shadow-[0_25px_25px_rgb(0,0,0,0.15)] dark:shadow-black/40 h-[91px] my-auto lg:h-[350px] "
              />
              <div className=" flex flex-col justify-center mx-auto ">
                <div class="flex items-center space-x-2 mt-2">
                  <p class="text-4xl">Nitin Jha</p>
                  <span class="bg-blue-500 rounded-full p-1" title="Verified">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-gray-100 h-2.5 w-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                </div>
                <p class="text-gray-700">
                  | Web Developer | M.E.R.N Stack Developer |
                </p>
                <p class="text-gray-700">| Self Directed |</p>
              </div>
            </div>
          </div>
          <div className=" overflow-hidden border-y-4 border-gray-300 p-4  mt-10  flex relative m-auto   bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
              {LOGOS.map((logo, index) => (
                <div
                  className="slide flex  lg:w-[125px] items-center justify-center"
                  key={index}
                >
                  {logo}
                </div>
              ))}
              {LOGOS.map((logo, index) => (
                <div
                  className="slide flex w-[125px] items-center justify-center"
                  key={index}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
     </Element>

      <>
        {/* <div className="border-b-4 border-blue-200  overflow-hidden"></div> */}
      </>
    </>
  );
}

export default Middle;
