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
        token: response.data.token,
        name: response.data.name,
        email: response.data.email,
        role_id: response.data.role_id,
        avatar: `https://www.gravatar.com/avatar/${md5(
          response.data.email
        )}?d=identicon`,
      };

      dispatch({ type: LOGIN_USER, payload: userData });

      // Remember me özelliği için token'ı kaydet
      if (credentials.rememberMe) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("User remembered:", userData); // Kontrol amaçlı log
      } else {
        // Remember me işaretlenmemişse, session storage'a kaydet
        sessionStorage.setItem("token", userData.token);
        sessionStorage.setItem("user", JSON.stringify(userData));
        console.log("User stored in session:", userData); // Kontrol amaçlı log
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

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

export const checkAuthStatus = () => {
  return (dispatch) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const savedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (token && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch(setUser(user));
        console.log("Restored user session:", user); // Kontrol amaçlı log
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        delete api.defaults.headers.common["Authorization"];
      }
    }
  };
};

export default api;
