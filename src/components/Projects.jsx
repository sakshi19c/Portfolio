import project1 from "../assets/image/s.jpg";
import project2 from "../assets/image/p.jpg";
import project3 from "../assets/image/b.jpg";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website built using React and Bootstrap.",
      tech: [
        { name: "React", color: "primary" },
        { name: "Bootstrap", color: "dark" },
      ],
      btn: "primary",
    },
    {
      image: project2,
      title: "Todo App",
      description:
        "Task management application with CRUD features.",
      tech: [
        { name: "React", color: "success" },
        { name: "JavaScript", color: "warning text-dark" },
      ],
      btn: "success",
    },
    {
      image: project3,
      title: "E-Commerce UI",
      description:
        "Modern shopping website interface using Bootstrap.",
      tech: [
        { name: "HTML", color: "danger" },
        { name: "CSS", color: "info" },
      ],
      btn: "danger",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">My Projects</h2>
          <p className="text-muted">
            Here are some of my recent projects.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card h-100">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="p-4">

                  <h3 className="fw-bold mb-3">{project.title}</h3>

                  <p className="text-muted">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className={`badge bg-${item.color} me-2`}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className={`btn btn-${project.btn} me-2`}
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="btn btn-outline-dark"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;