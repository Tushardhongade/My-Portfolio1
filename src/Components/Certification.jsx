import React, { useState } from "react";
import certificate1 from "./Images/Certificate1.png";
import certificate2 from "./Images/certificate2.png";
import certificate3 from "./Images/certificate3.png";
import certificate4 from "./Images/certificate4.png";
import certificate5 from "./Images/certificate5.png";

const Certification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      image: certificate2,
      link: "https://drive.google.com/drive/folders/1IOarot3UxkF7QBOsxengVvDSur8zLEML",
      title: "React.js Completion Certificate",
      platform: "Great Learning",
    },
    {
      id: 2,
      image: certificate3,
      link: "https://drive.google.com/drive/folders/16hMrMxon0rB0U0APm_7l8-hlF7dv_hNg",
      title: "React.js Mastery",
      platform: "Geekster",
    },
    {
      id: 3,
      image: certificate4,
      link: "https://drive.google.com/drive/folders/1nYhd5bW4PJ8a1F_IZrU9LpIS9hxOGuiT",
      title: "JavaScript Advanced",
      platform: "Geekster",
    },
    {
      id: 4,
      image: certificate1,
      link: "https://drive.google.com/drive/folders/1ItvYiZ3_CoMNxdsaaMUQvKVE1vcch7_c",
      title: "Full Stack Development",
      platform: "Geekster",
    },
    {
      id: 5,
      image: certificate5,
      link: "https://drive.google.com/drive/folders/1WhKYrHjEOr2KvWMrxLnPYns1zn2Dvw83",
      title: "Cloud Computing",
      platform: "IBM",
    },
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through recognized
            certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700/50 shadow-xl hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Certificate Image Container */}
              <div
                className="relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 sm:h-56 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-semibold text-lg">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-teal-500/90 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                    {certificate.platform}
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="mt-4">
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                  {certificate.title}
                </h3>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openModal(certificate)}
                    className="flex-1 bg-zinc-700/50 hover:bg-teal-500/20 text-gray-300 hover:text-teal-300 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 border border-zinc-600/50 hover:border-teal-400/30"
                  >
                    Preview
                  </button>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded-lg text-sm font-medium text-center transition-all duration-300 hover:shadow-glow"
                  >
                    Verify
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Button for Mobile */}
        <div className="text-center mt-8 lg:hidden">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-glow transform hover:scale-105">
            View All Certificates
          </button>
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-zinc-700/50 shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-zinc-700/50">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-400 mt-1">
                  {selectedCertificate.platform}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-200"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-4 p-6 border-t border-zinc-700/50">
              <button
                onClick={closeModal}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-medium transition-all duration-300"
              >
                Close
              </button>
              <a
                href={selectedCertificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-medium text-center transition-all duration-300 hover:shadow-glow"
              >
                Verify Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certification;
