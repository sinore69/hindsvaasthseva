import axios from "axios";

const authApiUrl = import.meta.env.VITE_AUTH_API_URL;

export const login = async ({email, password}) => {
  try {
    const response = await axios.post(`${authApiUrl}/login`, {email, password});
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signUp = async ({phoneNumber, email, password}) => {
  try {
    const response = await axios.post(`${authApiUrl}/signup`, {phoneNumber, email, password});
    return response;
  } catch (error) {
    return error.response;
  }
};



export default {
  signUp,
  login
};
