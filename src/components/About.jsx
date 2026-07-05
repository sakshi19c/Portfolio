import Abimg from "../assets/image/tech.jpg";

function About() {
  return (
    <section className="container py-5" id="about">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Me</h1>
        <p className="text-muted">
          Learn more about my background and experience.
        </p>
      </div>

      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <img
            src={Abimg}
            alt="About"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side */}
        <div className="col-lg-7">
          <h2 className="fw-bold mb-3">Full Stack Web Developer</h2>

          <p className="text-muted">
            I am a passionate Full Stack Web Developer who enjoys creating
            responsive and user-friendly web applications. I love learning
            new technologies and building modern websites using the MERN
            stack.
          </p>

          <div className="row mt-4">

            <div className="col-md-6">
              <p><strong>Name:</strong> Sakshi Chaurasia</p>
              <p><strong>Email:</strong> sakshichaurasia59@gmail.com</p>
              <p><strong>Phone:</strong> 7084241930 </p>
            </div>

            <div className="col-md-6">
              <p><strong>Experience:</strong> Student</p>
              <p><strong>Location:</strong> India </p>
              <p><strong>Freelance:</strong> Available</p>
            </div>

          </div>

          <button className="btn btn-primary mt-4">
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;