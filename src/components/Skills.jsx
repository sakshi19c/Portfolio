function Skills() {
  const frontend = [
    { name: "HTML", value: 95, color: "primary" },
    { name: "CSS", value: 90, color: "success" },
    { name: "JavaScript", value: 85, color: "warning" },
    { name: "React", value: 80, color: "info" },
  ];

  const backend = [
    { name: "Node.js", value: 80, color: "dark" },
    { name: "Express.js", value: 78, color: "danger" },
    { name: "MySQL", value: 82, color: "secondary" },
    { name: "Git & GitHub", value: 88, color: "primary" },
  ];

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">My Skills</h2>
          <p className="text-muted">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="row g-4">

          {/* Frontend */}
          <div className="col-lg-6">
            <div className="skill-card">

              <h2 className="mb-4">Frontend Skills</h2>

              {frontend.map((skill, index) => (
                <div key={index} className="mb-4">

                  <h5>{skill.name}</h5>

                  <div className="progress">
                    <div
                      className={`progress-bar bg-${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    >
                      {skill.value}%
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* Backend */}
          <div className="col-lg-6">
            <div className="skill-card">

              <h2 className="mb-4">Backend Skills</h2>

              {backend.map((skill, index) => (
                <div key={index} className="mb-4">

                  <h5>{skill.name}</h5>

                  <div className="progress">
                    <div
                      className={`progress-bar bg-${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    >
                      {skill.value}%
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;