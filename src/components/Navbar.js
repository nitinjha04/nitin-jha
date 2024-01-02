import {useContext, useEffect, useState } from "react";
import { Events, Link, scrollSpy } from "react-scroll";
import { ActiveSectionContext } from '../App';

function Navbar() {

  const [nowClicked, setNowClicked] = useState(" left-0 w-[91px] ");

   const { activeSection, setActiveSection } = useContext(ActiveSectionContext);

   useEffect(() => {
    Events.scrollEvent.register('scroll', () => {
      const currentSection = scrollSpy.getActiveLink();
      console.log(currentSection)
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    });

    return () => {
      Events.scrollEvent.remove('scroll');
    };
  }, [activeSection, setActiveSection]);

  const handleClick = (btnId) => {
    switch (btnId) {
      case "btn-1":
        console.log("btn-1 clicked");
        setNowClicked(" left-0 w-[91px] ");
        break;
      case "btn-2":
        console.log("btn-2 clicked");
        setNowClicked(" left-[77px] w-[93px] ");
        break;
      case "btn-3":
        console.log("btn-2 clicked");
        setNowClicked(" left-[162px] w-[86px] ");
        break;
      case "btn-4":
        console.log("btn-2 clicked");
        setNowClicked(" left-[242px] w-[104px] ");
        break;

      default:
        setNowClicked(" left-0 w-[91px] ");
        break;
    }
  };

  return (
    <>
      <div className=" sticky top-5  mt-3 inset-x-0 z-20 mx-auto mb-4 flex h-14 px-6">
        <div className=" text-black bg-mauve shadow-lg relative gap-9 px-6  mx-auto flex h-full items-center overflow-y-scroll rounded-[14px] border border-mauve-light-6/20 dark:border-mauve-dark-6/20 dark:bg-mauve-dark-3 sm:overflow-y-visible">
          <span
            class={`${nowClicked} absolute bottom-0 top-0 z-10 flex overflow-hidden rounded-[6px] p-2 transition-all duration-300 sm:p-2`}
          >
            <span class="h-full w-full rounded-[6px] bg-mauve-light dark:bg-mauve-dark-5"></span>
          </span>
          <Link
            to="middle"
            smooth={true}
            duration={500}
            offset={-75} 
            spy={true}
            activeClass="active"
            onClick={(e) => {
              handleClick("btn-1");
            }}
          >
            Home
          </Link>
          <Link
            to="info"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={(e) => {
              handleClick("btn-2");
            }}
          >
            About
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={(e) => {
              handleClick("btn-3");
            }}
          >
            Project
          </Link>
          <Link
            to="middle"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={(e) => {
              handleClick("btn-4");
            }}
          >
            Services
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
