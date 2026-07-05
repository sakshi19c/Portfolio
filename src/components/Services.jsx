function Services() {
  const services = [
    {
      icon: "bi bi-code-slash",
      color: "primary",
      title: "Web Development",
      description:
        "Build responsive and modern websites using HTML, CSS, Bootstrap and React.",
    },
    {
      icon: "bi bi-palette",
      color: "success",
      title: "UI / UX Design",
      description:
        "Design clean, attractive and user-friendly website interfaces.",
    },
    {
      icon: "bi bi-database-fill",
      color: "danger",
      title: "Backend Development",
      description:
        "Create secure REST APIs using Node.js, Express.js and MySQL.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">My Services</h2>
          <p className="text-muted">
            Services that I provide to my clients.
          </p>
        </div>

        <div className="row g-4">

          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="card service-card border-0 shadow-sm h-100">

                <div className="card-body text-center p-4">

                  <i
                    className={`${service.icon} text-${service.color}`}
                    style={{ fontSize: "70px" }}
                  ></i>

                  <h3 className="fw-bold mt-4 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted">
                    {service.description}
                  </p>

                  <button
                    className={`btn btn-outline-${service.color} w-100 mt-3`}
                  >
                    Learn More
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;