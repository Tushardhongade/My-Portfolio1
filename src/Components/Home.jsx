import React from "react";
import DP from "./Images/profiles.png";
import whatido from "./Images/what.png";
import html from "./Images//icons/html.png";
import css from "./Images//icons/css.png";
import js from "./Images//icons/js.jpg";
import nodejs from "./Images/icons/nodejs.svg";
import react_js from "./Images/icons/React.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="#Home">
        <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center px-4 sm:px-6 lg:px-[5%] py-8 lg:py-0">
          {/* Text Content */}
          <div className="w-full lg:w-[30rem] flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white Heading">
              Tushar G.{" "}
              <span className="text-teal-400 text-5xl sm:text-6xl lg:text-8xl font-bold block lg:inline">
                Dhongade
              </span>
            </h1>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white my-4 lg:my-4">
              Web Developer & Designer
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 py-6 lg:py-10 justify-center lg:justify-start w-full">
              <a
                href="mailto:devtushar101@gmail.com"
                className="w-full sm:w-auto"
              >
                <div className="bg-[#18a995] p-3 lg:p-2 rounded-md cursor-pointer text-center hover:bg-teal-600 transition-colors duration-200 text-lg lg:text-base">
                  Hire Me
                </div>
              </a>
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1VQrjtw-GDZ-lhN3ffTIUfRGP4ZkeAgvQ&export=download"
                className="w-full sm:w-auto"
              >
                <div className="bg-[#18a995] p-3 lg:p-2 rounded-md cursor-pointer text-center hover:bg-teal-600 transition-colors duration-200 text-lg lg:text-base">
                  Download CV
                </div>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl md:rounded-[50%] overflow-hidden order-1 lg:order-2">
            <img
              src={DP}
              alt="Tushar G. Dhongade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-20">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold drop-shadow-xl mt-8 lg:mt-10 text-center">
              What I Do ?
            </h2>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full min-h-[100vh] py-8 lg:py-0">
              {/* Image Section */}
              <div className="w-full lg:w-[50%] flex justify-center lg:justify-start mb-8 lg:mb-0">
                <img
                  src={whatido}
                  alt="What I Do"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start justify-start text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 lg:mb-0">
                  Full Stack Developer
                </h3>

                {/* Tech Icons */}
                <div className="w-full">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
                    <img
                      className="rounded-[50%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
                      src={html}
                      alt="HTML"
                    />
                    <img
                      src={css}
                      alt="CSS"
                      className="rounded-[50%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
                    />
                    <img
                      src={js}
                      alt="JavaScript"
                      className="rounded-[50%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
                    />
                    <img
                      src={nodejs}
                      alt="Node.js"
                      className="bg-white p-1 sm:p-2 rounded-[50%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
                    />
                    <img
                      src={react_js}
                      alt="React"
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-[50%]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 lg:mt-20 w-full">
                  <ul className="space-y-4">
                    <li className="text-lg sm:text-xl text-[#8391AD] leading-8 sm:leading-10">
                      ⚡ Building responsive website front end using React-Redux
                    </li>
                    <li className="text-lg sm:text-xl text-[#8391AD] leading-8 sm:leading-10">
                      ⚡ Creating responsive web designs that work on all
                      devices
                    </li>
                    <li className="text-lg sm:text-xl text-[#8391AD] leading-8 sm:leading-10">
                      ⚡ Developing interactive user interfaces with modern
                      frameworks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
