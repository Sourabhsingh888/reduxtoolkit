import axios from 'axios';

export const signupAPI = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/usersignup', userData);
    return response.data; // Return the response data
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an error
      throw new Error('Error sending request to the server.');
    }
  }
};
