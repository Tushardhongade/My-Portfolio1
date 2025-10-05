import React from "react";
import proj1 from "./Images/proj1.png";
import proj2 from "./Images/proj2.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaGithub, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
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
      id: 2,
      title: "Toggle Theme",
      description: "Sleek theme switcher with smooth dark/light transitions.",
      image: proj2,
      technologies: [
        { icon: IoLogoHtml5, name: "HTML", color: "text-orange-500" },
        { icon: IoLogoCss3, name: "CSS", color: "text-blue-500" },
      ],
      liveLink: "https://toggle-theme-mu.vercel.app/",
      githubLink: "https://github.com/Tushardhongade/Toggle-Theme.git",
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
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="group bg-[#070708] rounded-xl overflow-hidden border border-zinc-800 hover:border-[#18a995] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#18a995]/10"
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
              >
                {project.title}
              </Typography>

              {/* Project Description */}
              <Typography
                variant="body2"
                className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed"
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
                className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-gray-300 text-xs border border-zinc-800 hover:border-[#18a995] transition-all duration-300"
                startIcon={<FaGithub className="text-sm" />}
              >
                Code
              </Button>
              <Button
                size="small"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#18a995] hover:bg-[#138a7a] text-white text-xs transition-all duration-300"
                startIcon={<FaExternalLinkAlt className="text-sm" />}
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
          className="border-[#18a995] text-[#18a995] hover:bg-[#18a995] hover:text-white px-6 py-2 text-sm font-medium transition-all duration-300"
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
