import React from "react";
import pg from "./Images/dyplogo.png";
import ug from "./Images/logo.png";

const Card = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-16 flex-col items-center py-8 lg:py-12 border-b-2 border-zinc-800">
      {/* Post-Graduation Card */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 p-4 sm:p-6 mb-8 lg:mb-12">
        {/* Logo Container */}
        <div className="order-2 lg:order-1 flex-shrink-0">
          <div className="bg-white rounded-full h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img
              src={pg}
              alt="Dr D Y Patil Institute Logo"
              className="h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36 object-contain"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="order-1 lg:order-2 flex-1 w-full lg:w-[80%] bg-zinc-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-zinc-700/50 shadow-xl hover:shadow-glow transition-all duration-300">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-teal-400 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Post-Graduation
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Institute
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                 Dr. D. Y. Patil Institute of Management And Entrepreneur Development (MCA), Varale, Pune
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Course
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Master Of Computer Application
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Duration
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  2024-2026 (OnGoing)
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Status
                </h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-400/20 text-teal-300 border border-teal-400/30">
                  Currently Pursuing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graduation Card */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 p-4 sm:p-6">
        {/* Logo Container */}
        <div className="order-2 lg:order-1 flex-shrink-0">
          <div className="bg-white rounded-full h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img
              src={ug}
              alt="Graduation Institute Logo"
              className="h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36 object-contain"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="order-1 lg:order-2 flex-1 w-full lg:w-[80%] bg-zinc-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-zinc-700/50 shadow-xl hover:shadow-glow transition-all duration-300">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-teal-400 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Graduation
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Institute
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Rajasthan Arya Arts, Shri Mithulalji Kacholiya Commerce & Shri
                  Satyanarayanji Ramkrishnaji Rathi Science Mahavidyalaya,
                  Washim
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Course
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Bachelor Of Computer Application
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Duration
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">2021-2024</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">
                  Status
                </h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-300 border border-green-400/30">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
