import wasteImage from "../../assets/waste.png";

export default function AboutSection(){
    return (
    <section id="about" className="about section-bg">
      <div className="container">

        <div className="section-title">
          <h3>
            <span style={{ color: "skyblue" }}>About Us</span>
          </h3>
          <p>
            “The greatest threat to our planet is the belief that someone else will save it.”
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img
              src={wasteImage}
              className="img-fluid"
              alt="Waste management"
            />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 d-flex flex-column justify-content-center">
            <p className="fst-italic">
              <b>Waste management</b> is one of the central themes of the circular economy.
              The expectations from waste collection have remarkably grown in the past years.
              Garbage pickup and waste collection alone are no longer enough for cities.
              Garbage waste can be decomposed and degraded by using microbes.
            </p>

            <p className="kai">
              <b>Non Bio-degradable waste</b> cannot be decomposed by using microbes.
              The objective of this work is to segregate the garbage waste into
              <b> bio-degradable and non bio-degradable waste.</b>
              Rewards will be provided to the segregator on the basis of points they achieved
              by properly separating the wastes and providing to the garbage collector.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}