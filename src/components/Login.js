import React, { useState } from 'react';
import axios from '../api/apiClient';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = ({ setStep, setMobileNumber }) => {
  const [mobileNumber, setNumber] = useState("");

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('/auth/login', { mobileNumber });
      toast.success(response.data.message);
      setMobileNumber(mobileNumber);
      setStep(2); // Move to OTP verification step
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

    </div>
  );
};

export default Login;
