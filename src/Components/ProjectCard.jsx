import React from "react";
import proj from "./Images/proj1.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Master Portfolio",
      description:
        "A modern, responsive portfolio website built with React.js and Tailwind CSS featuring smooth animations.",
      image: proj,
      technologies: [
        { icon: FaReact, name: "React", color: "text-[#18a995]" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-[#18a995]" },
      ],
      liveLink: "https://my-portfolio1-gamma.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/My-Portfolio1.git",
      features: [
        "Responsive Design",
        "Dark Mode",
        "Smooth Animations",
        "Contact Form",
      ],
    },
    {
      id: 2,
      title: "Toggle-theme",
      description:
        "A Simple Toggle-theme button that can switch theme from dark to light and light to dark .",
      image: proj,
      technologies: [
        { icon: FaReact, name: "React", color: "text-[#18a995]" },
        { icon: FaNodeJs, name: "Node.js", color: "text-[#18a995]" },
        { icon: SiExpress, name: "Express", color: "text-[#18a995]" },
        { icon: SiMongodb, name: "MongoDB", color: "text-[#18a995]" },
      ],
      liveLink: "https://toggle-theme-mu.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/Toggle-Theme.git",
      features: [
        "Switch Button"
      ],
    },
   

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Header Section - Matching your theme */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Featured <span className="text-[#18a995]">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web
          development and design
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="group relative bg-[#000] bg-opacity-70 rounded-xl overflow-hidden border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project Image with Overlay */}
            <div className="relative overflow-hidden">
              <CardMedia
                component="img"
                alt={project.title}
                height="200"
                image={project.image}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Live Preview Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#18a995] hover:bg-[#138a7a] text-white p-2 rounded-md transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>

            <CardContent className="p-6 bg-[#000] bg-opacity-70">
              {/* Project Title */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-white font-bold text-xl mb-3"
              >
                {project.title}
              </Typography>

              {/* Project Description */}
              <Typography
                variant="body2"
                className="text-gray-300 mb-4 leading-relaxed"
              >
                {project.description}
              </Typography>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-md text-xs border border-zinc-700"
                  >
                    <tech.icon className={`${tech.color} text-sm`} />
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#18a995] rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardActions className="p-4 pt-0 bg-[#000] bg-opacity-70 flex gap-2">
              {/* GitHub Button */}
              <Button
                size="small"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-[#18a995]"
                startIcon={<FaGithub />}
              >
                Code
              </Button>

              {/* Live Demo Button */}
              <Button
                size="small"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#18a995] hover:bg-[#138a7a] text-white transition-all duration-300"
                startIcon={<FaExternalLinkAlt />}
              >
                Live Demo
              </Button>
            </CardActions>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#18a995] transition-all duration-300 pointer-events-none"></div>
          </Card>
        ))}
      </div>

      {/* View More Projects Button */}
      <div className="text-center mt-12">
        <Button
          variant="outlined"
          className="border-[#18a995] text-[#18a995] hover:bg-[#18a995] hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
