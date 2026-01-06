import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          {/* Project Info */}
          <div className="col-lg-4 col-md-6 footer-section">
            <h4>Smart Garbage Reward System</h4>
            <p>
              Segregate waste, earn rewards, and help build a cleaner,
              greener future for everyone.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-lg-4 col-md-6 footer-section">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12 footer-section">
            <h5>Contact</h5>
            <p>Email: alvitone1090@gmail.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Smart Garbage Reward System. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
