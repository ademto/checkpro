import { createContext, useReducer, useEffect } from "react";

// Safely parse user from localStorage
const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;  // Only parse if user exists
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return null;
  }
};

// Initial State
const initialState = {
  user: getUserFromLocalStorage(),
  token: localStorage.getItem("token") || null,
};

// Reducer function to manage auth state
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return { ...state, user: action.payload.user, token: action.payload.token };
    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

// Create Context
export const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const user = getUserFromLocalStorage();
      if (token && user) {
        dispatch({ type: "LOGIN", payload: { token, user } });
      }
    } catch (error) {
      console.error("Error initializing auth state:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
