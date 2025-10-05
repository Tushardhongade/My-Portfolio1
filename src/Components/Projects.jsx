import React from "react";
import ProjectCard from "./ProjectCard";
import { FaRocket, FaCode, FaLightbulb } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#18a995]/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#18a995]/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-60 h-60 bg-[#18a995]/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section with Your Theme */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#18a995]/20 rounded-2xl flex items-center justify-center">
              <FaCode className="text-[#18a995] text-xl" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              My{" "}
              <span className="text-[#18a995]">
                Projects
              </span>
            </h2>
            <div className="w-12 h-12 bg-[#18a995]/20 rounded-2xl flex items-center justify-center">
              <FaLightbulb className="text-[#18a995] text-xl" />
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my portfolio of creative solutions and innovative applications. 
            Each project represents a unique challenge and learning opportunity.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#18a995] mb-2">2</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#18a995] mb-2">5+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
            <div className="w-2 h-32 bg-gradient-to-b from-[#18a995] to-teal-600 rounded-full"></div>
          </div>

          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
            <div className="w-2 h-32 bg-gradient-to-b from-[#18a995] to-teal-600 rounded-full"></div>
          </div>

          {/* Project Cards */}
          <ProjectCard />
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-[#000] bg-opacity-70 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 text-lg">
                  Let&apos;s work together to bring your ideas to life with cutting-edge technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#18a995] hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#18a995]/25 transform hover:scale-105 flex items-center gap-3">
                  <FaRocket className="text-lg" />
                  Start a Project
                </button>
                <button className="group border-2 border-[#18a995] text-[#18a995] hover:bg-[#18a995] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  View All Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="hidden lg:block">
          <div className="absolute top-20 left-10 animate-float text-[#18a995]/20 text-4xl">
            &lt;/&gt;
          </div>
          <div
            className="absolute top-40 right-20 animate-float text-[#18a995]/20 text-3xl"
            style={{ animationDelay: "1s" }}
          >
            {`{ }`}
          </div>
          <div
            className="absolute bottom-40 left-20 animate-float text-[#18a995]/20 text-4xl"
            style={{ animationDelay: "2s" }}
          >
            [ ]
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Projects;
