import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", percentage: 90 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", percentage: 85 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", percentage: 80 },
    { name: "React", icon: <FaReact />, color: "#61DAFB", percentage: 75 },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", percentage: 70 },
    { name: "Express.js", icon: <SiExpress />, color: "#000000", percentage: 65 },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F", percentage: 60 },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="row g-4">

          {/* FRONTEND */}
          <div className="col-lg-6">
            <div className="skill-category">
              <h3 className="text-primary mb-4">💻 Frontend Development</h3>

              <div className="row g-3">
                {frontend.map((skill, index) => (
                  <div className="col-6" key={index}>
                    <div className="skill-box">

                      <div
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>

                      <h6>{skill.name}</h6>

                      {/* Percentage */}
                      <span className="skill-percent">
                        {skill.percentage}%
                      </span>

                      {/* Progress Bar */}
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${skill.percentage}%`,
                            background: skill.color,
                          }}
                        />
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="col-lg-6">
            <div className="skill-category">
              <h3 className="text-success mb-4">⚙ Backend Development</h3>

              <div className="row g-3">
                {backend.map((skill, index) => (
                  <div className="col-6" key={index}>
                    <div className="skill-box">

                      <div
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>

                      <h6>{skill.name}</h6>

                      {/* Percentage */}
                      <span className="skill-percent">
                        {skill.percentage}%
                      </span>

                      {/* Progress Bar */}
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${skill.percentage}%`,
                            background: skill.color,
                          }}
                        />
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;