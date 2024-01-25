import { BsLinkedin as LinkedinIcon } from "react-icons/bs";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsTwitter as TwitterIcon } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="w-full pt-6 bg-primary-blue border-t border-white/10">
        <div className="max-w-7xl  mx-auto pb-5 md:pb-10 flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="md:w-[337px]">
            <a href="" className=" text-3xl font-bold">
              {" "}
              nitin Jha
            </a>
          </div>
          <div className="flex gap-6 items-center text-xl">
            <a
              href="www.linkedin.com/in/jhanitin"
              target="_blank"
              className="text-black border-black md:h-12  md:w-12  h-10 w-10 text-sm md:text-base aspect-square flex items-center justify-center hover:border-orange-500 rounded-full border md:border-2 transition-all hover:text-orange-500 hover:scale-110"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/nitinjha04"
              target="_blank"
              className="text-black border-black md:h-12  md:w-12  h-10 w-10 text-sm md:text-base aspect-square flex items-center justify-center hover:border-orange-500 rounded-full border md:border-2 transition-all hover:text-orange-500 hover:scale-110"
            >
              <GithubIcon />
            </a>
            <a
              href="https://twitter.com/CoderMonkey19"
              target="_blank"
              className="text-black border-black md:h-12  md:w-12  h-10 w-10 text-sm md:text-base aspect-square flex items-center justify-center hover:border-orange-500 rounded-full border md:border-2 transition-all hover:text-orange-500 hover:scale-110"
            >
              <TwitterIcon />
            </a>
          </div>
          <div className="md:text-sm text-xs w-full md:w-auto text-center">
            " Copyright " "2024"
            <a
              href=""
              rel="noreferrer"
              target="_blank"
              class="font-semibold text-orange-500"
            >
              Nitin Jha
            </a>
            ". All Rights Reserved."
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
