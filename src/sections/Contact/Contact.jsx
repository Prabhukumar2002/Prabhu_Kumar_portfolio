import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <div className="container">

        <div className="section-header text-center">

          <h2>Get In Touch</h2>

          <p>
            I'm available for freelance projects, full-time opportunities,
            and collaborations. Let's build something amazing together.
          </p>

        </div>

        <div className="row g-5">

          {/* Contact Information */}

          <div className="col-lg-5">

            <div className="contact-info">

              <div className="info-card">

                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email</h5>
                  <p>prabhukumar@example.com</p>
                </div>

              </div>

              <div className="info-card">

                <div className="info-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h5>Phone</h5>
                  <p>+91 XXXXX XXXXX</p>
                </div>

              </div>

              <div className="info-card">

                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5>Location</h5>
                  <p>Karnataka, India</p>
                </div>

              </div>

              <div className="info-card">

                <div className="info-icon">
                  <FaLinkedin />
                </div>

                <div>
                  <h5>LinkedIn</h5>
                  <p>linkedin.com/in/yourprofile</p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="col-lg-7">

            <div className="contact-form">

              <h3>Send a Message</h3>

              <form>

                <div className="mb-3">

                  <label>Name</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />

                </div>

                <div className="mb-3">

                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                </div>

                <div className="mb-3">

                  <label>Subject</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />

                </div>

                <div className="mb-4">

                  <label>Message</label>

                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>

                </div>

                <button className="btn btn-primary send-btn">

                  <FaPaperPlane />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;