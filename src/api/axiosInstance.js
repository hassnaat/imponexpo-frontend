import axios from "axios";

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  // baseURL: `http://127.0.0.1:5000/api/`,
  baseURL: `https://imponexpo.onrender.com/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers["Authorization"] = `Bearer ${user?.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for any additional global handling
axiosInstance.interceptors.response.use(
  (response) => {
    // Perform any operation before returning the response
    return response;
  },
  (error) => {
    // Handle global errors
    // For example, you can redirect to login if the response is 401
    if (error.response && error.response.status === 401) {
      //   window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
