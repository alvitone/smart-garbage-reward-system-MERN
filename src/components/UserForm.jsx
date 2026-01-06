import { useState } from "react";
import api from "../services/api";

export default function UserForm({ mode, initialData, onSuccess }) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    age: initialData?.age || "",
    address: initialData?.address || "",
    aadhar: initialData?.aadhar || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "create") {
      await api.post("/user", form);
    } else {
      await api.put("/user", form);
    }

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-2"
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-2"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        name="aadhar"
        placeholder="Aadhar Number"
        value={form.aadhar}
        onChange={handleChange}
        required
      />

      <button className="btn btn-success w-100">
        {mode === "create" ? "Create Profile" : "Update Profile"}
      </button>
    </form>
  );
}
