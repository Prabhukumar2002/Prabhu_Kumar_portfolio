import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Image - First on Mobile, Second on Desktop */}
          <div className="col-lg-6 order-1 order-lg-2 text-center">

            <div className="hero-image-wrapper">
              <img
                src={profileImage}
                alt="Prabhu Kumar"
                className="hero-image img-fluid"
              />
            </div>

          </div>

          {/* Content - Second on Mobile, First on Desktop */}
          <div className="col-lg-6 order-2 order-lg-1 hero-content">

            <span className="hero-greeting">
              👋 Hello, I'm
            </span>

            <h1 className="hero-name">
              Prabhu Kumar P H
            </h1>

            <h2 className="hero-role">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Angular Developer",
                  2000,
                  "React Developer",
                  2000,
                  ".NET Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="hero-description">
              Passionate Full Stack Developer specializing in Angular,
              React, ASP.NET Core, C#, PostgreSQL, and modern web
              technologies. I enjoy creating scalable,
              responsive and user-friendly applications.
            </p>

            <div className="hero-buttons">

              <a
                href="#contact"
                className="btn btn-primary btn-lg"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                className="btn btn-outline-light btn-lg ms-lg-3 mt-3 mt-lg-0"
                download
              >
                Download Resume
              </a>

            </div>

            <div className="hero-social">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/prabhu-kumar-p-h-74a7762b0"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:yourmail@gmail.com">
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;