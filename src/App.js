import React, { useState } from 'react';
import Login from './components/Login';
import VerifyOTP from './components/VerifyOTP';
import Dashboard from './components/Dashboard';

const App = () => {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [token, setToken] = useState("");

  return (
    <div>
      {step === 1 && <Login setStep={setStep} setMobileNumber={setMobileNumber} />}
      {step === 2 && <VerifyOTP mobileNumber={mobileNumber} setStep={setStep} setToken={setToken} />}
      {step === 3 && <Dashboard />}
    </div>
  );
};

export default App;
