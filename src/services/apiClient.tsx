import axios from 'axios';

const API_KEY = 'b676307b36dd7744670bd0683593e935';
const baseURL = 'https://v3.football.api-sports.io/';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default apiClient;
