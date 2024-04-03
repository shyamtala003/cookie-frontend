import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "http://localhost:3000/", // Your API base URL
  withCredentials: true, // Send cookies with every request
});

// Common function for API calls
const apiCall = async ({ url, method = "get", data = null, params = null }) => {
  try {
    const response = await api({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(
      "API call error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default apiCall;
