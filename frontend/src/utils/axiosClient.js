import axios from "axios";

const axiosClient = axios.create({
//   baseURL: 'http://localhost:3000',
  baseURL: 'https://leetcode-clone-9u8u.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor
// Add token to headers
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosClient;
