
const initialState = {
  isLoggedIn: false
}
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoggedInAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "login/SET-IS-LOGGED-IN":
      return {...state, isLoggedIn: action.value}
    default:
      return state
  }
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
