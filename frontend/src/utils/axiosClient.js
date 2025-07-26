import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Do not attach token for login or register requests
    const excludedPaths = ['/user/login', '/user/register']; // Add other paths if needed

    const shouldSkipAuth = excludedPaths.some(path => config.url?.includes(path));

    if (!shouldSkipAuth) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
