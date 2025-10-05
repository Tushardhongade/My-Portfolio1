import React from "react";
import {
  FaHeart,
  FaReact,
  FaCode,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Tushardhongade",
      name: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/tushardhongade",
      name: "LinkedIn",
    },
    {
      icon: FaSquareFacebook,
      href: "https://www.facebook.com/yourusername",
      name: "Facebook",
    },
    {
      icon: IoLogoInstagram,
      href: "https://www.instagram.com/devtushar9",
      name: "Instagram",
    },
    {
      icon: FaTelegram,
      href: "https://t.me/yourusername",
      name: "Telegram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-900 border-t border-zinc-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2318a995' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#18a995] rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Tushar <span className="text-[#18a995]">Dhongade</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  Web Developer & Designer
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating beautiful and functional web experiences with modern
              technologies. Let's build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#18a995] transition-colors duration-200">
                <FaEnvelope className="text-sm" />
                <span className="text-sm">devtushar101@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#18a995] transition-colors duration-200">
                <FaPhone className="text-sm" />
                <span className="text-sm">+91 8080881728</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#18a995] transition-colors duration-200">
                <FaMapMarkerAlt className="text-sm" />
                <span className="text-sm">Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Connect With Me */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Let's Connect
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#18a995]"></span>
            </h4>
            <p className="text-gray-400 mb-6 text-sm">
              Feel free to reach out for collaborations or just a friendly hello
            </p>

            {/* Social Links - Fixed Responsiveness */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-800 hover:bg-[#18a995] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#18a995]/20 flex-shrink-0"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group bg-zinc-800 hover:bg-[#18a995] text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#18a995]/20 w-full sm:w-auto flex items-center justify-center gap-2"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-lg group-hover:animate-bounce" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-8 lg:mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

            {/* Made With Love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using</span>
              <FaReact className="text-[#18a995] animate-spin-slow" />
              <span>React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#18a995] to-transparent"></div>
    </footer>
  );
};

export default Footer;
