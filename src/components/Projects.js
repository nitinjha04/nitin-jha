import shopVista from "../images/projects/shopVista.png";
import popMovie from "../images/projects/popMovie.png";
import { Element } from "react-scroll";

function Projects() {
  return (
    <>
      <Element name="project">
        <div className="my-10 px-6 w-full max-w-7xl mx-auto ">
          <h1 className=" text-4xl">_My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-6 ">
            {/* Project 1 */}
            <div className="relative group   aspect-auto rounded-2xl">
              <div className=" aspect-auto object-cover rounded-xl outline outline-4 outline-transparent  transition-all group-hover:outline-orange-500 ">
                <img
                  src={shopVista}
                  alt="shopVista"
                  className="  aspect-auto object-cover rounded-xl outline outline-4 outline-transparent  transition-all group-hover:brightness-50"
                  loading="lazy"
                />
                <a href="https://shop-vista-mern.vercel.app/" target="_blank">
                  <div className="absolute inset-0 gradient opacity-0 group-hover:opacity-100 transition-all rounded-xl"></div>
                </a>
                <div class="absolute opacity-0 group-hover:opacity-100 bottom-0 left-0 w-full p-4 flex items-center justify-between gap-2 transition-all ">
                  <a
                    class="text-base md:text-2xl font-semibold hover:text-orange-500 transition-all flex-grow truncate text-white"
                    href="https://shop-vista-mern.vercel.app/"
                    target="_blank"
                  >
                    ShopVista eCommerce
                  </a>
                  <a
                    href="https://github.com/nitinjha04/ShopVista-backend"
                    target="_blank"
                    class="h-10 md:h-12 text-2xl aspect-square bg-white flex items-center justify-center rounded-full text-black border-2 border-white hover:text-white hover:bg-transparent transition-all"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://shop-vista-mern.vercel.app"
                    target="_blank"
                    class="h-10 md:h-12 text-xl aspect-square bg-white flex items-center justify-center rounded-full text-black border-2 border-white hover:text-white hover:bg-transparent transition-all"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                    >
                      <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group hidden lg:block px-3 aspect-auto rounded-2xl  outline outline-4 outline-transparent transition-all">
              <div className=" text-lg mb-6 font-semibold">
                ShopVista eCommerce Mern with Admin Panel
              </div>
              <div className=" text-gray-400 flex flex-col gap-3 ">
                I developed a full-fledged MERN e-commerce app with a
                streamlined admin panel, leveraging React, Redux, Node.js,
                Express.js, and MongoDB. Using Stripe for payments and
                Passport-JWT for authentication, it prioritized security. The
                app featured email notifications for order updates and password
                resets, ensuring user-friendly functionality and efficient
                management for users and administrators.
                <span className="">
                  <ul className=" list-disc ">
                    <li className=" flex flex-row">
                      <strong className="  text-gray-700 ">Frontend </strong> -
                      React, Redux{" "}
                    </li>
                    <li className=" flex flex-row">
                      <strong className=" text-gray-700 ">Backend </strong> -
                      Node.js, Express.js, MongoDB
                    </li>
                    <li className=" flex flex-row">
                      {" "}
                      <strong className=" text-gray-700 ">
                        Payment Integration{" "}
                      </strong>{" "}
                      - Stripe{" "}
                    </li>
                    <li className=" flex flex-row">
                      <strong className=" text-gray-700 ">
                        Authentication{" "}
                      </strong>{" "}
                      - Passport-JWT
                    </li>
                    <li className=" flex flex-row">
                      <strong className=" text-gray-700 ">
                        Communication{" "}
                      </strong>{" "}
                      - Emailer System
                    </li>
                  </ul>
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative group  hidden lg:block px-3 aspect-auto rounded-2xl  outline outline-4 outline-transparent transition-all">
              <div className=" text-lg text-pretty mb-6 font-semibold">PoP Movie</div>
              <div className=" text-gray-400 gap-3 flex flex-col ">
                I crafted a dynamic movie information platform using React,
                powered by an API source for the latest movies and TV shows.
                Users can seamlessly filter and explore content by diverse
                categories, including ratings, genres, and more. The platform
                presents detailed insights into casts, offering comprehensive
                movie overviews, enriching the user experience.
                <span className="">
                  <ul className=" list-disc ">
                    <li className="flex flex-row">
                      <strong className="text-gray-700">
                        Frontend Development{" "}
                      </strong>{" "}
                      - React (Single Page Applications), API Integration
                    </li>
                    <li className="flex flex-row">
                      <strong className="text-gray-700">
                        Content Filtering{" "}
                      </strong>{" "}
                      - Dynamic Filtering by Categories (Ratings, Genres)
                    </li>
                    <li className="flex flex-row">
                      <strong className="text-gray-700">
                        Data Presentation{" "}
                      </strong>{" "}
                      - Detailed Cast Information, Movie Overviews
                    </li>
                    <li className="flex flex-row">
                      <strong className="text-gray-700">
                        User Experience Enhancement{" "}
                      </strong>{" "}
                      - Rich Frontend Implementation
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="relative group   aspect-auto rounded-2xl">
              <div className=" aspect-auto object-cover rounded-xl outline outline-4 outline-transparent  transition-all group-hover:outline-orange-500 ">
                <img
                  src={popMovie}
                  alt="popMovie"
                  className="  aspect-auto object-cover rounded-xl outline outline-4 outline-transparent  transition-all group-hover:brightness-50"
                  loading="lazy"
                />
                <a href="https://pop-movie.vercel.app/" target="_blank">
                  <div className="absolute inset-0 gradient opacity-0 group-hover:opacity-100 transition-all rounded-xl"></div>
                </a>
                <div class="absolute opacity-0 group-hover:opacity-100 bottom-0 left-0 w-full p-4 flex items-center justify-between gap-2 transition-all ">
                  <a
                    class="hover:text-orange-500  text-base md:text-2xl font-semibold hover:text-primary-orange transition-all flex-grow truncate text-white"
                    href="https://pop-movie.vercel.app/"
                    target="_blank"
                  >
                    PoP Movie
                  </a>
                  <a
                    href="https://github.com/nitinjha04/POP-Movie"
                    target="_blank"
                    class="h-10 md:h-12 text-2xl aspect-square bg-white flex items-center justify-center rounded-full text-black border-2 border-white hover:text-white hover:bg-transparent transition-all"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://pop-movie.vercel.app/"
                    target="_blank"
                    class="h-10 md:h-12 text-xl aspect-square bg-white flex items-center justify-center rounded-full text-black border-2 border-white hover:text-white hover:bg-transparent transition-all"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                    >
                      <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Projects;
