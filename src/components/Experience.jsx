function Experience() {
  const experience = [
    {
      year: "2025 - Present",
      badge: "primary",
      title: "Frontend Developer",
      company: "Personal Projects",
      companyColor: "primary",
      description:
        "Building modern and responsive web applications using React, JavaScript, Bootstrap, CSS, and REST APIs. Developed projects including BrainSync AI, Bank Management System, and a personal portfolio.",
    },
    {
      year: "2024 - Present",
      badge: "success",
      title: "B.Tech Information Technology",
      company: "AKTU University",
      companyColor: "success",
      description:
        "Pursuing a Bachelor's degree in Information Technology while enhancing skills in Full Stack Development, Data Structures, DBMS, Cybersecurity, and problem solving through academic and personal projects.",
    },
  ];

  return (
    <section id="experience">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="experience-title">Work Experience</h2>
          <p className="experience-subtitle">
            My journey in technology and software development.
          </p>
        </div>

        <div className="row g-4">

          {experience.map((item, index) => (
            <div className="col-lg-6" key={index}>

              <div className="experience-card">

                <span className={`badge bg-${item.badge}`}>
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <h5 className={`text-${item.companyColor}`}>
                  {item.company}
                </h5>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;