import { types } from "../types";
import { RequestStatusType, SignInResponseType } from "../../api/types";
import { authActionsType } from "./actionCreators";

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
type InitialStateType = {
  isLoggedIn: boolean
  status: RequestStatusType
  userData: SignInResponseType
}

export const authReducer = (state: InitialStateType = initialState, action: authActionsType) => {
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
