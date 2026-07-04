function Services() {
  const services = [
    {
      icon: "bi bi-code-slash",
      title: "Web Development",
      description:
        "Build responsive and modern websites using HTML, CSS, Bootstrap and React.",
    },
    {
      icon: "bi bi-palette",
      title: "UI / UX Design",
      description:
        "Design clean, attractive and user-friendly website interfaces.",
    },
    {
      icon: "bi bi-server",
      title: "Backend Development",
      description:
        "Create secure REST APIs using Node.js, Express.js and MySQL.",
    },
  ];

  return (
    <section id="services" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Services</h1>
        <p className="text-muted">
          Services I provide to build modern web applications.
        </p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-lg-4" key={index}>
            <div className="card p-4 text-center shadow border-0 rounded-4">
              <div className="service-icon mb-3">
                <i className={service.icon}></i>
              </div>

              <h4>{service.title}</h4>

              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;