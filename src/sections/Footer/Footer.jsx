import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* CTA */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-box">

            <h2>
              Ready to Build Your Next Project?
            </h2>

            <p>
              Let's discuss your ideas and create modern, scalable and
              high-quality software together.
            </p>

            <div className="code-window">

              <div className="window-header">

                <span className="red"></span>

                <span className="yellow"></span>

                <span className="green"></span>

              </div>

              <pre>
{`const developer = "Prabhu Kumar";

function buildProject(idea){
   return "Professional Software";
}

deploy(idea);`}
              </pre>

            </div>

            <a
              href="#contact"
              className="btn btn-light btn-lg mt-4"
            >
              Start a Project
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <div className="container footer-content">

          <div>

            © {new Date().getFullYear()} Prabhu Kumar P H

          </div>

          <div className="footer-icons">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">

              <FaEnvelope />

            </a>

          </div>

          <div>

            Made with ❤️ using React

          </div>

        </div>

      </footer>

      {/* Scroll Button */}

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

    </>
  );
};

export default Footer;