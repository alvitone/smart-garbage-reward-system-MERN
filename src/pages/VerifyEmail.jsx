import { useState } from "react";

export default function VerifyEmail() {
  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    // Later this will call backend OTP verify API
    console.log({ otp });
  };

  return (
    <div>
      <h1>Verify Email</h1>

      <form onSubmit={handleVerify}>
        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
