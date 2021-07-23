import axios from "axios";
import { store } from "../redux/store";

let token = store.getState().auth.userData.token;
token = token || store.getState().auth.userData.token;
export const instance = axios.create({
  baseURL: "https://prayer.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
    accept: "*/*"
  }
});
