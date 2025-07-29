import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">
        Sobre Mim
      </h2>
      <p className="text-md md:text-lg leading-relaxed mb-6">
        Sou estudante de Ciência da Computação e tenho experiência embackend,
        focado em construir sistemas eficientes e confiáveis. Minha principal
        stack inclui Spring Boot, PostgreSQL e MongoDB.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-200">
            Educação
          </h3>
          <ul className="space-y-4 text-white">
    <li>
      <h3 className="text-xl font-semibold text-teal-400">Bacharelado em Ciência da Computação</h3>
      <p className="text-sm text-gray-300">2025-2028</p>
      <p className="text-md text-gray-200">Instituição: Gran Centro Universitário</p>
    </li>
  </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-200">
            Cursos e Certificações
          </h3>
          <ul className="list-disc list-inside text-md md:text-lg">
            <li>Certificação Inglês C2</li>
            <li>Curso Engenharia de Prompts</li>
            <li>Curso Kubernetes</li>
            <li>Curso AWS</li>
            <li>Bootcamp Java Cloud Native</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-left">
        <h3 className="text-2xl font-semibold mb-3 text-blue-200">
          Tecnologias
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Java",
            "Kotlin",
            "Spring Boot",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "React.js",
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Docker",
            "Gradle",
            "Kubernetes",
            "AWS",
          ].map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
