import axios from "axios";

const API_URL = "http://localhost:5000/api/policies";

// Function to submit policy data
export const createPolicy = async (policyData) => {
  try {
    const response = await axios.post(API_URL, policyData);
    return response.data;
  } catch (error) {
    console.error("Error creating policy:", error);
    throw error;
  }
};

// Function to fetch all policies
export const getPolicies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching policies:", error);
    throw error;
  }
};
