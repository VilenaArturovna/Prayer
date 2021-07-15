import { types } from "../types";
import { SignInResponseType } from "../../api/api";

const initialState: InitialStateType = {
  isLoggedIn: false,
  status: "succeeded",
  userData: {
    id: 0,
    name: "",
    email: "",
    token: ""
  }
};
export type RequestStatusType = "loading" | "succeeded"
type InitialStateType = {
  isLoggedIn: boolean
  status: RequestStatusType
  userData: SignInResponseType
}
type ActionsType =
  ReturnType<typeof setIsLoggedInAC> |
  ReturnType<typeof setAppStatusAC> |
  ReturnType<typeof signInAC> |
  ReturnType<typeof setTokenAC> |
  ReturnType<typeof logOutAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case types.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.value };
    case types.APP_SET_STATUS:
      return { ...state, status: action.status };
    case types.SIGN_IN_UP:
      return { ...state, userData: action.data, isLoggedIn: true };
    case types.SET_TOKEN: {
      return { ...state, userData: { ...state.userData, token: action.token } };
    }
    case types.LOG_OUT: {
      return { ...state, isLoggedIn: false, userData: { ...state.userData, token: "", id: 0, name: "", email: "" } };
    }
    default:
      return state;
  }
};

export const setIsLoggedInAC = (value: boolean) => ({ type: types.SET_IS_LOGGED_IN, value } as const);
export const setAppStatusAC = (status: RequestStatusType) => ({ type: types.APP_SET_STATUS, status } as const);
export const signInAC = (data: SignInResponseType) => ({
  type: types.SIGN_IN_UP,
  data
} as const);
export const setTokenAC = (token: string) => ({
  type: types.SET_TOKEN,
  token
} as const);
export const logOutAC = () => ({ type: types.LOG_OUT } as const);
