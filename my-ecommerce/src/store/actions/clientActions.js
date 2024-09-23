import axios from "axios";
import { toast } from "react-toastify";
import md5 from "md5";

// Action Types
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";
export const VERIFY_TOKEN = "VERIFY_TOKEN";

// API configuration
const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Error fetching roles:", error);
      toast.error("Failed to fetch roles");
    }
  };
};

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/signup", userData);
      dispatch({ type: REGISTER_USER, payload: response.data });
      toast.success("Registration successful! Please login.");
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
      throw error;
    }
  };
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", credentials);
      const userData = {
        ...response.data,
        avatar: `https://www.gravatar.com/avatar/${md5(
          response.data.email
        )}?d=identicon`,
      };

      dispatch({ type: LOGIN_USER, payload: userData });

      if (credentials.rememberMe) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        sessionStorage.setItem("token", userData.token);
        sessionStorage.setItem("user", JSON.stringify(userData));
      }

      api.defaults.headers.common["Authorization"] = userData.token;

      toast.success("Login successful!");
      return userData;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
      throw error;
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    delete api.defaults.headers.common["Authorization"];
    dispatch({ type: LOGOUT_USER });
    toast.info("You have been logged out.");
  };
};

export const verifyToken = () => async (dispatch) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const savedUser = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user") || "{}"
  );

  if (token) {
    try {
      api.defaults.headers.common["Authorization"] = token;
      const response = await api.get("/verify");
      const userData = {
        ...response.data,
        token: token,
        avatar:
          savedUser.avatar ||
          `https://www.gravatar.com/avatar/${md5(
            response.data.email
          )}?d=identicon`,
      };
      dispatch({ type: VERIFY_TOKEN, payload: userData });

      // Update stored user data
      if (localStorage.getItem("token")) {
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        sessionStorage.setItem("user", JSON.stringify(userData));
      }

      return userData;
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      delete api.defaults.headers.common["Authorization"];
      dispatch({ type: LOGOUT_USER });
    }
  } else {
    dispatch({ type: LOGOUT_USER });
  }
};

export default api;
