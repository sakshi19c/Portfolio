function Experience() {
  const experience = [
    {
      year: "2024 - Present",
      badge: "primary",
      title: "Senior Full Stack Developer",
      company: "ABC Technologies",
      companyColor: "primary",
      description:
        "Developed responsive web applications using React, Node.js and MySQL. Worked on REST APIs and dashboard development.",
    },
    {
      year: "2022 - 2024",
      badge: "success",
      title: "Frontend Developer",
      company: "XYZ Solutions",
      companyColor: "success",
      description:
        "Designed modern user interfaces using HTML, CSS, Bootstrap and React.",
    },
    {
      year: "2021 - 2022",
      badge: "warning",
      title: "Web Designer",
      company: "Web Studio",
      companyColor: "warning",
      description:
        "Created responsive websites and landing pages using Bootstrap and JavaScript.",
    },
    {
      year: "2020 - 2021",
      badge: "danger",
      title: "Intern Web Developer",
      company: "Tech Startup",
      companyColor: "danger",
      description:
        "Learned frontend development, debugging and website maintenance while working on live projects.",
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Work Experience</h2>
          <p className="text-muted">
            My professional journey and experience.
          </p>
        </div>

        <div className="row g-4">

          {experience.map((item, index) => (
            <div className="col-lg-6" key={index}>

              <div className="experience-card">

                <span className={`badge bg-${item.badge} px-3 py-2 mb-4`}>
                  {item.year}
                </span>

                <h2>{item.title}</h2>

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