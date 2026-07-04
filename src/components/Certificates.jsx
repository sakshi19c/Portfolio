
import certificateImg from "../assets/image/pt.jpg";

function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Professional Certification",
      year: "2025",
      image: certificateImg,
    },
    {
      title: "React.js Development",
      issuer: "Professional Certification",
      year: "2025",
      image: certificateImg,
    },
    {
      title: "JavaScript Programming",
      issuer: "Professional Certification",
      year: "2025",
      image: certificateImg,
    },
  ];

  return (
    <section id="certificates" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Certificates</h1>
        <p className="text-muted">
          A few certifications that showcase my learning journey and technical
          skills.
        </p>
      </div>

      <div className="row g-4">
        {certificates.map((certificate, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="card h-100 border-0 shadow rounded-4 certificate-card">

              <img
                src={certificate.image}
                alt={certificate.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">

                <h5 className="fw-bold">
                  {certificate.title}
                </h5>

                <p className="text-primary mb-1">
                  {certificate.issuer}
                </p>

                <small className="text-muted">
                  Issued: {certificate.year}
                </small>

              </div>

              <div className="card-footer bg-white border-0 text-center pb-4">
                <button className="btn btn-primary px-4">
                  View Certificate
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;