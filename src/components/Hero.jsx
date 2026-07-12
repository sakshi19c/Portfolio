import myimg from "../assets/image/hero.png";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center hero-row">

          {/* Left Side */}
          <div className="col-lg-6 hero-content">

            <h6 className="hero-subtitle">
              HELLO, I'M
            </h6>

            <h1 className="hero-title">
              Sakshi Chaurasia
            </h1>

            <h3 className="hero-role">
              Full Stack Web Developer
            </h3>

            <p className="hero-description">
              I design and develop modern, responsive, and user-friendly web applications using React, JavaScript, HTML, CSS, Bootstrap, Node.js, Express.js, Flask, MongoDB, and AI technologies, with a focus on clean design, high performance, and seamless user experiences.

            </p>

            <div className="hero-buttons">
              <button
              className="btn btn-primary hire-btn"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }>
                  Hire Me
              </button>

              <button className="btn btn-outline-dark cv-btn">
                Download CV
              </button>
            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">

            <div className="hero-image">
              <img src={myimg} alt="Profile" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;