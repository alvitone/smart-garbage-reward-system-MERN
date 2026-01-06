import { useEffect, useState } from "react";
import api from "../services/api";
import "./UserProfile.css";
import { Link, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function UserProfile() {
  const [data, setData] = useState(null);
  const [editing, setEditing] = useState(false);

  const loadData = () => {
    api.get("/user/me").then((res) => setData(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);


  const generateQR = async () => { const res = await api.post("/qr/generate"); setData({ ...data, qr: { qrImage: res.data.qrImage } }); };
  if (!data) return <p>Loading...</p>;

  const { user, points, qr } = data;

  return (
  <div className="container user-profile">

      <div className="row">

        {/* LEFT CARD */}
    <div className="col-lg-6">
  <div className="card p-3">
    <h5>User Details</h5>

    {!editing && user?.name && (
      <>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Address:</b> {user.address}</p>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </>
    )}

    {!editing && !user?.name && (
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => setEditing(true)}
      >
        Create Profile
      </button>
    )}

    {editing && (
      <UserForm
        mode={user?.name ? "edit" : "create"}
        initialData={user}
        onSuccess={() => {
          setEditing(false);
          loadData();
        }}
      />
    )}
  </div>
</div>


        {/* RIGHT SIDE */}
        <div className="col-lg-6">

          {/* QR CARD */}
          <div className="card p-3 mb-3 text-center">
            <h5>QR Code</h5>
            {qr ? (
              <img src={qr.qrImage} alt="QR Code" width="200" />
            ) : (
              <button className="btn btn-success" onClick={generateQR}>
                Generate QR
              </button>
            )}
          </div>

          {/* POINTS CARD */}
          <div className="card p-3 text-center">
            <h5>Points</h5>
            <h2>{points}</h2>
            <button className="button1"><Link className="nav-link" to="/shop">Shop</Link> </button>
          </div>

        </div>
      </div>
    </div>
  );
}
