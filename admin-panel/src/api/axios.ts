import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend-api.com",
});

export default api;
