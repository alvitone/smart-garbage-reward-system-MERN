import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

const POINTS_PER_KG = 75;

export default function Checkout() {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);
  const [success, setSuccess] = useState(false);

  const [params] = useSearchParams();
  const qty = Number(params.get("qty")) || 1;

  const requiredPoints = qty * POINTS_PER_KG;

  useEffect(() => {
    api.get("/user/me").then((res) => {
      setUser(res.data.user);
      setPoints(res.data.points);
    });
  }, []);

  const handleRedeem = async () => {
   api.post("/orders/redeem", {
  product: "Organic Manure",
  quantity: qty,
});

    setSuccess(true);
  };

  if (!user) return <p>Loading...</p>;

  if (success) {
    return (
      <div className="container" style={{ marginTop: "80px" }}>
        <h2>✅ Redemption Successful</h2>
        <p>Your manure order has been placed.</p>
        <p>Points used: {requiredPoints}</p>
      </div>
    );
  }

  const canRedeem = points >= requiredPoints;

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <h2>Checkout</h2>

      {/* Address */}
      <div className="card p-3 mb-3">
        <h5>Delivery Address</h5>
        <p>{user.name}</p>
        <p>{user.address}</p>
        <p>{user.email}</p>
      </div>

      {/* Order Summary */}
      <div className="card p-3 mb-3">
        <h5>Order Summary</h5>
        <p><b>Product:</b> Organic Manure</p>
        <p><b>Quantity:</b> {qty} kg</p>
        <p><b>Cost:</b> {requiredPoints} points</p>
        <p><b>Your Points:</b> {points}</p>
        <p>
          <b>Remaining:</b>{" "}
          {canRedeem ? points - requiredPoints : "Insufficient points"}
        </p>
      </div>

      <button
        className="btn btn-success w-100"
        disabled={!canRedeem}
        onClick={handleRedeem}
      >
        Redeem with Points
      </button>

      {!canRedeem && (
        <p className="text-danger mt-2">
          You don’t have enough points to redeem this item.
        </p>
      )}
    </div>
  );
}
