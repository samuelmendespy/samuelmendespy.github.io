import React from "react";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    technologies: string[];
    screenshot: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 transform hover:scale-105 transition-transform duration-300">
      <img
        src={project.screenshot}
        alt={`Screenshot do projeto ${project.name}`}
        className="w-full h-48 object-cover rounded-md mb-4 border border-gray-700"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =  `https://placehold.co/360x240/1f2937/d1d5db?text=${encodeURIComponent(
            project.name
          )}`;
        }}
      />
      <h3 className="text-2xl font-bold mb-2 text-blue-300">{project.name}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
