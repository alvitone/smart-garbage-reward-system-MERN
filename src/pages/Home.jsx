import AboutSection from "../components/home/AboutSection.jsx";
import "../../src/pages/Home.css"
import "./ServicesSection.css";
import ContactSection from "../components/home/ContactSection.jsx";




const services = [
  {

    icon: "fa-solid fa-trophy",
    title: "Reward System",
    description:
      "Rewards will be provided on daily basis of waste segregation",
    link: "/rewards",
  },
  {
    icon: "fa-solid fa-trash-can",
    title: "Waste Collection",
    description:
      "Efficiently remove any type of urban or industrial waste using all systems available",
    link: "/waste-collection",
  },
  
  {
    icon: "fa-solid fa-earth-africa",
    title: "Planting Trees",
    description:
      "With the bio-degradable waste we can plant more trees",
    link: "/planting-trees",
  },
  
  {
    icon: "fa-solid fa-leaf",
    title: "Manure Production",
    description:
      "Plays a vital role in sustainable agriculture by recycling nutrients",
    link: "/manure-production",
  },
];
export default function Home() {
  return (
  
    <div style={{ marginTop: "80px" }}>
      {/* Hero section  */}
        <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <h1 className="hero-title">
  Trash for <span className="hero-highlight">Peace</span>
</h1>

        <h2  className="hero-title">Join the Race to Make the World a Better Place</h2>

        <div className="d-flex">
          <a href="#about" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
      <AboutSection/>
        <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h3>
            Check our <span className="text-info">Services</span>
          </h3>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 d-flex align-items-stretch mt-3"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>
                  <a href={service.link}>{service.title}</a>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <ContactSection/>
    </div>
  );
}
