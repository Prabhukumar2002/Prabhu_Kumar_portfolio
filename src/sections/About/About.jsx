import "./About.css";
import { FaArrowRight } from "react-icons/fa";

const stats = [
  {
    number: "1+",
    title: "Years Experience",
  },
  {
    number: "20+",
    title: "Projects Completed",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
  {
    number: "10+",
    title: "Technologies",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="row g-5 align-items-center">

          {/* Left Side */}

          <div className="col-lg-6">

            <h2 className="about-title">
              About Me
            </h2>

            <p>
              I'm <strong>Prabhu Kumar P H</strong>, a passionate Full Stack
              Developer specializing in Angular, React, ASP.NET Core,
              C#, PostgreSQL and modern web technologies.
            </p>

            <p>
              I enjoy building scalable enterprise banking applications,
              responsive websites and software with clean architecture
              and excellent user experience.
            </p>

            <button className="about-btn">

              Read More

              <FaArrowRight />

            </button>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <div className="row g-4">

              {stats.map((item, index) => (

                <div
                  className="col-12 col-sm-6"
                  key={index}
                >

                  <div className="stat-card">

                    <h2>{item.number}</h2>

                    <p>{item.title}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;