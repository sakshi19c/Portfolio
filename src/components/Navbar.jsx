function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top custom-navbar">

      <div className="container-fluid px-4">

        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#home">
          Portfolio
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#certificates">Certificates</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;