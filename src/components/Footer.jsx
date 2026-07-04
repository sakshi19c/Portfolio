
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">

        <div className="row">

          {/* Left */}
          <div className="col-lg-4 mb-4">
            <h3 className="fw-bold">Sakshi Chaurasia</h3>
            <p className="text-light">
              Passionate Full Stack Web Developer dedicated to building modern,
              responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">
            <h4 className="fw-bold mb-3">Quick Links</h4>

            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-4 mb-4">
            <h4 className="fw-bold mb-3">Connect With Me</h4>

            <div className="d-flex gap-3">

              <a href="#" className="social-icon">
                <i className="bi bi-github"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="bi bi-envelope-fill"></i>
              </a>

            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 Sakshi Chaurasia. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
