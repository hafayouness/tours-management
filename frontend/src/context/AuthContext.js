import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  laoding: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        laoding: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        laoding: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        laoding: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        laoding: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        laoding: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initial_state, AuthReducer);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        laoding: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
