import certificate1 from "../assets/image/certificate1.jpeg";
import certificate2 from "../assets/image/certificate2.jpeg";
import certificate3 from "../assets/image/certificate3.jpeg";

function Certificates() {
  const certificates = [
    {
      image: certificate1,
      title: "Genrative AI",
      issuer: "Issued by TCS",
      color: "primary",
    },
    {
      image: certificate2,
      title: "Cybersecurity fundamentals",
      issuer: "Issued by IBM",
      color: "success",
    },
    {
      image: certificate3,
      title: "Google Cloud Generative AI",
      issuer: "Issued by Issued by Google Cloud",
      color: "warning",
    },
  ];

  return (
    <section id="certificates" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">My Certificates</h2>
          <p className="text-muted">
            Professional certifications and achievements.
          </p>
        </div>

        <div className="row g-4">

          {certificates.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="card certificate-card shadow border-0 h-100">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />

                <div className="card-body">

                  <h4 className="fw-bold">{item.title}</h4>

                  <p className="text-muted">
                    {item.issuer}
                  </p>

                  <button className={`btn btn-${item.color} w-100`}>
                    View Certificate
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

export default Certificates;