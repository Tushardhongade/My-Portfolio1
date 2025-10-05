import React from "react";
import contact from "./Images/contact.png";
import { FaSquareFacebook, FaLinkedin} from "react-icons/fa6";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaFileDownload,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      icon: FaSquareFacebook,
      href: "https://www.facebook.com/people/Tushar-Dhongade/pfbid02v1UCLosa2QLbbEA2e67DAbpoaysCrqQxe99FCSK4SGsUeYJdtXWpHhpEfF3Zy2Xel/",
      name: "Facebook",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/tushardhongade/",
      name: "LinkedIn",
    },
    {
      icon: IoLogoInstagram,
      href: "https://www.instagram.com/devtushar9",
      name: "Instagram",
    },
 
  ];

  return (
    <section
      id="contact"
      className="w-full bg-zinc-900 py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="text-[#18a995]">Touch</span>
          </h2>
        
        </div>

        {/* Contact & Social Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 mb-20 lg:mb-24">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#18a995] to-teal-600 rounded-full p-4 shadow-2xl animate-float">
              <div className="w-full h-full bg-[#000] bg-opacity-70 rounded-full overflow-hidden border-4 border-[#18a995]/30">
                <img
                  src={contact}
                  alt="Contact"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-[#18a995]/20 animate-ping-slow"></div>
            </div>
          </div>

          {/* Contact Content */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-[#000] bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-zinc-800 shadow-xl max-w-lg w-full">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Let's Connect
                </h3>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  I'm available on social media. Message me and I'll reply
                  within 24 hours. I can help you with React, frontend
                  development, and creating amazing web experiences.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-gray-300">
                    <FaEnvelope className="text-[#18a995] text-xl" />
                    <span>devtushar101@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <FaPhone className="text-[#18a995] text-xl" />
                    <span>+91 8080881728</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4 text-center lg:text-left">
                    Available On
                  </h4>
                  <div className="flex justify-center lg:justify-start gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-zinc-800 hover:bg-[#18a995] p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#18a995]/20"
                        aria-label={social.name}
                      >
                        <social.icon className="text-2xl text-[#18a995] group-hover:text-white transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume Button */}
                <a
                  href="https://drive.google.com/file/d/1PGX2IK4pZONVmOqmj6h4dVX3LYPH2vtb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#18a995] hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#18a995]/30"
                >
                  <FaFileDownload className="text-lg" />
                  See My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        

        {/* Address & Map Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          {/* Address Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-[#000] bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-zinc-800 shadow-xl max-w-lg w-full">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 flex items-center gap-3 justify-center lg:justify-start">
                  <FaMapMarkerAlt className="text-[#18a995]" />
                  Location
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Address
                    </h4>
                    <p className="text-gray-300 text-lg">
                      Talegaon Dabhade, Pune, Maharashtra, India
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Availability
                    </h4>
                    <p className="text-gray-300 text-lg">
                      Open to remote opportunities and freelance projects
                    </p>
                  </div>
                </div>

                {/* Map Button */}
                <a
                  href="https://www.google.com/maps/place/Tonape+Nivas/@18.7445303,73.6765871,21z/data=!4m14!1m7!3m6!1s0x3bc2b38bce4fb999:0xe6cfe648ca2ad48b!2sTonape+Nivas!8m2!3d18.7445967!4d73.6766528!16s%2Fg%2F11f5qg8_x7!3m5!1s0x3bc2b38bce4fb999:0xe6cfe648ca2ad48b!8m2!3d18.7445967!4d73.6766528!16s%2Fg%2F11f5qg8_x7?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 border-2 border-[#18a995] text-[#18a995] hover:bg-[#18a995] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="bg-gradient-to-br from-[#18a995] to-teal-600 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-[#000] bg-opacity-70 rounded-xl overflow-hidden border-4 border-[#18a995]/30">
                  <a
                    href="https://www.google.com/maps/place/Tonape+Nivas/@18.7445303,73.6765871,21z/data=!4m14!1m7!3m6!1s0x3bc2b38bce4fb999:0xe6cfe648ca2ad48b!2sTonape+Nivas!8m2!3d18.7445967!4d73.6766528!16s%2Fg%2F11f5qg8_x7!3m5!1s0x3bc2b38bce4fb999:0xe6cfe648ca2ad48b!8m2!3d18.7445967!4d73.6766528!16s%2Fg%2F11f5qg8_x7?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer group"
                  >
                    <img
                      src="https://www.weather-forecast.com/locationmaps/Talegaon-Dabhade.10.gif"
                      alt="Talegaon Dabhade Location Map"
                      className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-[#18a995] text-white px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Click to View Full Map
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Location Pin */}
              <div className="absolute -top-4 -right-4 bg-[#18a995] text-white p-3 rounded-full shadow-lg">
                <FaMapMarkerAlt className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
