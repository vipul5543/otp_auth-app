import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://otp-auth-api.onrender.com', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
