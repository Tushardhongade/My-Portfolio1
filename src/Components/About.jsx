import React from "react";
import Card from "./Card";
import Certificate from "./Certification";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import progress from "./Images/progress.svg";

function About() {
  return (
    <section id="About" className="bg-zinc-900">
      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 py-8 lg:py-0 border-b-2 border-zinc-800">
        {/* Left Section - Visual */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-2xl">
            <div className="relative z-10">
              <img
                src={progress}
                className="w-full h-auto animate-float"
                alt="Progress visualization"
              />
            </div>
            <h1 className="mt-8 lg:mt-0 font-bold text-4xl sm:text-5xl lg:text-7xl text-center lg:absolute lg:top-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-white bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              WHO AM I ?
            </h1>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-4 py-8 lg:py-10 order-1 lg:order-2">
          <div className="max-w-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4 relative inline-block">
                ABOUT ME
                <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
              </h2>
            </div>

            {/* Description */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50 shadow-2xl mb-8">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                I'm a{" "}
                <span className="text-teal-400 font-semibold">
                  Web Developer & Designer
                </span>
                . As a passionate and detail-oriented developer, I'm excited to
                bring my skills and enthusiasm to the tech industry. With a
                strong foundation in modern web technologies, I specialize in
                creating visually appealing and user-friendly web applications.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50 shadow-2xl">
              <div className="text-center">
                <h3 className="font-bold text-xl sm:text-2xl text-white mb-6 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                  Currently Working With
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                </h3>

                <div className="flex justify-center items-center gap-4 sm:gap-6">
                  {[
                    {
                      Icon: SiMongodb,
                      name: "MongoDB",
                      color: "text-green-500",
                    },
                    {
                      Icon: SiExpress,
                      name: "Express",
                      color: "text-gray-300",
                    },
                    { Icon: FaReact, name: "React", color: "text-blue-400" },
                    {
                      Icon: FaNodeJs,
                      name: "Node.js",
                      color: "text-green-600",
                    },
                  ].map(({ Icon, name, color }, index) => (
                    <div
                      key={name}
                      className="flex flex-col items-center group"
                    >
                      <div className="relative">
                        <Icon
                          className={`text-3xl sm:text-4xl lg:text-5xl ${color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 backdrop-blur-sm p-2 rounded-xl bg-zinc-900/50 border border-zinc-700/50`}
                        />
                        <div className="absolute inset-0 bg-teal-400/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Degrees */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        {/* Degree Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block">
              EDUCATION
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-400 rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-400 rounded-full blur-sm"></div>
            </h2>
            <p className="text-gray-400 text-lg">
              My academic journey and qualifications
            </p>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <Card />
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block">
              CERTIFICATIONS
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-400 rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-400 rounded-full blur-sm"></div>
            </h2>
            <p className="text-gray-400 text-lg">
              Professional certifications and achievements
            </p>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <Certificate />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
