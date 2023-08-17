// Import the axios library to make HTTP requests
import axios from "axios";

// Define a function to fetch user profiles from the API
export const getProfile = () => {
  // Use axios to make a GET request to the API endpoint
  return axios.get("https://panorbit.in/api/users.json");
};