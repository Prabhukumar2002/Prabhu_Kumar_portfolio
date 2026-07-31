import "./Experience.css";

const experiences = [
  {
    year: "2025 - Present",
    title: "Full Stack Developer",
    company: "Banking Software",
    description:
      "Developing enterprise banking applications using Angular, ASP.NET Core, C#, Entity Framework Core and PostgreSQL.",
  },
  {
    year: "2024 - 2025",
    title: "Frontend Developer",
    company: "React & Angular",
    description:
      "Built responsive web applications using React, Angular, Bootstrap and modern UI technologies.",
  },
  {
    year: "2023 - 2024",
    title: "Software Developer Trainee",
    company: "Learning Journey",
    description:
      "Worked on ASP.NET Core, SQL Server, PostgreSQL, REST API and C#.",
  },
  {
    year: "2022 - 2023",
    title: "Programming Learning",
    company: "Self Learning",
    description:
      "Started programming with HTML, CSS, JavaScript and C#.",
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        <div className="section-header text-center">
          <h2>Experience</h2>
          <p>My Professional Journey</p>
        </div>

        <div className="timeline">

          {experiences.map((item, index) => (

            <div
              key={index}
              className={`timeline-container ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <h5>{item.company}</h5>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;