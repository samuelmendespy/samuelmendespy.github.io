import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import projectsData from "./data.json";

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const sections = ["home", "about", "projects", "contact"];
  const projectsLength = projectsData.length;

  
  const handleScroll = useCallback(
    (direction: string) => {
      if (isScrolling) return;
      setIsScrolling(true);
      const isProjectSection = sections[currentSectionIndex] === "projects";

      if (isProjectSection) {
        if (direction === "down") {
          if (currentProjectIndex < projectsLength - 1) {
            setCurrentProjectIndex((prevIndex) => prevIndex + 1);
          } else {
            setCurrentSectionIndex((prevIndex) =>
              Math.min(prevIndex + 1, sections.length - 1)
            );
            setCurrentProjectIndex(0);
          }
        } else if (direction === "up") {
          if (currentProjectIndex > 0) {
            setCurrentProjectIndex((prevIndex) => prevIndex - 1);
          } else {
            setCurrentSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
          }
        }
      } else {
        if (direction === "down") {
          setCurrentSectionIndex((prevIndex) =>
            Math.min(prevIndex + 1, sections.length - 1)
          );
        } else if (direction === "up") {
          setCurrentSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    },
    [currentSectionIndex, isScrolling, currentProjectIndex, sections.length, projectsLength]
  );

  const handleKeyDown = useCallback(
    (event: { key: string }) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        handleScroll("down");
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        handleScroll("up");
      }
    },
    [handleScroll]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        handleScroll("down");
      } else {
        handleScroll("up");
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentProject = projectsData[currentProjectIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden font-inter bg-cyan-950 text-white">
      <button
        onClick={() => handleScroll("up")}
        disabled={currentSectionIndex === 0 && currentProjectIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg z-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#8592;
      </button>

      <button
        onClick={() => handleScroll("down")}
        disabled={
          currentSectionIndex === sections.length - 1 &&
          (currentSectionIndex !== 2 || currentProjectIndex === projectsLength - 1)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg z-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#8594;
      </button>
      <Section isActive={currentSectionIndex === 0}>
        <Home />
      </Section>

      <Section isActive={currentSectionIndex === 1}>
        <About />
      </Section>

      <Section isActive={currentSectionIndex === 2}>
        <div className="text-center max-w-6xl mx-auto p-8 rounded-xl animate-fade-in flex flex-col justify-center items-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-300">
            Meus Projetos
          </h2>
          <div className="w-full flex-grow flex justify-center items-center">
            {currentSectionIndex === 2 && currentProject ? (
              <ProjectCard project={currentProject} />
            ) : (
              <p>Muitas requisições... Tente novamente.</p>
            )}
          </div>
        </div>
      </Section>

      <Section isActive={currentSectionIndex === 3}>
        <Contact />
      </Section>
    </div>
  );
}

export default App;