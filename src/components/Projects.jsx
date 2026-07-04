import projectImg from "../assets/image/s.jpg";
import projectImg1 from "../assets/image/p.jpg";
import projectImg2 from "../assets/image/b.jpg";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website built using React and Bootstrap.",
      tech: "React • Bootstrap • CSS",
      image: projectImg1,
      github: "#",
      live: "#",
    },

    {
      title: "Bank Management System",
      description:
        "A full-stack banking application that enables users to create accounts, manage customer details, perform deposits, withdrawals, fund transfers, and securely maintain banking records through an intuitive dashboard.",
      tech: "React • Node.js • Express • MongoDB",
      image: projectImg2,
      github: "#",
      live: "#",
    },

    {
      title: "Brain Sync AI",
      description:
        "An AI-powered productivity platform designed to help users organize ideas, generate content, manage tasks, and boost productivity through intelligent automation and a modern user interface.",
      tech: "React • AI • Node.js • Express • MongoDB",
      image: projectImg,
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Projects</h1>
        <p className="text-muted">
          Here are some of the projects I have built while learning and
          exploring modern web development technologies.
        </p>
      </div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="card h-100 border-0 rounded-4">

              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                style={{
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">

                <h4 className="fw-bold mb-3">
                  {project.title}
                </h4>

                <p className="text-muted">
                  {project.description}
                </p>

                <p className="fw-semibold text-primary">
                  {project.tech}
                </p>

                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark me-2"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;