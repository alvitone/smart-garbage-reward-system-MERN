import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h3>
            <span className="contact-title">Contact Us</span>
          </h3>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="contact-form">

              <div className="row">
                <div className="col form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Query Here..."
                  required
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-success">
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
