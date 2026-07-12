
function Contact() {
  return (
    <section id="contact" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Me</h1>
        <p className="text-muted">
          Have a project in mind or want to collaborate? Feel free to get in touch!
        </p>
      </div>

      <div className="row g-4">

        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="card border-0 shadow rounded-4 p-4 h-100">

            <h3 className="fw-bold mb-4">Get In Touch</h3>

            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-geo-alt-fill fs-3 text-primary me-3"></i>
              <div>
                <h6 className="mb-1">Location</h6>
                <p className="text-muted mb-0">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-envelope-fill fs-3 text-primary me-3"></i>
              <div>
                <h6 className="mb-1">Email</h6>
                <p className="text-muted mb-0">sakshichaurasia59@example.com</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <i className="bi bi-telephone-fill fs-3 text-primary me-3"></i>
              <div>
                <h6 className="mb-1">Phone</h6>
                <p className="text-muted mb-0">+91 XXXXXXXXXX</p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow rounded-4 p-4">

            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-primary px-4">
                Send Message
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

