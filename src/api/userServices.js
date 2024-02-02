import axiosInstance from "./axiosInstance";

// Login User
export const loginUser = async (loginData) => {
  return await axiosInstance.post("users/login", loginData);
};

// Register User
export const registerUser = async (userData) => {
  return await axiosInstance.post("users/register", userData);
};

// Reset Password
export const resetPassword = async (passwordData) => {
  return await axiosInstance.post("users/reset-password", passwordData);
};
// New Password
export const newPassword = async (passwordData) => {
  return await axiosInstance.post("users/new-password", passwordData);
};

// Forgot Password
export const forgotPassword = async (data) => {
  return await axiosInstance.post("users/forgot-password", data);
};
