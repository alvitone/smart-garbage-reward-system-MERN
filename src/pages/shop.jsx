import { Link } from "react-router-dom";
import { useState } from "react";
import manureImg from "../assets/manure.webp";

export default function Shop() {
  const [qty, setQty] = useState(1);

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <h2 className="mb-4">Eco Rewards Store</h2>

      <div className="row">
        <div className="col-lg-4">
          <div className="card p-3">
            <img src={manureImg} className="img-fluid mb-3" alt="Manure" />

            <h5>Organic Manure</h5>
            <p>
              Made from biodegradable waste. Improves soil fertility and
              promotes sustainable agriculture.
            </p>

            <p>
              <b>Cost:</b> 75 Points / kg
            </p>

            {/* Quantity */}
            <div className="mb-3">
              <label>Quantity (kg)</label>
              <input
                type="number"
                min="1"
                className="form-control"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            </div>

            <Link
              to={`/checkout?qty=${qty}`}
              className="btn btn-success w-100"
            >
              Redeem with Points
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
