import "./Skills.css";

import {
  FaAngular,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDotnet,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "Angular", icon: <FaAngular /> },
  { name: "React", icon: <FaReact /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "ASP.NET Core", icon: <SiDotnet /> },
  { name: "C#", icon: <FaCode /> },
  { name: "REST API", icon: <FaCode /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQL Server", icon: <FaDatabase /> },
  { name: "Entity Framework", icon: <SiDotnet /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Visual Studio", icon: <FaCode /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <div className="container">

        <div className="section-header text-center">

          <h2>Technical Skills</h2>

          <p>Technologies I work with every day</p>

        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-icon">

                {skill.icon}

              </div>

              <h5>{skill.name}</h5>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;