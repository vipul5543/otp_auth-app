import React, { useState } from 'react';
import axios from '../api/apiClient';
import { toast } from 'react-toastify';

const VerifyOTP = ({ mobileNumber, setStep, setToken }) => {
  const [otp, setOTP] = useState("");

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('/auth/verify-otp', { mobileNumber, otp });
      toast.success("OTP Verified!");
      localStorage.setItem('authToken', response.data.token);
      setToken(response.data.token);
      setStep(3); // Move to Dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP Verification Failed");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <p>OTP sent to {mobileNumber}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default VerifyOTP;
