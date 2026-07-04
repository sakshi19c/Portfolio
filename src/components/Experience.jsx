
function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Self Learning",
      duration: "2025 - Present",
      description:
        "Learning full-stack web development by building real-world applications using MongoDB, Express.js, React, and Node.js while continuously improving problem-solving and development skills.",
    },

    {
      role: "Frontend Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      description:
        "Developing responsive and interactive user interfaces using HTML, CSS, Bootstrap, JavaScript, and React with a focus on clean design and excellent user experience.",
    },

    {
      role: "Backend Developer",
      company: "Project Based Learning",
      duration: "2025 - Present",
      description:
        "Creating REST APIs, integrating MongoDB databases, implementing authentication, and building scalable backend applications using Node.js and Express.js.",
    },

    {
      role: "AI Application Developer",
      company: "Brain Sync AI",
      duration: "2026 - Present",
      description:
        "Developing an AI-powered productivity platform featuring intelligent content generation, task management, workflow automation, and modern full-stack architecture.",
    },
  ];

  return (
    <section id="experience" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Experience</h1>
        <p className="text-muted">
          My journey of learning, building projects, and growing as a developer.
        </p>
      </div>

      <div className="row g-4">
        {experiences.map((exp, index) => (
          <div className="col-lg-6" key={index}>
            <div className="card h-100 shadow border-0 rounded-4">
              <div className="card-body">

                <span className="badge bg-primary mb-3">
                  {exp.duration}
                </span>

                <h4 className="fw-bold">
                  {exp.role}
                </h4>

                <h6 className="text-primary mb-3">
                  {exp.company}
                </h6>

                <p className="text-muted">
                  {exp.description}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

