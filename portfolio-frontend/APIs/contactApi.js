import axios from "axios";

// ✅ Strip trailing slash from BASE_URL to avoid double slashes
const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "");

export const sendContactForm = async (formData) => {
  return await axios.post(`${BASE_URL}/api/messages`, formData);
};