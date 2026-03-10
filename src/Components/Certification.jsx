import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiExternalLink, 
  FiEye, 
  FiX, 
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiStar,
  FiChevronRight
} from "react-icons/fi";
import certificate2 from "./Images/certificate2.png";
import certificate4 from "./Images/certificate4.png";
import certificate5 from "./Images/certificate5.png";
import certificate6 from "./Images/certificateinfosys.png";
import fswd from "./Images/fswd.png";

const Certification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filter, setFilter] = useState("all");

  const certificates = [
    {
      id: 1,
      image: fswd,
      link: "https://drive.google.com/file/d/1NpUftc6GS6pD_3Pg5dlmr3Dwpo4aizR4/view?usp=sharing",
      title: "Full Stack Web Development",
      platform: "SimpliLearn",
      category: "Web Development",
      date: "2024",
      credentialId: "FSWD-2024-001",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      image: certificate2,
      link: "https://drive.google.com/file/d/1izF7QLQ94vwtxmXt75mmuHd1lbrohYqt/view?usp=sharing",
      title: "React.js Mastery",
      platform: "Great Learning",
      category: "Frontend",
      date: "2024",
      credentialId: "REACT-GL-2024",
      skills: ["React", "Hooks", "Redux", "Context API"],
    },
    {
      id: 3,
      image: certificate4,
      link: "https://drive.google.com/file/d/1OA6Wfnsr7LpGQ60bwOtFDVc9Vij5JlgB/view?usp=sharing",
      title: "Python Programming",
      platform: "Geekster",
      category: "Programming",
      date: "2023",
      credentialId: "PY-GEEK-2023",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
    },
    {
      id: 4,
      image: certificate5,
      link: "https://drive.google.com/file/d/1PrLt8I4tf-zLGUODue3cNvPvNYkUQ8wx/view?usp=sharing",
      title: "Data Science with Python",
      platform: "IBM",
      category: "Data Science",
      date: "2024",
      credentialId: "IBM-DS-101",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
    },
    {
      id: 5,
      image: certificate6,
      link: "https://drive.google.com/file/d/1tYea8dFUypoRu8x0CAsLOs0Qn2gB7Vuo/view?usp=sharing",
      title: "IoT: Automatic Street Light",
      platform: "Infosys Springboard",
      category: "IoT",
      date: "2023",
      credentialId: "INFY-IOT-2023",
      skills: ["IoT", "Arduino", "Sensors", "Embedded Systems"],
    },
  ];

  const categories = ["all", ...new Set(certificates.map(c => c.category))];

  const filteredCertificates = filter === "all" 
    ? certificates 
    : certificates.filter(c => c.category === filter);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* Background Gradient */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 px-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <FiAward className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-white/90 text-sm">Professional Credentials</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Certifications &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 block sm:inline">
                {" "}Achievements
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Showcasing my commitment to continuous learning and professional growth through industry-recognized certifications
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg shadow-teal-500/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {category === "all" && ` (${certificates.length})`}
              </button>
            ))}
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20">
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/0 to-blue-500/0 group-hover:from-teal-400/20 group-hover:via-teal-400/5 group-hover:to-blue-500/20 transition-all duration-700"></div>
                  
                  {/* Image Container */}
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => openModal(certificate)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Platform Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                          <FiStar className="w-3 h-3" />
                          {certificate.platform}
                        </span>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                          {certificate.category}
                        </span>
                      </div>
                      
                      {/* Preview Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                        <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                          <FiEye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors">
                      {certificate.title}
                    </h3>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300">
                          +{certificate.skills.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{certificate.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiBookOpen className="w-4 h-4" />
                        <span className="truncate">ID: {certificate.credentialId.slice(0, 8)}...</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => openModal(certificate)}
                        className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <FiEye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Preview
                      </button>
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-teal-500/25"
                      >
                        <FiExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium">Explore All Certificates</span>
              <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 border-b border-white/10">
                <div className="pr-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <span className="flex items-center gap-2">
                      <FiAward className="w-4 h-4 text-teal-400" />
                      {selectedCertificate.platform}
                    </span>
                    <span className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4 text-teal-400" />
                      {selectedCertificate.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FiBookOpen className="w-4 h-4 text-teal-400" />
                      ID: {selectedCertificate.credentialId}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <FiX className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Certificate Image */}
                  <div className="lg:w-2/3">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="lg:w-1/3 space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gradient-to-r from-teal-400/20 to-blue-500/20 text-teal-300 rounded-lg text-sm border border-teal-400/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Credential Details</h4>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-400">Issuing Organization</dt>
                          <dd className="text-white font-medium">{selectedCertificate.platform}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-400">Credential ID</dt>
                          <dd className="text-white font-medium">{selectedCertificate.credentialId}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-400">Issue Date</dt>
                          <dd className="text-white font-medium">{selectedCertificate.date}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-white/10">
                <div className="flex gap-4">
                  <button
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCertificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white rounded-xl font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <FiExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default Certification;
