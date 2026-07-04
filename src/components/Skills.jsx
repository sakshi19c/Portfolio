function Skills() {
  const frontendSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "REST API", level: 70 },
  ];

  return (
    <section id="skills" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Skills</h1>
        <p className="text-muted">
          Technologies I use to build responsive and full-stack web
          applications.
        </p>
      </div>

      <div className="row">

        {/* Frontend Skills */}
        <div className="col-lg-6 mb-5">
          <h3 className="fw-bold text-primary mb-4">
            Frontend Development
          </h3>

          {frontendSkills.map((skill, index) => (
            <div className="mb-4" key={index}>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div
                className="progress"
                style={{ height: "10px", borderRadius: "10px" }}
              >
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend Skills */}
        <div className="col-lg-6">
          <h3 className="fw-bold text-success mb-4">
            Backend Development
          </h3>

          {backendSkills.map((skill, index) => (
            <div className="mb-4" key={index}>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div
                className="progress"
                style={{ height: "10px", borderRadius: "10px" }}
              >
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;