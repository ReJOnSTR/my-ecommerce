import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../actions/clientActions";

const initialState = {
  user: null,
  roles: [],
  theme: "",
  language: "",
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
    case LOGIN_USER:
    case REGISTER_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}
