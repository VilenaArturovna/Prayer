import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "./api";
import { SignInParamsType, SignInResponseType, SignUpParamsType, SignUpResponseType } from "./types";

export const authAPI = {
  signUp(data: SignUpParamsType) {
    return axios.post<SignUpResponseType>("https://prayer.herokuapp.com/auth/sign-up", data);
  },
  signIn(data: SignInParamsType) {
    return instance.post<SignInResponseType>("/auth/sign-in", data);
  },
  setTokenToAsyncStorage(token: string) {
    return AsyncStorage.setItem("token", token);
  },
  setIsLoggedInToAsyncStorage(value: boolean) {
    return AsyncStorage.setItem("isLoggedIn", JSON.stringify(value));
  },
  logOut() {
    return AsyncStorage.clear();
  }
};
