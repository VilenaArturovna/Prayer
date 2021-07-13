import { types } from "../types";

const initialState: InitialStateType = {
  isLoggedIn: false,
  status: 'loading'
}
export type RequestStatusType = 'loading' | 'succeeded'
type InitialStateType = {
  isLoggedIn: boolean
  status: RequestStatusType
}
type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setAppStatusAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "login/SET-IS-LOGGED-IN":
      return {...state, isLoggedIn: action.value}
    case types.APP_SET_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: types.APP_SET_STATUS, status} as const)
