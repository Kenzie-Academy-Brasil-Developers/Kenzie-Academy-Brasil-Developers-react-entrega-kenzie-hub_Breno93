import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});
