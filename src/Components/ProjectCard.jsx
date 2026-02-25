import React from "react";
import jobportal from "./Images/job-portal.png";
import musicapp from "./Images/music-app.png";
import devblog from "./Images/devblog.png";
import fos from "./Images/fos.png";
import FilmFinderPro from "./Images/FilFinderPro.png";

import proj1 from "./Images/proj1.png";
import proj2 from "./Images/proj2.png";
import proj3 from "./Images/proj3.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Full Stack Job Portal",
      description:
        "Job Portal is a job search app with listings and applications.",
      image: proj5,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiExpress, name: "Express", color: "text-black" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { icon: FaNodeJs, name: "Node", color: "text-green-400" },
      ],
      liveLink: "https://job-portal-zeta-blond.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/Job-Portal.git",
    },
    {
      id: 2,
      title: "Full Stack Music App",
      description:
        "Music-App is a music player app with playlists and playback controls.",
      image: proj4,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiExpress, name: "Express", color: "text-black" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { icon: FaNodeJs, name: "Node", color: "text-green-400" },
      ],
      liveLink: "https://music-app-gules-phi.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/Music_App_Backend.git",
    },
    {
      id: 3,
      title: "Master Portfolio",
      description:
        "Modern portfolio with React & Tailwind CSS featuring smooth animations.",
      image: proj1,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
      ],
      liveLink: "https://my-portfolio1-gamma.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/My-Portfolio1.git",
    },
    {
      id: 4,
      title: "Toggle Theme",
      description: "Sleek theme switcher with smooth dark/light transitions.",
      image: devblog,
      technologies: [
        { icon: IoLogoHtml5, name: "HTML", color: "text-orange-500" },
        { icon: IoLogoCss3, name: "CSS", color: "text-blue-500" },
      ],
      liveLink: "https://toggle-theme-mu.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/Toggle-Theme.git",
    },
    {
      id: 5,
      title: "Full Stack User Authentication",
      description: "User Authentication with proper validation.",
      image: proj3,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiExpress, name: "Express", color: "text-black" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { icon: FaNodeJs, name: "Node", color: "text-green-400" },
      ],
      liveLink: "https://mern-authentication-frontend-nu.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/MERN-Authentication-frontend.git",
    },
    {
      id: 6,
      title: "Blog Website",
      description: "Built a scalable MERN stack blog platform implementing JWT authentication, dynamic routing, and MongoDB-based content management system.",
      image: proj3,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiExpress, name: "Express", color: "text-black" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { icon: FaNodeJs, name: "Node", color: "text-green-400" },
      ],
      liveLink: "https://dev-blogs-xd86.vercel.app",
      githubLink: "https://github.com/TushGD/DevBlogs.git",
    },
    {
      id: 7,
      title: "Food Ordering System",
      description: "Built a full-stack application with user authentication, dynamic menu management, cart functionality, order tracking, and secure RESTful API integration using MongoDB, Express.js, React, and Node.js.",
      image: fos,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiExpress, name: "Express", color: "text-black" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { icon: FaNodeJs, name: "Node", color: "text-green-400" },
      ],
      liveLink: "https://food-ordering-system-k7gg.vercel.app",
      githubLink: "https://github.com/TushGD/Food-ordering-system",
    },
    {
      id: 8,
      title: "FilmFinderPro",
      description: "A dynamic movie discovery SPA built with React that integrates OMDB API for real-time search, features persistent favorites using localStorage, and delivers a responsive interface with custom animations and toast notifications.",
      image: FilmFinderPro,
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiExpress, name: "Express", color: "text-black" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { icon: FaNodeJs, name: "Node", color: "text-green-400" },
      ],
      liveLink: "https://filmfinderpro.vercel.app",
      githubLink: "https://github.com/TushGD/Task-Assigned.git",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Featured <span className="text-[#18a995]">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Some of my recent work showcasing web development skills
        </p>
      </div>

      {/* Compact Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group bg-[#070708] rounded-xl overflow-hidden border border-zinc-800 hover:border-[#18a995] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#18a995]/10"
            sx={{
              backgroundColor: '#070708',
              borderColor: 'rgb(39 39 42)',
              '&:hover': {
                borderColor: '#18a995',
                transform: 'scale(1.05)',
                boxShadow: '0 10px 25px rgba(24, 169, 149, 0.1)'
              }
            }}
          >
            {/* Project Image */}
            <div className="relative">
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#18a995] text-white p-2 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <CardContent className="p-4 bg-[#070708]">
              {/* Project Title */}
              <Typography
                variant="h6"
                className="text-white font-bold text-lg mb-2 line-clamp-1"
                sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}
              >
                {project.title}
              </Typography>

              {/* Project Description */}
              <Typography
                variant="body2"
                className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed"
                sx={{ color: 'rgb(209 213 219)', fontSize: '0.875rem' }}
              >
                {project.description}
              </Typography>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1 bg-zinc-900 px-2 py-1 rounded text-xs border border-zinc-800"
                  >
                    <tech.icon className={`${tech.color}`} />
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardActions className="p-3 pt-0 bg-[#070708] flex gap-2">
              <Button
                size="small"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  flex: 1,
                  backgroundColor: 'rgb(24 24 27)',
                  color: 'rgb(209 213 219)',
                  border: '1px solid rgb(39 39 42)',
                  fontSize: '0.75rem',
                  '&:hover': {
                    backgroundColor: 'rgb(39 39 42)',
                    borderColor: '#18a995'
                  }
                }}
                startIcon={<FaGithub />}
              >
                Code
              </Button>
              <Button
                size="small"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  flex: 1,
                  backgroundColor: '#18a995',
                  color: 'white',
                  fontSize: '0.75rem',
                  '&:hover': {
                    backgroundColor: '#138a7a'
                  }
                }}
                startIcon={<FaExternalLinkAlt />}
              >
                Demo
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Compact View More Button */}
      <div className="text-center mt-8">
        <Button
          variant="outlined"
          sx={{
            borderColor: '#18a995',
            color: '#18a995',
            padding: '8px 24px',
            fontSize: '0.875rem',
            fontWeight: '500',
            '&:hover': {
              backgroundColor: '#18a995',
              color: 'white',
              borderColor: '#18a995'
            }
          }}
          href="https://github.com/Tushardhongade"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More on GitHub
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
