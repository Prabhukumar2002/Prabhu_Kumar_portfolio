import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import bankingImage from "../../assets/projects/projects.jpg";
import portfolioImage from "../../assets/projects/projects.jpg";
import hrImage from "../../assets/projects/projects.jpg";
import crmImage from "../../assets/projects/projects.jpg";

const projects = [
  {
    title: "Banking ERP",
    image: bankingImage,
    description:
      "Enterprise banking software with deposits, loans, reports and customer management.",
    technologies: [
      "Angular",
      "ASP.NET Core",
      "PostgreSQL",
      "Bootstrap",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Portfolio Website",
    image: portfolioImage,
    description:
      "Personal portfolio built using React with Dark/Light mode and responsive design.",
    technologies: [
      "React",
      "Bootstrap",
      "CSS",
      "Responsive",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "HR Management",
    image: hrImage,
    description:
      "Employee management system including payroll, attendance and leave tracking.",
    technologies: [
      "React",
      ".NET Core",
      "SQL Server",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Startup CRM",
    image: crmImage,
    description:
      "Customer relationship management software for startups with lead tracking.",
    technologies: [
      "Angular",
      "REST API",
      "PostgreSQL",
    ],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="container">

        <div className="section-header text-center">
          <h2>My Projects</h2>

          <p>
            Some of the projects I have worked on.
          </p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (

            <div
              className="col-lg-6"
              key={index}
            >

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="tech-list">

                    {project.technologies.map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="project-buttons">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <FaGithub /> GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;